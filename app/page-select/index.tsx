import { Label } from "~/components/ui/label";
import {
     Select,
     SelectContent,
     SelectGroup,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "~/components/ui/select";
import { content, cxDisabled } from "~/page-select/constant";
import { useAdministration } from "~/page-select/hooks";

export function PageSelect() {
     const {
          provinces,
          regencies,
          districts,
          subDistricts,
          selectedProvince,
          selectedRegency,
          setSelectedRegency,
          selectedDistrict,
          setSelectedDistrict,
          selectedSubDistrict,
          setSelectedSubDistrict,
          loadingProvince,
          loadingRegency,
          loadingDistrict,
          loadingSubDistrict,
          handleChangeProvince,
          disableRegency,
          disableDistrict,
          disableSubDistrict,
          provinceValue,
          provinceName,
          regencyName,
          districtName,
          subDistrictName,
     } = useAdministration();

     return (
          <div className="w-full min-h-screen bg-white text-black">
               <header className="flex justify-between items-center px-4 md:px-8 lg:px-32 py-4 border-b border-black/5 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
                    <h1 className="text-2xl font-extrabold">Frontend.</h1>
                    <span className="text-base font-normal flex gap-1">
                         Layout 3
                         <span className="hidden lg:block">Desktop</span>
                         <span className="hidden md:block lg:hidden">
                              Tablet
                         </span>
                         <span className="md:hidden">Mobile</span>
                    </span>
               </header>

               <div className="px-4 md:px-8 lg:px-32 flex flex-row gap-14 py-4">
                    <div className="flex flex-col gap-6 bg-[#F5F5F5] px-4 py-5 rounded-xl w-fit h-fit">
                         <span className="font-bold text-lg">Filter</span>
                         <div className="w-51.75">
                              <Label className="mb-2">Provinsi</Label>
                              <Select
                                   value={provinceValue}
                                   onValueChange={handleChangeProvince}
                                   disabled={loadingProvince}
                              >
                                   <SelectTrigger
                                        className={cxDisabled(loadingProvince)}
                                   >
                                        <SelectValue placeholder="Pilih Provinsi" />
                                   </SelectTrigger>
                                   <SelectContent
                                        position="popper"
                                        className="z-50"
                                        align="start"
                                   >
                                        <SelectGroup>
                                             {loadingProvince && (
                                                  <SelectItem value="loading">
                                                       Pilih Provinsi
                                                  </SelectItem>
                                             )}
                                             {provinces.map((prov) => (
                                                  <SelectItem
                                                       key={prov.id}
                                                       value={String(prov.id)}
                                                       className="capitalize"
                                                  >
                                                       {prov.name.toLowerCase()}
                                                  </SelectItem>
                                             ))}
                                        </SelectGroup>
                                   </SelectContent>
                              </Select>
                         </div>

                         <div className="w-51.75">
                              <Label className="mb-2">Kabupaten</Label>
                              <Select
                                   disabled={disableRegency}
                                   onValueChange={setSelectedRegency}
                              >
                                   <SelectTrigger
                                        className={cxDisabled(
                                             loadingRegency,
                                             !selectedProvince
                                        )}
                                   >
                                        <SelectValue placeholder="Pilih Kabupaten" />
                                   </SelectTrigger>
                                   <SelectContent
                                        position="popper"
                                        className="z-50"
                                        align="start"
                                   >
                                        <SelectGroup>
                                             {regencies.map((reg) => (
                                                  <SelectItem
                                                       key={reg.id}
                                                       value={String(reg.id)}
                                                       className="capitalize"
                                                  >
                                                       {reg.name.toLowerCase()}
                                                  </SelectItem>
                                             ))}
                                        </SelectGroup>
                                   </SelectContent>
                              </Select>
                         </div>

                         <div className="w-51.75">
                              <Label className="mb-2">Kecamatan</Label>
                              <Select
                                   disabled={disableDistrict}
                                   onValueChange={setSelectedDistrict}
                              >
                                   <SelectTrigger
                                        className={cxDisabled(
                                             loadingDistrict,
                                             !selectedRegency
                                        )}
                                   >
                                        <SelectValue placeholder="Pilih Kecamatan" />
                                   </SelectTrigger>
                                   <SelectContent
                                        position="popper"
                                        className="z-50"
                                        align="start"
                                   >
                                        <SelectGroup>
                                             {districts.map((dis) => (
                                                  <SelectItem
                                                       key={dis.id}
                                                       value={String(dis.id)}
                                                       className="capitalize"
                                                  >
                                                       {dis.name.toLowerCase()}
                                                  </SelectItem>
                                             ))}
                                        </SelectGroup>
                                   </SelectContent>
                              </Select>
                         </div>

                         <div className="w-51.75">
                              <Label className="mb-2">Desa</Label>
                              <Select
                                   disabled={disableSubDistrict}
                                   onValueChange={setSelectedSubDistrict}
                              >
                                   <SelectTrigger
                                        className={cxDisabled(
                                             loadingSubDistrict,
                                             !selectedDistrict
                                        )}
                                   >
                                        <SelectValue placeholder="Pilih Desa" />
                                   </SelectTrigger>
                                   <SelectContent
                                        position="popper"
                                        className="z-50"
                                        align="start"
                                   >
                                        <SelectGroup>
                                             {subDistricts.map((subdis) => (
                                                  <SelectItem
                                                       key={subdis.id}
                                                       value={String(subdis.id)}
                                                       className="capitalize"
                                                  >
                                                       {subdis.name.toLowerCase()}
                                                  </SelectItem>
                                             ))}
                                        </SelectGroup>
                                   </SelectContent>
                              </Select>
                         </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                         {(!selectedProvince || loadingProvince) && (
                              <div className="border border-neutral-200 h-40 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-white flex items-center justify-center">
                                   <p className="text-sm font-normal text-neutral-500">
                                        Silakan lakukan filter terlebih dahulu.
                                   </p>
                              </div>
                         )}

                         {selectedProvince && !loadingProvince && (
                              <div className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-white flex flex-col gap-4">
                                   <h3 className="font-bold text-lg capitalize">
                                        {provinceName}
                                   </h3>
                                   <p className="text-base font-normal text-neutral-500">
                                        {content.text}
                                   </p>
                                   <p className="text-sm font-medium text-neutral-500">
                                        {content.date}
                                   </p>
                              </div>
                         )}

                         {selectedRegency && (
                              <div className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-white flex flex-col gap-4">
                                   <h3 className="font-bold text-lg capitalize">
                                        {regencyName}
                                   </h3>
                                   <p className="text-base font-normal text-neutral-500">
                                        {content.text}
                                   </p>
                                   <p className="text-sm font-medium text-neutral-500">
                                        {content.date}
                                   </p>
                              </div>
                         )}

                         {selectedDistrict && (
                              <div className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-white flex flex-col gap-4">
                                   <h3 className="font-bold text-lg capitalize">
                                        {districtName}
                                   </h3>
                                   <p className="text-base font-normal text-neutral-500">
                                        {content.text}
                                   </p>
                                   <p className="text-sm font-medium text-neutral-500">
                                        {content.date}
                                   </p>
                              </div>
                         )}

                         {selectedSubDistrict && (
                              <div className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition bg-white flex flex-col gap-4">
                                   <h3 className="font-bold text-lg capitalize">
                                        {subDistrictName}
                                   </h3>
                                   <p className="text-base font-normal text-neutral-500">
                                        {content.text}
                                   </p>
                                   <p className="text-sm font-medium text-neutral-500">
                                        {content.date}
                                   </p>
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
}
