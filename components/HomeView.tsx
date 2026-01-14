
import React from 'react';
import { SUBJECTS_DATA } from '../constants';

interface HomeViewProps {
  onStart: (key: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStart }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Bilimingizni sinab ko'ring
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Sport sohasidagi matematik tahlil, modellashtirish va saralash metodlari bo'yicha mukammal test platformasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {Object.entries(SUBJECTS_DATA).map(([key, data]) => (
          <div 
            key={key}
            className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all cursor-pointer flex flex-col"
            onClick={() => onStart(key)}
          >
            <div className="mb-4 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{data.title}</h3>
            <p className="text-slate-500 mb-6 flex-1">
              Jami {data.questions.length} ta savol. O'rtacha 15-20 daqiqa vaqt talab qilinadi.
            </p>
            <button className="w-full bg-slate-100 text-slate-800 font-semibold py-3 px-6 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
              Testni boshlash
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg mt-8">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-bold">Imtihonlarga tayyorgarlik ko'ring</h4>
            <p className="text-indigo-100">Har bir savol diqqat bilan saralangan va o'quv dasturi asosida tayyorlangan. Har safar savollar tartibi o'zgaradi.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-xs text-indigo-200 uppercase tracking-widest mt-1">Sifat kafolati</div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default HomeView;
