import { Service } from '../types/service';
import { getServiceUrl } from '../config/network';

export const services: Service[] = [
  {
    name: 'Portainer',
    url: getServiceUrl('9443', 'https'),
    description: 'Container management and orchestration platform',
    icon: 'Container',
    category: 'infrastructure'
  },
  {
    name: 'Local LLM UI',
    url: getServiceUrl('8080'),
    description: 'Frontend interface for locally hosted language models',
    icon: 'Brain',
    category: 'ai'
  },
  {
    name: 'Kasm Workspace',
    url: getServiceUrl('443', 'https'),
    description: 'Containerized streaming workspaces',
    icon: 'Boxes',
    category: 'workspace'
  },
  {
    name: 'Uptime Kuma',
    url: getServiceUrl('3001'),
    description: 'System and container monitoring dashboard',
    icon: 'Activity',
    category: 'monitoring'
  }
];