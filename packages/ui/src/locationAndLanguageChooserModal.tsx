"use client";
import {useSetRecoilState} from 'recoil';
import {LocaleState} from "@repo/state";
import {CountryType, LocationInfo} from "@repo/common";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function CountrySelect() {
  const [countries, setCountries] = React.useState<
    readonly CountryType[] | undefined
  >();
  const setLocaleRecoil = useSetRecoilState(LocaleState || [])

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await fetch("/countries.json")
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
          });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const setLocaleDetails = async (value: CountryType | null) => {
    if (!value) return;
    setLocaleRecoil({country_code: value.iso_3166_1, country_name: value.english_name} as LocationInfo)
  }

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{
        "&.MuiAutocomplete-root": {
          width: "-webkit-fill-available",
        },
      }}
      options={countries || []}
      autoHighlight
      open={open}
      onChange={(event, value) => {
        setLocaleDetails(value);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={(option) => option.english_name}
      isOptionEqualToValue={(option, value) =>
        option.iso_3166_1 === value.iso_3166_1
      }
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
          key={option.iso_3166_1}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.iso_3166_1.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.iso_3166_1.toLowerCase()}.png`}
            alt=""
          />
          {option.english_name} ({option.iso_3166_1})
        </Box>
      )}
      loading={countries == undefined}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          // label="Select a country"
          className="border-none outline-none w-full focus-visible:outline-none focus:outline-none"
          placeholder="Search a country"
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            startAdornment: (
              <SearchOutlinedIcon
                className="text-gray-500 mr-5"
                sx={{ stroke: "#ffffff", strokeWidth: 0.5 }}
              />
            ),
            endAdornment: (
              <React.Fragment>
                {countries == undefined ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export function LocationAndLanguageChooserModal() {
  const setLocaleState = useSetRecoilState(LocaleState || []);
  
  async function setLocaleDetails() {
    const language = navigator.language;
    console.log({language});
    await fetch('https://ipapi.co/json')
    .then((response) => {console.log({response}); return response})
    .then((data) => data.json())
    .then((data) => {
      setLocaleState(data);
    })
    .catch((error) => {
      console.error('IP geolocation error:', error);
    });
  }

  return (
    <div
      id="location-language-chooser-modal"
      className="fixed z-50 inset-0 overflow-x-hidden overflow-y-auto outline-none focus:outline-none items-center justify-center flex"
    >
      <div className="relative w-2/5 min-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none focus:outline-none px-6">
          <div
            id="country-search"
            className="border border-solid border-gray-300 mt-5 flex flex-row px-2 pt-2 pb-1"
          >
            <CountrySelect />
          </div>
          <button
            id="detect-user-loc"
            className="border-none mt-2 flex flex-row px-2 text-sm mb-2"
            onClick={() => setLocaleDetails()}
          >
            <MyLocationOutlinedIcon className="text-sm text-red-500 mr-5" />
            <span className="text-red-500 ">Detect my location</span>
          </button>

          <div className="continue-btn-wrapper py-2 flex items-center justify-center mb-2">
            <button className="px-12 py-2 bg-bmsRed text-white rounded-lg">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
