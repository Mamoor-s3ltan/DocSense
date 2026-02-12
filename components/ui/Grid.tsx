"use client"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MemoryIcon from '@mui/icons-material/Memory';
import TryIcon from '@mui/icons-material/Try';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const steps = [
  {
    id: 1,
    title: "Upload Your Document",
    description: "Easily upload PDFs, text files, or any document format to get started.",
    icon:<CloudUploadIcon/>
  },
  {
    id: 2,
    title: "AI-Powered Analysis",
    description: "Our advanced AI analyzes your documents to extract key insights and information.",
    icon:<MemoryIcon/>

  },
  {
    id: 3,
    title: "Chat with Your Data",
    description: "Engage in natural language conversations with your documents for instant answers.",
    icon:<TryIcon/>
  }
];

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {steps.map((step) => (
          <Grid key={step.id} size={{ xs: 4, sm: 4, md: 4 }}>
            <Item className='h-full flex flex-col items-center justify-center gap-4 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center text-lg font-bold'>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}