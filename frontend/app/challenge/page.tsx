import { RamadanChallengePanel } from '@/components/challenge/RamadanChallengePanel';
import { challengeSnapshot } from '@/lib/mockData';

export default function ChallengePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <RamadanChallengePanel snapshot={challengeSnapshot} />
    </main>
  );
}
