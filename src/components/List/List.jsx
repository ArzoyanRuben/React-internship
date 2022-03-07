import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCustomModal from "../../hooks/useCustomModal";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
 
export const List = ({
  ListComponent,
  listUrl,
  ModalComponent,
  modalUrl
}) => {
  const { isOpen, toggle } = useCustomModal();
  const [itemId, setItemId] = useState([]);
  const [listData] = useFetch(null, listUrl);
  return (
    <>
      {listData ? (
        <StyledList>
          {listData.map((data) => (
            <ListComponent
              toggle={toggle}
              setItemId={setItemId}
              key={data.id}
              data={data}
            />
          ))}
          {itemId && (
            <ModalComponent
              itemId={itemId}
              isOpen={isOpen}
              toggle={toggle}
              setData={setItemId}
              modalUrl={modalUrl}
            />
          )}
        </StyledList>
      ) : (
        <StyledLoader>
          <CircularProgress size={70} />
        </StyledLoader>
      )}
    </>
  );
};

const StyledLoader = styled(Box)`
  position: absolute;
  top: 50%;
  right: 45%;
`;
const StyledList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
