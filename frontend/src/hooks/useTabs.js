import { useState } from 'react';

const useTabs = () => {
    const [activeTab, setActiveTab] = useState('Vuelos');
    return { activeTab, setActiveTab };
};

export default useTabs;