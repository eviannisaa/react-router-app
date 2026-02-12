import { DownloadIcon, PlusIcon, UploadIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
     Select,
     SelectContent,
     SelectGroup,
     SelectItem,
     SelectLabel,
     SelectTrigger,
     SelectValue,
} from "~/components/ui/select";

export function PageLayoutForm() {
     return (
          <div className="w-full min-h-screen bg-white text-black">
               <header className="flex justify-between items-center px-4 md:px-8 lg:px-32 py-4 border-b border-black/5 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
                    <h1 className="text-2xl font-extrabold">Frontend.</h1>
                    <span className="text-base font-normal flex gap-1">
                         Layout 2
                         <span className="hidden lg:block">Desktop</span>
                         <span className="hidden md:block lg:hidden">
                              Tablet
                         </span>
                         <span className="md:hidden">Mobile</span>
                    </span>
               </header>

               <div className="px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row gap-12 lg:gap-4 py-8 w-full">
                    <div className="flex md:justify-between lg:justify-center lg:w-fit gap-4">
                         <Button
                              variant="default"
                              className="hidden md:flex md:min-w-29.75"
                         >
                              <PlusIcon /> Tambah
                         </Button>
                         <div className="grid grid-cols-3 md:flex gap-4 w-full md:w-fit">
                              <Button variant="default" className="md:hidden">
                                   <PlusIcon /> Tambah
                              </Button>
                              <Button
                                   variant="secondary"
                                   className="md:min-w-29.75"
                              >
                                   <DownloadIcon /> Import
                              </Button>
                              <Button
                                   variant="secondary"
                                   className="md:min-w-29.75"
                              >
                                   <UploadIcon /> Export
                              </Button>
                         </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                         <Input placeholder="Search" />
                         <Select>
                              <SelectTrigger className="w-full md:max-w-48">
                                   <SelectValue placeholder="Pilih Tahun" />
                              </SelectTrigger>
                              <SelectContent position="popper" className="z-50">
                                   <SelectGroup>
                                        <SelectItem value="2022">
                                             2022
                                        </SelectItem>
                                        <SelectItem value="2021">
                                             2021
                                        </SelectItem>
                                        <SelectItem value="2020">
                                             2020
                                        </SelectItem>
                                   </SelectGroup>
                              </SelectContent>
                         </Select>
                    </div>
               </div>
          </div>
     );
}
