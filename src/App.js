import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Otherprojects = lazy(() => import('./pages/Otherprojects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Test = lazy(() => import('./pages/Test'));
const HapticWrist = lazy(() => import('./pages/project_details/HapticWrist'));
const RoboticTail = lazy(() => import('./pages/project_details/RoboticTail'));
const TeleRepIns = lazy(() => import('./pages/project_details/TeleRepIns'));
const HumanoidLeg = lazy(() => import('./pages/project_details/HumanoidLeg'));
const ActiveLegRSR = lazy(() => import('./pages/project_details/ActiveLegRSR'));
const DexterousHand = lazy(() => import('./pages/project_details/DexterousHand'));
const FoldableUAV = lazy(() => import('./pages/project_details/FoldableUAV'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/otherprojects" element={<Otherprojects />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Porjects/HapticWrist" element={<HapticWrist />} />
        <Route path="/Porjects/RoboticTail" element={<RoboticTail />} />
        <Route path="/Porjects/TeleRepIns" element={<TeleRepIns />} />
        <Route path="/Porjects/HumanoidLeg" element={<HumanoidLeg />} />
        <Route path="/Porjects/ActiveLegRSR" element={<ActiveLegRSR />} />
        <Route path="/Porjects/DexterousHand" element={<DexterousHand />} />
        <Route path="/Porjects/FoldableUAV" element={<FoldableUAV />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
