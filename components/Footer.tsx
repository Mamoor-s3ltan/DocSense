import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  Stack,
  Link as MuiLink
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'white',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Logo and Description */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                background: 'linear-gradient(90deg, #9333ea 0%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              DocSense
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              AI-Powered Document Chat - Upload documents, PDFs, text files to chat with them
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            <MuiLink
              href="#home"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              Home
            </MuiLink>
            <MuiLink
              href="#about"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              About
            </MuiLink>
            <MuiLink
              href="#services"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              Services
            </MuiLink>
            <MuiLink
              href="#contact"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              Contact
            </MuiLink>
            <MuiLink
              href="#privacy"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href="#terms"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  color: '#9333ea',
                },
                transition: 'color 0.3s',
              }}
            >
              Terms of Service
            </MuiLink>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              sx={{
                color: '#9333ea',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                  color: 'white',
                  borderColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: '#9333ea',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                  color: 'white',
                  borderColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: '#9333ea',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                  color: 'white',
                  borderColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{
                color: '#9333ea',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                  color: 'white',
                  borderColor: 'transparent',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <FacebookIcon />
            </IconButton>
          </Box>

          {/* Copyright */}
          <Box
            sx={{
              textAlign: 'center',
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {currentYear} DocSense. All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}