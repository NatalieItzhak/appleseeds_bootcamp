import react, {Component} from 'react';
// import './boxes.css'
// import './Buttons.css'
// import './cards.css'
import Basics from './components/Basics/Basic2.2'
import Box1 from './components/Boxes/Box1';
import Buttons from './components/Buttons/Buttons';
import Card from './components/Cards/Cards';
import Qst1 from './components/Quiz/Qst1';
import Qst2 from './components/Quiz/qst2';
import Quiz from './components/Quiz/quiz_3.3';
import React from 'react';
import Increment from './components/Increment/Increment'
import './Counter.css'
import Counter from './components/Increment/Increment';



function App() {
  return (
    <div className="counter">

      <Counter/>



 {/* <Basics /> */}
 {/* <Box1 /> */}
{/* <Quiz /> */}
{/* <Buttons/> */}
{/* <Card 
src={'https://picsum.photos/200'}
textTitle={'title 1'}
desc={'description 1'}
link1={'Explore'}
link2={'Share'}

/>
<Card 
src={'https://picsum.photos/200'}
textTitle={'title 2'}
desc={'description 2'}
link1={'Explore'}
link2={'Share'}

/>
<Card 
src={'https://picsum.photos/200'}
textTitle={'title 3'}
desc={'description 3'}
link1={'Explore'}
link2={'Share'}

// /> */}
{/* // {  */}
    </div>
    
  );
}

export default App; 


// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <Card src={'https://picsum.photos/200'} textTitle={'title 1'} desc={'description 1'} link1={'Explore'} link2={'Share'}/>
//         <Card src={'https://picsum.photos/200'} textTitle={'title 2'} desc={'description 2'} link1={'Explore'} link2={'Share'}/>
//         <Card src={'https://picsum.photos/200'} textTitle={'title 3'} desc={'description 3'} link1={'Explore'} link2={'Share'}/>
//       </div>
//     );
//   };
// }

// export default App;