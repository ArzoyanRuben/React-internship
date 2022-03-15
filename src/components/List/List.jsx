import React, { useCallback, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCustomModal from "../../hooks/useCustomModal";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { AddButton } from './../AddButton/AddButton';
import { v4 as uuid } from 'uuid';

export const List = ({ ListComponent, listUrl, ModalComponent, modalUrl, isUsers }) => {
  const { isOpen, toggle } = useCustomModal();
  const { data, setData, setLoading, loading, error } = useFetch(listUrl);

  const [item, setItem] = useState([]);
  const [newItem, setnewItem] = useState('');
  return (
    <>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {data && (
        <>
          <AddButton
            toggle={toggle}
            item={item}
            setItem={setItem}
            newItem={newItem}
            setNewItem={setnewItem}
            data={data}
            setData={setData}
            listUrl={listUrl}
            isUsers={isUsers}
          />
          <StyledList>
            {data.map((listItem) => (
              <ListComponent
                key={uuid()}
                toggle={toggle}
                setItem={setItem}
                item={listItem}
              />
            ))}
            {item?.length !== 0 && (
              <ModalComponent
                itemId={item}
                isOpen={isOpen}
                toggle={toggle}
                setItem={setItem}
                modalUrl={modalUrl}
                deleteBox={setData}
                parentBox={data}
              />
            )}
          </StyledList>
        </>
      )}
    </>
  );
};

const StyledList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
