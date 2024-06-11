import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useEffect, useRef } from "react";

export default function SearchBar({ search, setSearch }: { search: string; setSearch: (arg: string) => void}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=> {
    inputRef.current?.focus();
  }, [search])
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      "& .MuiInputBase-input": {
        // padding: theme.spacing(1, 1, 1, 0),
        // // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
        }
      },
    }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid var(--color-1)",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: "var(--color-3)",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      {" "}
      <Search onClick={() => inputRef.current?.focus()}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{
            "aria-label": "search",
            ref: inputRef,
            value: search,
            onChange: (e) => setSearch((e.target as HTMLInputElement).value),
          }}
        />
      </Search>
    </>
  );
}
