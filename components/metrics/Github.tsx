import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '../../lib/fetcher';
import { GitHub } from '../../lib/types';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const stars = new Number(data?.stars); //when api is working
  // const stars = 232
  const link = 'https://github.com/mayurbaravkar07';

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={22}
    />
  );
}
