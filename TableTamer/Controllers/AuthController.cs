using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using TableTamer.Auth;
using TableTamer.Data;
using TableTamer.DTO;
using TableTamer.Hash;

namespace TableTamer.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly JwtTokenService _jwtService;
        public AuthController(ApplicationDbContext context, JwtTokenService jwtService) { 
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginReq loginReq )
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == loginReq.Username);
            if (user == null)
            {
                return Unauthorized("User does not exist");
            }
            var passwordService = new PasswordService();
            var passReq = passwordService.VerifyPassword(user.PasswordHash, loginReq.Password);
            
            if (passReq == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid Username or Password");
            }

            var jwttoken = _jwtService.GenerateToken(user);
            return Ok(new 
                { 
                    token = jwttoken    
                }
            );
        }

        //[HttpPost("logout")]
        //public IActionResult Logout()
        //{

        //}
    }
}
