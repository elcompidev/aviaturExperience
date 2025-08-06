import useTabs from '../hooks/useTabs';

const tabs = ['Vuelos', 'Hoteles', 'Autos'];

const TabsExperiencias = () => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <div className="h-screen w-full bg-white">
      <div className="flex justify-around bg-blue-100 py-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${tab === activeTab ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">{activeTab}</h2>
        <div className="mt-4 h-[400px] flex items-center justify-center bg-gray-100 rounded">
          <p>🌐 [Placeholder para vista 360° con Three.js]</p>
        </div>
      </div>
    </div>
  );
};

export default TabsExperiencias;
