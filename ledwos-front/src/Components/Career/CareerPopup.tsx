import React, { useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { CareerSection, PopupData, popupData } from '.';

interface CareerPopupProps {
  show: boolean;
  handleClose: (name?: CareerSection) => void;
  section: CareerSection;
}

const CareerPopup: React.FunctionComponent<CareerPopupProps> = ({
  show,
  handleClose,
  section,
}: CareerPopupProps) => {
  const sectionData = useMemo(() => {
    return section
      ? popupData.find(
          (currentSection: PopupData) => currentSection.code === section
        )
      : null;
  }, [section]);

  return (
    <Modal show={show && !!sectionData} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{sectionData?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='border-bottom pb-2 mb-2'>{sectionData?.info}</div>
        <ul
          className='d-flex flex-column flex-wrap mb-0'
          style={{ maxHeight: '75px' }}
        >
          {sectionData?.techStack.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default CareerPopup;
