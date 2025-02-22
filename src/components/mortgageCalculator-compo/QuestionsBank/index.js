import React from 'react';
import './index.css'
import PropertyTaxTable from '../PropertyTaxTable';
function QuestionsBank() {
  const exampleDebts = [
    { name: "Auto loan", amount: 350 },
    { name: "Student loans", amount: 220 },
    { name: "Credit cards", amount: 130 },
    { name: "Expected housing costs", amount: 1800 },
  ];

  const exampleIncome = [
    { name: "Monthly salary", amount: 5000 },
    { name: "Monthly side-gig income", amount: 1500 },
  ];

  const totalDebt = exampleDebts.reduce((acc, debt) => acc + debt.amount, 0);
  const totalIncome = exampleIncome.reduce((acc, income) => acc + income.amount, 0);
  const dtiRatio = ((totalDebt / totalIncome) * 100).toFixed(2);

  return (
      <section className='qustion-bank-bg-con'>
          <hr />
          <div className='q-con'>
              <h5>How to calculate monthly mortgage payments?</h5>
              <p>
              Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
              </p>
          </div>
          <div className='q-con'>
              <h5>Formula for calculating monthly mortgage payments</h5>
              <p>
              The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:
              </p>
          </div>
          <hr />
          <div className='q-con'>
              <h5>How to use this mortgage calculator?</h5>
              <p>
                  Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
                  Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
                  The only mounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.
                  Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
              </p>
          </div>
          <div className='q-con'>
              <h5>Do you know your property tax rate?</h5>
              <p>
              While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:
              </p>
              <PropertyTaxTable/>
          </div>
          <hr />
          <div className='q-con'>
              <h3>How is Better’s mortgage calculator different?</h3>
              <h5>This mortgage calculator shows your payments with taxes and insurance</h5>
              <p>
                  The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
                  Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroye
                  Here's an innteresting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
              </p>
          </div>
          <div className='q-con'>
              <h5>This mortgage calculator shows your mortgage costs with PMI</h5>
              <p>   
                  PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
                  Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.
                  PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.
              </p>
          </div>
          <div className='q-con'>
              <h5>This mortgage calculator includes HOA fees</h5>
              <p>
                  Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.
                  Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.s
              </p>
          </div>
          <hr />
          <div className='q-con'>
              <h3>How to reduce your monthly mortgage payments?</h3>
              <p>
              The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
              </p>
          </div>
          <div className='q-con'>
              <h5>Extend the length of your mortgage</h5>
              <p>
              The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
              </p>
          </div>
          <div className='q-con'>
              <h5>Increase your down payment</h5>
              <p>
              The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
              </p>
          </div>
          <div className='q-con'>
              <h5>Get a lower interest rate</h5>
              <p>
                Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).
                Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.
                If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.
                If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.
              </p>
          </div>
          <hr />
          <div className='q-con'>
              <h3>How much home can I afford?</h3>
              <p>
              Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
              </p>
          </div>
          <hr />
          <div className='q-con'>
              <h3>Next steps to buying a house</h3>
              <p>
              There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order)
              The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.
              If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**
              </p>
          </div>
      </section>
  );
}

export default QuestionsBank;
