import './ConnectedContent.css';

import { NetworkSelector } from './components/NetworkSelector';
import type { SupportedChain } from './constants/chains';
import { useSwitchChain } from './hooks/useSwitchChain';
import { MessageFlowCard } from './MessageFlowCard';
import type { EIP6963ProviderDetail } from './types/wallet';

interface ConnectedContentProps {
  selectedProvider: EIP6963ProviderDetail;
  supportedChain: SupportedChain | undefined;
}

export function ConnectedContent({
  selectedProvider,
  supportedChain,
}: ConnectedContentProps) {
  const { switchChain } = useSwitchChain();

  const handleNetworkSelect = (chain: SupportedChain) => {
    switchChain(chain.chainId);
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="content-container-inner">
          <div className="content-container-inner-header">
            <h1>Message with cross chain</h1>
            <NetworkSelector
              selectedChain={supportedChain}
              onNetworkSelect={handleNetworkSelect}
              placeholder="Ethereum Sepolia"
            />
          </div>
          <p className="content-container-inner-description">
            Send a message using DegaGuardian on{' '}
            {supportedChain?.name || 'Ethereum Sepolia'} with{' '}
            <span className="highlight">0.0001 ETH payment</span>
          </p>
        </div>
        <MessageFlowCard
          selectedProvider={selectedProvider}
          supportedChain={supportedChain}
        />
      </div>
    </div>
  );
}
