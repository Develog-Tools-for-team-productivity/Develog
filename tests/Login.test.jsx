import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../src/pages/login/LoginForm';

const mockNavigate = vi.fn();
const mockLocation = vi.fn(() => ({ search: '' }));

vi.mock('react-router-dom', async importOriginal => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation(),
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue({ search: '' });
    Object.defineProperty(window, 'location', {
      value: { href: 'http://localhost:3000/' },
      writable: true,
    });
  });

  it('GitHub 로그인 버튼을 렌더링합니다', () => {
    const { MemoryRouter } = require('react-router-dom');
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(screen.getByText('GitHub로 로그인')).toBeDefined();
  });

  it('버튼을 클릭하면 GitHub 인증 URL로 리디렉션됩니다', () => {
    const { MemoryRouter } = require('react-router-dom');

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const button = screen.getByText('GitHub로 로그인');
    fireEvent.click(button);

    expect(window.location.href).contain('/auth/github');
  });

  it('토큰으로 성공적인 로그인을 처리합니다', () => {
    const { MemoryRouter } = require('react-router-dom');
    mockLocation.mockReturnValue({ search: 'token=test-token' });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(localStorage.getItem('token')).toBe('test-token');
    expect(mockNavigate).toHaveBeenCalledWith('/select-repo');
  });
});
