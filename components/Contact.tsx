"use client"
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  IconButton,
  Stack
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
    <Box
      id="contact"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 6,
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          {/* Contact Information */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '40%' } }}>
            <Stack spacing={3}>
              <Typography variant="h4" fontWeight="bold">
                Contact Information
              </Typography>
              
              {/* Email Card */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary" fontWeight="medium">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight="600">
                    contact@docsense.com
                  </Typography>
                </Box>
              </Paper>

              {/* Phone Card */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary" fontWeight="medium">
                    Phone
                  </Typography>
                  <Typography variant="body1" fontWeight="600">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Paper>

              {/* Location Card */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ color: 'white', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary" fontWeight="medium">
                    Location
                  </Typography>
                  <Typography variant="body1" fontWeight="600">
                    San Francisco, CA
                  </Typography>
                </Box>
              </Paper>

              {/* Social Media */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <IconButton
                    sx={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7e22ce 0%, #4338ca 100%)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7e22ce 0%, #4338ca 100%)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7e22ce 0%, #4338ca 100%)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={2}
              sx={{
                p: 5,
                borderRadius: 4,
                backgroundColor: 'white',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                      fullWidth
                      placeholder="Your Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#f9fafb',
                          '& fieldset': {
                            borderColor: '#e5e7eb',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9333ea',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9333ea',
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Your Email *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#f9fafb',
                          '& fieldset': {
                            borderColor: '#e5e7eb',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9333ea',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9333ea',
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                  </Box>
                  
                  <TextField
                    fullWidth
                    placeholder="Subject *"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f9fafb',
                        '& fieldset': {
                          borderColor: '#e5e7eb',
                        },
                        '&:hover fieldset': {
                          borderColor: '#9333ea',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#9333ea',
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    placeholder="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f9fafb',
                        '& fieldset': {
                          borderColor: '#e5e7eb',
                        },
                        '&:hover fieldset': {
                          borderColor: '#9333ea',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#9333ea',
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                    sx={{
                      py: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(90deg, #9333ea 0%, #7c3aed 100%)',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      boxShadow: '0 8px 24px rgba(147, 51, 234, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #7e22ce 0%, #6d28d9 100%)',
                        boxShadow: '0 12px 32px rgba(147, 51, 234, 0.5)',
                        transform: 'translateY(-2px)',
                      },
                      '&:disabled': {
                        background: '#e5e7eb',
                        color: '#9ca3af',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
    </section>
  );
}