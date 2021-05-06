import React, {useState} from 'react';
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import {editTask} from '../Redux/actions';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px',
      // backgroundColor: 'lightblue',
    },
  };
  Modal.setAppElement('#root');

  const EditTask = ({previousTask}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newAction, setNewAction] = useState(previousTask.action);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedTask = {...previousTask, action: newAction};
        dispatch(editTask(editedTask));
        closeModal();
      };
    
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div>
            <button onClick={openModal}>Edit</button>
               <Modal
                 id="mdl"
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 style={customStyles} >

                    <form onSubmit={handleSubmit} >
                         <input 
                         type="text"
                         value={newAction}
                         onChange={(e)=>setNewAction(e.target.value)}></input>
                         <button type="submit"> Confirm </button>
                         <button onClik={closeModal}> Cancel </button>
                    </form>
                </Modal>
        </div>
    );
};

export default EditTask;
  