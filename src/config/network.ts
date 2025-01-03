// Base configuration for network services
export const networkConfig = {
  // Base IP address for the homelab
  baseIP: 'your-server-ip-here',
  
  // Port configurations for each service
  ports: {
    portainer: '9443',
    llmUI: '8080',
    kasm: '443',
    uptimeKuma: '3001'
  }
};

// Helper function to generate service URLs
export function getServiceUrl(port: string, protocol: 'http' | 'https' = 'http'): string {
  return `${protocol}://${networkConfig.baseIP}:${port}`;
}