import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { BsBoxArrowDown } from 'react-icons/bs';

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

export function Dropzone({onFileUploaded}:Props) {
    const [selectedFileUrl, setSelectedFileUrl] = useState<string[]>([]);

    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      selectedFileUrl.push(fileUrl);

      console.log(selectedFileUrl.length)

      onFileUploaded(file);
    }, [onFileUploaded]);

    const {getRootProps, getInputProps} = useDropzone({
      onDrop,
    })

    return (
        <div>
             <div className="dropzone cursor-pointer" {...getRootProps()} onChange={() => {}}>

                {selectedFileUrl.length < 3 && <>
                        <input {...getInputProps()} accept="image/*" />

                        <p>
                            <BsBoxArrowDown />
                            Imagem do Estabelecimento
                        </p>
                    </>
                }

                {selectedFileUrl.length >= 3 && <p>O número máximo é 3</p>}


            </div>
            <div className="flex gap-3 items-center justify-center mt-2">
                {selectedFileUrl &&
                    selectedFileUrl.map((fileUrl) =>
                        <img className=" max-w-[10rem]" src={fileUrl} alt="Imagem do Estabelecimento" />
                    )
                }

            </div>
        </div>

    )
  }