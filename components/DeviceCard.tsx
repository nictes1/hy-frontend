import React from 'react';
import { Settings2, Trash2, Activity, Droplet, Thermometer } from 'lucide-react';
import type { Device } from './DeviceManagement';

interface DeviceCardProps {
  device: Device;
  onDelete: () => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">ID: {device.chipId}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              title="Settings"
            >
              <Settings2 className="h-5 w-5" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
              title="Delete"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Activity className={`h-4 w-4 ${device.status === 'online' ? 'text-green-500' : 'text-gray-400'}`} />
          <span className={`ml-2 text-sm ${device.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
            {device.status === 'online' ? 'Online' : 'Offline'}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Thermometer className="h-5 w-5 mr-2" />
              <span>Temperature</span>
            </div>
            <span className="font-medium">{device.lastReading.temperature}°C</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Activity className="h-5 w-5 mr-2" />
              <span>Humidity</span>
            </div>
            <span className="font-medium">{device.lastReading.humidity}%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Droplet className="h-5 w-5 mr-2" />
              <span>Water Level</span>
            </div>
            <span className="font-medium">{device.lastReading.waterLevel}%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
        Last updated: {new Date(device.lastReading.timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default DeviceCard;