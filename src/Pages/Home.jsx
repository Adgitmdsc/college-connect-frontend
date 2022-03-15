// import material-ui components
import {
  Box,
  Typography
} from '@mui/material'

import gdsc from '../assets/images/gdsc.png'
import '../styles/Home.css'

const societies = [
  {
    societyName: "GDSC ADGITM",
    societyCategory: "Technical | Development",
    societyDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam rerum incidunt quis. Ad similique consequatur commodi error, quod sequi animi aliquid autem blanditiis ducimus officia sed dolor corporis quasi?"
  },
  {
    societyName: "E-Cell ADGITM",
    societyCategory: "Entrepreneurship",
    societyDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam rerum incidunt quis. Ad similique consequatur commodi error, quod sequi animi aliquid autem blanditiis ducimus officia sed dolor corporis quasi?"
  },
  {
    societyName: "CodeChef ADGITM",
    societyCategory: "Technical | DSA",
    societyDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam rerum incidunt quis. Ad similique consequatur commodi error, quod sequi animi aliquid autem blanditiis ducimus officia sed dolor corporis quasi?"
  }
]

export default function Home() {
  return (
    <Box>
      <img src={gdsc} alt="Translate Content" style={{ width: `100%`, borderRadius: 3 }} loading="lazy" />
      <Box sx={{ backgroundColor: `secondary.main`, color: `black` }}>
        <Box className="news-bar" >
          NewsBar - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam rerum incidunt quis.
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {
          societies.map(society => {
            return (
              <Box key={society.societyName} sx={{ flexGrow: 1, width: '300px', backgroundColor: `secondary.light`, margin: `20px`, padding: `10px`, borderRadius: `3px` }}>
                <Typography variant="h4" component="div">{society.societyName}</Typography>
                <Typography variant="body1" component="div" sx={{ color: `secondary.dark`, fontStyle: `italic` }}>{society.societyCategory}</Typography>
                <Typography variant="body2" component="div" sx={{ color: `secondary.dark` }}>{society.societyDescription}</Typography>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}