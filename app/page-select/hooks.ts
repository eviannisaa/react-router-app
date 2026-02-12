import { useEffect, useState } from "react";

interface Administration {
     id: number;
     code: string;
     name: string;
}

export const useAdministration = () => {
     /*  -------------------------------- STATE --------------------------------- */
     const [provinces, setProvinces] = useState<Administration[]>([]);
     const [regencies, setRegencies] = useState<Administration[]>([]);
     const [districts, setDistricts] = useState<Administration[]>([]);
     const [subDistricts, setSubDistricts] = useState<Administration[]>([]);
     const [selectedProvince, setSelectedProvince] = useState<string>("");
     const [selectedRegency, setSelectedRegency] = useState<string>("");
     const [selectedDistrict, setSelectedDistrict] = useState<string>("");
     const [selectedSubDistrict, setSelectedSubDistrict] = useState<string>("");
     const [loadingProvince, setLoadingProvince] = useState<boolean>(false);
     const [loadingRegency, setLoadingRegency] = useState<boolean>(false);
     const [loadingDistrict, setLoadingDistrict] = useState<boolean>(false);
     const [loadingSubDistrict, setLoadingSubDistrict] =
          useState<boolean>(false);

     /* --------------------------- HANDLER FUNCTIONS --------------------------- */
     const disableRegency = !selectedProvince || loadingRegency;
     const disableDistrict = !selectedRegency || loadingDistrict;
     const disableSubDistrict = !selectedDistrict || loadingSubDistrict;
     const provinceValue = loadingProvince ? "loading" : selectedProvince;
     const provinceName = provinces
          .find((p) => String(p.id) === selectedProvince)
          ?.name?.toLowerCase();
     const regencyName = regencies
          .find((p) => String(p.id) === selectedRegency)
          ?.name?.toLowerCase();
     const districtName = districts
          .find((p) => String(p.id) === selectedDistrict)
          ?.name?.toLowerCase();
     const subDistrictName = subDistricts
          .find((p) => String(p.id) === selectedSubDistrict)
          ?.name?.toLowerCase();

     const handleChangeProvince = (value: string) => {
          setSelectedProvince(value);
          localStorage.setItem("selectedProvince", value);
     };

     /* -------------------------------- FETCH API ------------------------------ */
     useEffect(() => {
          async function getProvinces() {
               setLoadingProvince(true);
               try {
                    const res = await fetch(
                         "https://test.jemari.com/api/v1/reference/provinces"
                    );
                    const data = await res.json();
                    setProvinces(data || []);
               } catch (err) {
                    console.error("Failed to fetch provinces:", err);
               } finally {
                    setLoadingProvince(false);
               }
          }

          getProvinces();
     }, []);

     useEffect(() => {
          if (!selectedProvince) return;
          async function getRegencies() {
               setLoadingRegency(true);
               try {
                    const res = await fetch(
                         `https://test.jemari.com/api/v1/reference/regencies_of/${selectedProvince}`
                    );
                    const data: Administration[] = await res.json();
                    setRegencies(data || []);
               } catch (err) {
                    console.error("Failed to fetch regencies:", err);
               } finally {
                    setLoadingRegency(false);
               }
          }
          getRegencies();
     }, [selectedProvince]);

     useEffect(() => {
          if (!selectedRegency) return;

          async function getDistricts() {
               setLoadingDistrict(true);
               try {
                    const res = await fetch(
                         `https://test.jemari.com/api/v1/reference/districts_of/${selectedRegency}`
                    );
                    const data: Administration[] = await res.json();
                    setDistricts(data || []);
               } catch (err) {
                    console.error("Failed to fetch districts:", err);
               } finally {
                    setLoadingDistrict(false);
               }
          }
          getDistricts();
     }, [selectedRegency]);

     useEffect(() => {
          if (!selectedDistrict) return;

          async function getSubDistricts() {
               setLoadingSubDistrict(true);
               try {
                    const res = await fetch(
                         `https://test.jemari.com/api/v1/reference/villages_of/${selectedDistrict}`
                    );
                    const data: Administration[] = await res.json();
                    setSubDistricts(data || []);
               } catch (err) {
                    console.error("Failed to fetch sub districts:", err);
               } finally {
                    setLoadingSubDistrict(false);
               }
          }
          getSubDistricts();
     }, [selectedDistrict]);

     /* ------------------------------ LOCAL STORAGE ---------------------------- */

     useEffect(() => {
          const stored = localStorage.getItem("selectedProvince");
          if (stored) setSelectedProvince(stored);
     }, []);

     /* ---------------------------------- RETURN ------------------------------- */
     return {
          provinces,
          setProvinces,
          regencies,
          setRegencies,
          districts,
          setDistricts,
          subDistricts,
          setSubDistricts,
          selectedProvince,
          setSelectedProvince,
          selectedRegency,
          setSelectedRegency,
          selectedDistrict,
          setSelectedDistrict,
          selectedSubDistrict,
          setSelectedSubDistrict,
          loadingProvince,
          setLoadingProvince,
          loadingRegency,
          setLoadingRegency,
          loadingDistrict,
          setLoadingDistrict,
          loadingSubDistrict,
          setLoadingSubDistrict,
          handleChangeProvince,
          disableRegency,
          disableDistrict,
          disableSubDistrict,
          provinceValue,
          provinceName,
          regencyName,
          districtName,
          subDistrictName,
     };
};
