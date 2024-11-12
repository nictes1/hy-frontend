import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DeviceCard from './DeviceCard';
import AddDeviceModal from './AddDeviceModal';

export interface Device {
  id: string;
  name: string;
  chipId: string;
  status: 'online' | 'offline';
  lastReading: {
    temperature: number;
    humidity: number;
    waterLevel: number;
    timestamp: string;
  };
}

const DeviceManagement: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [devices, setDevices] = useState<Device[]>([
    {
      id: '1',
      name: 'Hydroponic System 1',
      chipId: 'HC2023001',
      status: 'online',
      lastReading: {
        temperature: 23.5,
        humidity: 65,
        waterLevel: 85,
        timestamp: new Date().toISOString(),
      },
    },
  ]);

  const handleAddDevice = (device: Omit<Device, 'id' | 'status' | 'lastReading'>) => {
    const newDevice: Device = {
      ...device,
      id: Math.random().toString(36).substr(2, 9),
      status: 'offline',
      lastReading: {
        temperature: 0,
        humidity: 0,
        waterLevel: 0,
        timestamp: new Date().toISOString(),
      },
    };
    setDevices([...devices, newDevice]);
    setIsAddModalOpen(false);
  };

  const handleDeleteDevice = (id: string) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Device Management</h1>
          <p className="text-gray-600">Monitor and manage your hydroponic systems</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Device
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map(device => (
          <DeviceCard
            key={device.id}
            device={device}
            onDelete={() => handleDeleteDevice(device.id)}
          />
        ))}
      </div>

      <AddDeviceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddDevice}
      />
    </div>
  );
};

export default DeviceManagement;