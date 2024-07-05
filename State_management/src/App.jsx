import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, messagingAtom, notificationAtom, totalNotificationSelector } from './store/atoms/atoms'

function App() {
  return (
    < RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  )
}

function Mainapp(){
  let networkAtomCount = useRecoilValue(networkAtom)
  let jobsAtomCount = useRecoilValue(jobsAtom)
  let notificationAtomCount = useRecoilValue(notificationAtom)
  let messagingAtomCount= useRecoilValue(messagingAtom)
  let totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return(
    <>
      <button>Home</button>
      <button> My Network ({networkAtomCount}) </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationAtomCount})</button>
      <button >Me ({totalNotificationCount})</button>
    </>
  )
}
export default App
