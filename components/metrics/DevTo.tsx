import useSWR from 'swr';

import fetcher from '../../lib/fetcher';
import { MostViewedDevTo } from '../../lib/types';
import MetricCard from '@/components/metrics/Card';

export default function DevToCard() {
const { data } = useSWR<MostViewedDevTo>('/api/devto', fetcher);
  

  const stars = new Number(data?.stars); //when api is working
  // const stars = 232
  const link = 'https://github.com/matheusgomes062';

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={stars}
    />
  );
}
