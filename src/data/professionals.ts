export interface Professional {
  id: string;
  name: string;
  profession: string;
  experience: string;
  location: string;
  imageUrl: string;
  skills: string[];
  rate: string;
}

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Cleeve Philip Wong',
    profession: 'Full Stack Developer',
    experience: '4 years',
    location: 'Davao City',
    imageUrl: '/professionals/wong.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    rate: '₱30,000 - ₱40,000/Project'
  },
  {
    id: '2',
    name: 'Ace Dela Cruz',
    profession: 'Full Stack Developer',
    experience: '4 years',
    location: 'Davao City',
    imageUrl: '/professionals/ace.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    rate: '₱30,000 - ₱40,000/Project'
  },
  {
    id: '3',
    name: 'Nicose John Soriano',
    profession: 'Web Developer | Graphic Designer',
    experience: '4 years',
    location: 'Davao City',
    imageUrl: '/professionals/niko.jpg',
    skills: ['Adobe Creative Suite', 'UI/UX Design', 'Brand Identity', 'Motion Graphics'],
    rate: '₱40,000 - ₱50,000/Project'
  },
  {
    id: '4',
    name: 'James Piastro',
    profession: 'Social Media Manager | Software Developer',
    experience: '4 years',
    location: 'Davao City',
    imageUrl: '/professionals/james.jpg',
    skills: ['Media Marketing', 'React', 'Video Editing', 'Bookkeeping'],
    rate: '₱40,000 - ₱50,000/month'
  },
  {
    id: '5',
    name: 'Renz Carl Jansen Sarucam',
    profession: 'UI/UX Designer | Web Designer',
    experience: '4 years',
    location: 'Davao City',
    imageUrl: '/professionals/renz.jpg',
    skills: ['Figma', 'Web Development', 'Training & Development'],
    rate: '₱40,000 - ₱50,000/month'
  },
  {
    id: '6',
    name: 'Adam Abdulbaki',
    profession: 'Bubble Developer',
    experience: '8 years',
    location: 'Davao City',
    imageUrl: '/professionals/adam.jpg',
    skills: ['Agile Methodology', 'Risk Management', 'Team Leadership', 'Stakeholder Management'],
    rate: '₱60,000 - ₱80,000/month'
  }
]; 