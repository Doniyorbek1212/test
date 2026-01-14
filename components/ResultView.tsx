
import React from 'react';
import { Question } from '../types';
import { formatTime } from '../constants';

interface ResultViewProps {
  questions: Question[];
  answers: Record<number, string>;
  startTime: number | null;
  endTime: number | null;
  onRestart: () => void;
  onHome: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ 
  questions, 
  answers, 
  startTime, 
  endTime, 
  onRestart, 
  onHome 
}) => {
  const correctCount = questions.reduce((acc, q, idx) => {
    return q.correctAnswer === answers[idx] ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / questions.length) * 100);
  const timeTaken = startTime && endTime ? endTime - startTime : 0;

  const getStatus = () => {
    if (percentage >= 90) return { label: 'A’lo!', color: 'text-green-600', bg: 'bg-green-100', icon: '🏆' };
    if (percentage >= 70) return { label: 'Yaxshi!', color: 'text-indigo-600', bg: 'bg-indigo-100', icon: '⭐' };
    if (percentage >= 50) return { label: 'Qoniqarli', color: 'text-amber-600', bg: 'bg-amber-100', icon: '👍' };
    return { label: 'Yana harakat qiling', color: 'text-red-600', bg: 'bg-red-100', icon: '📚' };
  };

  const status = getStatus();

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 max-w-2xl mx-auto w-full">
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
        <div className={`p-8 ${status.bg} text-center space-y-2`}>
          <div className="text-6xl mb-4">{status.icon}</div>
          <h2 className={`text-3xl font-black ${status.color}`}>{status.label}</h2>
          <p className="text-slate-600 font-medium">Siz testni yakunladingiz!</p>
        </div>

        <div className="p-8 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Natija</div>
            <div className="text-3xl font-black text-slate-800">{percentage}%</div>
            <div className="text-sm text-slate-500 mt-1">{correctCount} / {questions.length} to'g'ri</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Sarflangan vaqt</div>
            <div className="text-3xl font-black text-slate-800">{formatTime(timeTaken)}</div>
            <div className="text-sm text-slate-500 mt-1">daqiqa:soniya</div>
          </div>
        </div>

        <div className="px-8 pb-8 space-y-4">
          <button 
            onClick={onRestart}
            className="w-full bg-indigo-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:-translate-y-1"
          >
            Testni qayta boshlash
          </button>
          <button 
            onClick={onHome}
            className="w-full bg-slate-100 text-slate-700 font-bold py-4 px-6 rounded-2xl hover:bg-slate-200 transition-all"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 px-2">Xatolar ustida ishlash</h3>
        <div className="space-y-3">
          {questions.map((q, idx) => {
            const isCorrect = q.correctAnswer === answers[idx];
            return (
              <div 
                key={idx} 
                className={`p-5 rounded-2xl border ${
                  isCorrect ? 'border-green-100 bg-green-50/50' : 'border-red-100 bg-red-50/50'
                }`}
              >
                <div className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm ${
                    isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {isCorrect ? '✓' : '×'}
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-800">{q.question}</p>
                    {!isCorrect && (
                      <div className="text-sm space-y-1">
                        <p className="text-slate-500">Sizning javobingiz: <span className="text-red-600 line-through">{answers[idx]}</span></p>
                        <p className="text-green-700 font-medium">To'g'ri javob: {q.correctAnswer}</p>
                      </div>
                    )}
                    {isCorrect && (
                        <p className="text-sm text-green-700 font-medium">Javobingiz to'g'ri: {q.correctAnswer}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultView;
