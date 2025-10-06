import Level1 from '../../assets/1.svg';
import Level2 from '../../assets/2.svg';
import Level3 from '../../assets/3.svg';
import Level4 from '../../assets/4.svg';
import Level5 from '../../assets/5.svg';
import Level6 from '../../assets/6.svg';
import Level7 from '../../assets/7.svg';


const HangMan = ({ step }) => {
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7];
    return (
        <img src={step >= images.length ? images[images.length - 1] : images[step]} className='mix-blend-darken'/>
    )
}

export default HangMan