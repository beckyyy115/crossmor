import { useCountUp } from '@/hooks/use-count-up';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
}: AnimatedCounterProps) {
  const { formattedCount, ref } = useCountUp({
    end,
    prefix,
    suffix,
    decimals,
    duration: 2000,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gradient font-mono mb-2">
        {formattedCount}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
