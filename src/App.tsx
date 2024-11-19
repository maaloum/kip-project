import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import CfGallery from './pages/CfGallery';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Payment from "./components/Payment/Payment"
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Sunset from './pages/Banks/Sunset';
import Chime from './pages/Banks/Chime';
import Cti from './pages/Banks/Cti';
import Pnc from './pages/Banks/Pnc';
import Rfcu from './pages/Banks/Rfcu';
import Boa from './pages/Banks/boa';
import WoodForst from './pages/Banks/WoodForest';
import Chase from './pages/Banks/Chase';
import TD from './pages/Banks/TD';
import ScotiaBank from './pages/Banks/ScotiaBank';
import RBC from './pages/Banks/RBC';
import PayPall from './pages/Banks/PayPall';
import CashApp from './pages/Banks/CashApp';
import BlOCKCHAIN from './pages/Banks/BlOCKCHAIN';
import COINBASE from './pages/Banks/COINBASE';
import Shope from './pages/Banks/Shope';
import Clone from './pages/Banks/Clone';
import Burners from './pages/Banks/Burners';
import Dumps from './pages/Banks/Dumps';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="MoneySpot" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <PageTitle title="Payment" />
              <Payment />
            </>
          }
        />

        <Route
          path="/cf-gallery"
          element={
            <>
              <PageTitle title="CF Gallery" />
              <CfGallery />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/Chase"
          element={
            <>
              <PageTitle title="Chase Bank" />
              <Chase />
            </>
          }
        />
        <Route
          path="/Sunset"
          element={
            <>
              <PageTitle title="SUNSET" />
              <Sunset />
            </>
          }
        />
        <Route
          path="/Chime"
          element={
            <>
              <PageTitle title="Chime" />
              <Chime />
            </>
          }
        />
        <Route
          path="/Boa"
          element={
            <>
              <PageTitle title="BOA" />
              <Boa />
            </>
          }
        />

        <Route
          path="/WoodForst"
          element={
            <>
              <PageTitle title="WoodForst" />
              <WoodForst />
            </>
          }
        />
        <Route
          path="/Rfcu"
          element={
            <>
              <PageTitle title="RFCU" />
              <Rfcu />
            </>
          }
        />
        <Route
          path="/Cti"
          element={
            <>
              <PageTitle title="CTI" />
              <Cti />
            </>
          }
        />
        <Route
          path="/Pnc"
          element={
            <>
              <PageTitle title="PNC" />
              <Pnc />
            </>
          }
        />
        <Route
          path="/TD"
          element={
            <>
              <PageTitle title="TD Bank" />
              <TD />
            </>
          }
        />
        <Route
          path="/SCOTIA"
          element={
            <>
              <PageTitle title="SCOTIA Bank" />
              <ScotiaBank />
            </>
          }
        />
        <Route
          path="/RBC"
          element={
            <>
              <PageTitle title="RBC Bank" />
              <RBC />
            </>
          }
        />
        <Route
          path="/PayPall"
          element={
            <>
              <PageTitle title="PayPall" />
              <PayPall />
            </>
          }
        />
        <Route
          path="/CashApp"
          element={
            <>
              <PageTitle title="CashApp" />
              <CashApp />
            </>
          }
        />
        <Route
          path="/BlOCKCHAIN"
          element={
            <>
              <PageTitle title="BlOCKCHAIN" />
              <BlOCKCHAIN />
            </>
          }
        />

        <Route
          path="/COINBASE"
          element={
            <>
              <PageTitle title="COINBASE" />
              <COINBASE />
            </>
          }
        />
        <Route
          path="/shopewithscript"
          element={
            <>
              <PageTitle title="shopewithscript" />
              <Shope />
            </>
          }
        />

        <Route
          path="/CloneCard"
          element={
            <>
              <PageTitle title="Clone Card" />
              <Clone />
            </>
          }
        />
        <Route
          path="/Burners"
          element={
            <>
              <PageTitle title="Burners" />
              <Burners />
            </>
          }
        />

        <Route
          path="/Dumps"
          element={
            <>
              <PageTitle title="Dumps" />
              <Dumps />
            </>
          }
        />

        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
