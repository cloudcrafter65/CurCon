interface FooterProps {
  lastUpdated: string;
  nextUpdate: string;
  isLoading: boolean;
}

export function Footer({ lastUpdated, nextUpdate, isLoading }: FooterProps) {
  const formatTime = (utcStr: string) => {
    try {
      const date = new Date(utcStr);
      const localTime = date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });

      // Get UTC time components
      const parts = utcStr.split(', ')[1].split(' ');
      const [day, month, year, time] = parts;
      const utcTime = `${day} ${month} ${year}, ${time} UTC`;

      return `${localTime} (${utcTime})`;
    } catch (error) {
      console.error('Error parsing date:', error);
      return 'Unknown';
    }
  };

  return (
    <footer className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
      {isLoading ? (
        'Fetching latest rates...'
      ) : (
        <>
          Rates last updated: {formatTime(lastUpdated)}
          <br />
          Next update at: {formatTime(nextUpdate)}
        </>
      )}
    </footer>
  );
}