/**
 * Access control service for educational content
 * Technical Lead: Saleem Shaik
 */

type User = {
  hasPaid: boolean;
};

export class AccessControlService {
  canAccess(user: User): boolean {
    return user.hasPaid;
  }
}

