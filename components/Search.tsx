'use client';
import { useState } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  Paper, 
  Typography, 
  Avatar,
  Collapse,
  Chip,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export default function Search() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<any[]>([]);
   const [showSources, setShowSources] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true); 
    setAnswer(''); 
    setSources([]);
    try {
      const res = await fetch('/api/search', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ query }) 
      });
      const data = await res.json();
      if (data.error) {
        setAnswer(`Error: ${data.error}`);
      } else { 
        setAnswer(data.answer || 'No answer generated'); 
        setSources(data.sources || []); 
      }

      await fetch('/api/chatHistory',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({query,answer:data.answer})
      })

    } catch (error: any) {
      setAnswer(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSearch();
    }
  };

  return (
     <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: 1,
          borderColor: 'divider',
          background: 'linear-gradient(90deg, #9333ea 0%, #4f46e5 100%)',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white">
          Chat
        </Typography>
      </Box>

      {/* Messages Container */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 3,
          backgroundColor: 'grey.50',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* User Message */}
        {query && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Paper
              elevation={1}
              sx={{
                maxWidth: '70%',
                p: 2,
                background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                color: 'white',
                borderRadius: 3,
                borderBottomRightRadius: 0.5,
              }}
            >
              <Typography variant="body1">{query}</Typography>
            </Paper>
          </Box>
        )}

        {/* AI Response */}
        {answer && (
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
              <SmartToyIcon fontSize="small" />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  borderBottomLeftRadius: 0.5,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}
                >
                  {answer}
                </Typography>
              </Paper>

              {/* Sources Section */}
              {sources && sources.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Chip
                    label={`${sources.length} Source${sources.length > 1 ? 's' : ''}`}
                    size="small"
                    onClick={() => setShowSources(!showSources)}
                    onDelete={() => setShowSources(!showSources)}
                    deleteIcon={showSources ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{ cursor: 'pointer' }}
                  />
                  
                  <Collapse in={showSources}>
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {sources.map((source, index) => (
                        <Paper
                          key={index}
                          variant="outlined"
                          sx={{
                            p: 2,
                            backgroundColor: 'grey.50',
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="caption" color="text.secondary" fontWeight="medium">
                            {source.metadata?.source || source.metadata?.file_name || 'Unknown'}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{
                              mt: 0.5,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {source.content}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>

      {/* Input Area */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: 'divider',
          backgroundColor: 'white',
        }}
      >
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Ask a question about your uploaded documents..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                },
              }}
            />
            <IconButton
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              sx={{
                background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                color: 'white',
                width: 48,
                height: 48,
                '&:hover': {
                  background: 'linear-gradient(135deg, #7e22ce 0%, #4338ca 100%)',
                },
                '&.Mui-disabled': {
                  backgroundColor: 'grey.300',
                },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon className='text-white'/>}
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Press Cmd/Ctrl + Enter to search
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}