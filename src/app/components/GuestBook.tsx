import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, User } from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface GuestBookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('guestbook');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem('guestbook', JSON.stringify(entries));
    }
  }, [entries]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestBookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');

    // Supabase에 가상 데이터 1개 기록 (guestbook 테이블 가정)
    try {
      const { error } = await supabase.from('guestbook').insert({
        name: newEntry.name,
        message: newEntry.message,
        timestamp: newEntry.timestamp,
      });

      if (error) {
        console.error('Supabase 방명록 저장 실패:', error);
      } else {
        console.log('Supabase 방명록 저장 성공:', newEntry);
      }
    } catch (err) {
      console.error('Supabase 요청 중 오류:', err);
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          방명록 (Log)
        </motion.h2>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                이름
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all"
                  maxLength={50}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                메시지
              </label>
              <div className="relative">
                <MessageCircle size={18} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 남겨주세요"
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all resize-none"
                  maxLength={500}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
            >
              <Send size={18} />
              작성하기
            </motion.button>
          </form>
        </motion.div>

        {/* Entries List */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10"
            >
              <MessageCircle size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400">아직 작성된 방명록이 없습니다. 첫 번째 방명록을 남겨주세요!</p>
            </motion.div>
          ) : (
            entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20 hover:border-white/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                      <User size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{entry.name}</p>
                      <p className="text-xs text-gray-400">{formatDate(entry.timestamp)}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 ml-13 whitespace-pre-wrap break-words">{entry.message}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
