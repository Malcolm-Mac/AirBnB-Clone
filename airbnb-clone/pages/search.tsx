import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

const Search = ({ searchResult }: any) => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests }: any = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main>
                <section className="relative flex-grow pt-14 px-6">
                    <p>
                        300+ Stays - {range} - for {noOfGuests} number of guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">
                            Cancellation Flexibility
                        </p>
                        <p className="button">
                            Type of Place
                        </p>
                        <p className="button">
                            Price
                        </p>
                        <p className="button">
                            Rooms and Beds
                        </p>
                        <p className="button">
                            More filters
                        </p>
                    </div>
                </section>

                <section className="">
                    {
                        searchResult?.map(({ img, location, title, description, star, price, total }: any) => (
                            <InfoCard
                                key={img}
                                img={img}
                                title={title}
                                location={location}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))
                    }
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search;

export const getServerSideProps = async () => {
    const searchResult = await fetch("https://links.papareact.com/isz")
        .then(res => res.json());

    return {
        props: {
            searchResult,
        },
    }
}