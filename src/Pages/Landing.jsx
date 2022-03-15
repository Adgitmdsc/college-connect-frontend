// import material-ui components
import {
    Box,
    Typography
} from '@mui/material'

// import assets
import landingBanner from '../assets/images/landingBanner.jpg'

export default function Landing() {
    return (
        <Box sx={{
            padding: `3% 2%`
        }}>
            <Typography variant="h2" component="div"
                sx={{
                    textAlign: `center`,
                    marginBottom: `30px`
                }}>
                College Connect
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
            }}>
                <Box sx={{
                    flexGrow: 1,
                    width: '500px',
                }}>
                    <img src={landingBanner} alt="Translate Content" style={{ maxWidth: `100%`, borderRadius: 3 }} loading="lazy" />
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    width: '500px',
                    padding: `20px`
                }}>
                    <Typography variant="h6" component="div"
                        sx={{
                            textAlign: `center`,
                            fontStyle: `italic`
                        }}>
                        One-Stop Platform for all
                        <Typography variant="h6" component="div"
                            sx={{
                                color: `primary.main`,
                                fontWeight: `bolder`
                            }}
                        >College Societies &amp; Networking</Typography>
                    </Typography>
                    <Typography variant="h6"
                        sx={{
                            padding: `10px`
                        }}
                    >
                        Helps you to connect with your peers
                    </Typography>
                    <Typography variant="body1">
                        <ul>
                            <li><a href='/home'>Home</a></li>
                            <li><a href='/club'>Club</a></li>
                            <li><a href='/profile'>Profile</a></li>
                            <li><a href='/signup'>Signup</a></li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}