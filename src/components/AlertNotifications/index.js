// Write your code here
import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <RiErrorWarningFill />
      <div>
        <h1>Error</h1>
        <p>sorry, you are not authorized to have access to delete the file</p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <MdWarning />
      <div>
        <h1>Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <MdInfo />
      <div>
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
      <GrFormClose />
    </Notification>
  </div>
)

export default AlertNotifications
