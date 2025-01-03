import React from 'react';
import { Cpu, HardDrive, Activity, Signal } from 'lucide-react';

export function SystemStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {[
        { icon: Cpu, label: 'CPU', value: '32%', color: 'blue' },
        { icon: HardDrive, label: 'Storage', value: '756GB', color: 'purple' },
        { icon: Activity, label: 'Memory', value: '8.2GB', color: 'orange' },
        { icon: Signal, label: 'Network', value: '1.2Gb/s', color: 'green' },
      ].map(({ icon: Icon, label, value, color }) => (
        <div
          key={label}
          className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-all"
        >
          <div className="flex items-center space-x-3">
            <Icon className={`w-5 h-5 text-${color}-500`} />
            <div>
              <p className="text-gray-400 text-sm">{label}</p>
              <p className="text-white font-mono">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}