import { useState, useEffect, useRef, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: Function;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscKey?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscKey = true,
}: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!closeOnEscKey || !isOpen) return;

    const handleEscKey = (e: any) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isOpen, closeOnEscKey]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset closing state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 350); // Match animation duration
  };

  // Handle overlay click
  const handleOverlayClick = (e: any) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "modal-closing" : ""}`}
      onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={`modal-content ${isClosing ? "modal-closing" : ""}`}
        role="dialog"
        aria-modal="true">
        {showCloseButton && (
          <button
            className="modal-close"
            onClick={handleClose}
            aria-label="Close modal">
            ×
          </button>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
