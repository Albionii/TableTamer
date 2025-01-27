namespace TableTamer.Hash;
using Microsoft.AspNetCore.Identity;
public class PasswordService
{
    private readonly PasswordHasher<string> _passwordHasher = new PasswordHasher<string>();

    public string HashPassword(string password)
    {
        return _passwordHasher.HashPassword(null, password);
    }

    public PasswordVerificationResult VerifyPassword(string hashedPassword, string providedPassword)
    {
        return _passwordHasher.VerifyHashedPassword(null, hashedPassword, providedPassword);
    }
}

