import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/pages/login/Login';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('Login Component', () => {
  it('shows SignUpForm inputs when Sign up is clicked', async () => {
    render(
      <Provider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByPlaceholderText('Email을 입력해주세요')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Password을 입력해주세요')
    ).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText('Team Name을 입력해주세요')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText('GitHub Token을 입력해주세요')
    ).not.toBeInTheDocument();

    const signUpText = screen.getByText('Sign up');
    fireEvent.click(signUpText);

    expect(
      screen.getByPlaceholderText('Email을 입력해주세요')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Password을 입력해주세요')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Team Name을 입력해주세요')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('GitHub Token을 입력해주세요')
    ).toBeInTheDocument();
    expect(screen.getByText('인증하기')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });
});
