import { InvestorUser } from './types';

/**
 * GRAMBANDHAN INVESTOR AUTHENTICATION CONTROLLER
 * 
 * Manages investor session, handles login/registration/demo auth,
 * and crucially preserves the selected project so that clicking
 * "View Project" or "Invest Now" smoothly carries over after logging in.
 */

type AuthChangeListener = (user: InvestorUser | null) => void;

class AuthManager {
  private currentUser: InvestorUser | null = null;
  private pendingProjectId: string | null = null;
  private listeners: AuthChangeListener[] = [];

  constructor() {
    this.loadPersistedSession();
  }

  private loadPersistedSession(): void {
    try {
      const saved = localStorage.getItem('grambandhan_investor_session');
      if (saved) {
        this.currentUser = JSON.parse(saved);
      }
    } catch {
      this.currentUser = null;
    }
  }

  public isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  public getUser(): InvestorUser | null {
    return this.currentUser;
  }

  public setPendingProject(projectId: string | null): void {
    this.pendingProjectId = projectId;
  }

  public getPendingProject(): string | null {
    return this.pendingProjectId;
  }

  public clearPendingProject(): void {
    this.pendingProjectId = null;
  }

  public login(email: string, _password?: string, name?: string): InvestorUser {
    const user: InvestorUser = {
      name: name || (email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase())),
      email: email,
      phone: '+880 1711-234567',
      nidVerified: true,
      portfolioValueBDT: 150000
    };

    this.currentUser = user;
    try {
      localStorage.setItem('grambandhan_investor_session', JSON.stringify(user));
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }

    this.notifyListeners();
    return user;
  }

  public demoLogin(): InvestorUser {
    return this.login('tariq.rahman@investor.bd', 'demo1234', 'Tariq Rahman');
  }

  public logout(): void {
    this.currentUser = null;
    try {
      localStorage.removeItem('grambandhan_investor_session');
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
    this.notifyListeners();
  }

  public onAuthChange(listener: AuthChangeListener): () => void {
    this.listeners.push(listener);
    // Immediately call with current state
    listener(this.currentUser);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      listener(this.currentUser);
    }
  }
}

export const authManager = new AuthManager();
