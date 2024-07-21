import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from '../src/pages/dashboard/Dashboard';
import DoraMetrics from '../src/components/dorametrics/DoraMetrics';

describe('Dashboard', () => {
  it('renders the Dashboard component', () => {
    render(<Dashboard />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('DORA Metrics')).toBeInTheDocument();
  });

  it('renders LineChart with canvas', async () => {
    render(<DoraMetrics />);
    expect(screen.getByText('CYCLE TIME')).toBeInTheDocument();
    expect(screen.getByText('DEPLOY FREQUENCY')).toBeInTheDocument();
    expect(screen.getByText('MTTR')).toBeInTheDocument();
    expect(screen.getByText('CFR')).toBeInTheDocument();

    const canvasElement = document.querySelector('canvas');
    expect(canvasElement).toBeInTheDocument();
  });

  it('renders DateRangePicker with select boxes', () => {
    render(<DoraMetrics />);

    const dateRangePicker = screen.getByPlaceholderText(
      'YYYY-MM-DD - YYYY-MM-DD'
    );
    expect(dateRangePicker).toBeInTheDocument();
  });
});
