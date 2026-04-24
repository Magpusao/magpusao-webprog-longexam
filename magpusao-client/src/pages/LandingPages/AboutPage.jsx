import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={logo} alt="BulldogEx" className="h-32 w-32 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/482228426_963843282598095_6148824501289677947_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGAMAK4P2LF3L8-9gFPcjqb4wJVRoH5r0fjAlVGgfmvRwkC8JiDVIctKBjU6E1EFIXtXkJ-SVNn7Gil36g5Xv1Q&_nc_ohc=OFjpuYx11xsQ7kNvwFTNh9L&_nc_oc=AdoCyVuMkje5EnCAgJLSS3DatzHCv6MftxHgtPSxY2HxVTlusvwcNS-EuylMXQdKvSByHDoXmwrkB8wBVTOGl20t&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=-Uau9zbm1hGlzenTYvaEXw&_nc_ss=7a3a8&oh=00_Af0wZ4YPP3gtAeUWOHQI_g6bwIoMCRZJQR0qbYqJSescgQ&oe=69EC41D4" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                <img src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/481784201_963842989264791_4821743254808001535_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHHto8J8Mw5bk6-H2mC_TPQIcUZr50XDpkhxRmvnRcOmfs5bpc6fF64eId0DhiFYI1KWHlQzEDlbf1d7eFkoWwU&_nc_ohc=FAEBE09KmSgQ7kNvwHEga3-&_nc_oc=AdpmWVR_2Y9yNtZBq_DTPsiHZcLMe7IgC889vTOl_6gaBvbvNM-FKWlhBP6cZlK7lWJHO12_50R1Ogn2wRyg5M9K&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=AVikplwM-e7YECpzIbWQng&_nc_ss=7a3a8&oh=00_Af09qrZM4dx6FStijDOsqxMyTFJTDDkfe31pbXCyXveLFg&oe=69EC4E12" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/482226572_963843002598123_1719146899696626085_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFnwUke41c0sYlicfn97LWRCfOmbmX-FfMJ86ZuZf4V83jakde4nDMEjLZ6uL8kU2DGSqhlmZOLi-_JfrgNcLCb&_nc_ohc=LBYonVIvbI0Q7kNvwHUgMnu&_nc_oc=AdqpcmjX0Er65n2znX-18MVxm43BFaQpRiIddtjwjM8uXJAWfL_eupF3zElJv6npMoaEnVRqjGVhFRzLoO4XY4AJ&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=QNYmpHa6pVBsaYZmhn_BIQ&_nc_ss=7a3a8&oh=00_Af04xbs-0h_YBRmbUMt0wPlTrgKkv4QMfokmzMIfGx91TQ&oe=69EC674F" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/481990499_963842995931457_2866865429119275162_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEijO_FZRtA88QRpHDz_easRT-tbylNCFhFP61vKU0IWDE--BNvTM1s6O6HN_Rlkae4ufBbONzIaeg9xuEtsPvk&_nc_ohc=lvQUSfiWL5UQ7kNvwFRY4q9&_nc_oc=AdrbcGgBXbPWMIogJ1bZ-M1vd4k78zGGzQQ5ia0OUyFTeGj574DoNP05o0LYEMI7aHroIV2_jhyK3yrAAWBiJnNK&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=nTEBdTjTE0GgjQhdlufqug&_nc_ss=7a3a8&oh=00_Af1Npx3Y8FmeF6D5oSP0N-z9G3sjZVDoMMWMVqXz2W5uiQ&oe=69EC4AA0" />
              </div>
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
