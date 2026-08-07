import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Workshops } from './components/Workshops';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { CommissionForm } from './components/CommissionForm';
import { Footer } from './components/Footer';
import GaleriaYorokobu from './components/GaleriaYorokobu';
import { CollectionItem } from './types';

export default function App() {
  const [preselectedItem, setPreselectedItem] = useState<CollectionItem | null>(null);

  const handleOpenCommission = () => {
    const el = document.getElementById('encargo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectItemForCommission = (item: CollectionItem) => {
    setPreselectedItem(item);
    handleOpenCommission();
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#211d1a] selection:bg-[#34548d] selection:text-white flex flex-col font-sans">
      <Header
        onOpenCommission={handleOpenCommission}
      />

      <main className="flex-1">
        <Hero
          onOpenCommission={handleOpenCommission}
        />

        <Collections
          onSelectItemForCommission={handleSelectItemForCommission}
        />

        <Workshops />

        <Blog />

        <About />

        <CommissionForm
          preselectedItem={preselectedItem}
          onClearPreselection={() => setPreselectedItem(null)}
        />
      </main>

      <Footer />
    </div>
  );
}
