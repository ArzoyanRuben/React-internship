import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCustomModal from "../../hooks/useCustomModal";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const List = ({ ListComponent, listUrl, ModalComponent, modalUrl }) => {
  const { isOpen, toggle } = useCustomModal();
  const [itemId, setItemId] = useState([]);

  const { data, loading, error } = useFetch(listUrl);

  return (
    <>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {data && (
        <StyledList>
          {data.map((item) => (
            <ListComponent
              key={item.id}
              toggle={toggle}
              setItemId={setItemId}
              item={item}
              />
              ))}
          {itemId?.length !== 0 && (
            <ModalComponent
            itemId={itemId}
            isOpen={isOpen}
            toggle={toggle}
            setData={setItemId}
            modalUrl={modalUrl}
            />
            )}
        </StyledList>
      )}
    </>
  );
};

const StyledList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
