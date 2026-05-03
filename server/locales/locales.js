export const locales = {
	ch: {
    referral_reward_notification: "🎉 <b>Obdržena referral odměna!</b>\n\n💰 <b>Částka:</b> {amount} USDT\n\n💼 Prostředky jsou již na vašem zůstatku a dostupné pro výběr nebo reinvestici.",
    referral_reward_my_portfolio: "💼 Moje Portfolio",
    
    missed_referral_reward: "😡 <b>Zmeškaná referral odměna!</b>\n\n💰 <b>Částka:</b> {amount} USDT\n📊 <b>Úroveň:</b> {level}\n\n🔐 Aktivujte úroveň {level} pro přijímání referral odměn!",
    activate_levels_button: "💼 Aktivovat Úrovně",
    
    // Sledování a kontrola
    starting_periodic_check: "🔄 Spouštím periodickou kontrolu referral transakcí (každou minutu)...",
    periodic_check_started: "✅ Sledování uživatelských peněženek spuštěno",
    checking_recent_transactions: "⏰ Kontrola transakcí za poslední minutu: od {time}",
    wallet_check_progress: "🔍 Kontrola čerstvých transakcí pro peněženku: {wallet}",
    fresh_transaction_found: "🕐 Nalezena čerstvá transakce: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Pro peněženku {wallet} nalezeno {count} čerstvých referral transakcí za poslední minutu",
    
    // Výsledky kontroly
    force_check_started: "🔍 Vynucená kontrola ČERSTVÝCH referral transakcí (poslední minuta)...",
    no_wallets_for_check: "❌ Žádné uživatelské peněženky ke kontrole",
    wallets_check_summary: "📊 Kontroluji {count} uživatelských peněženek z poslední minuty",
    check_results: "📊 Výsledky kontroly za poslední minutu:",
    wallets_checked: "• Zkontrolované peněženky: {count}",
    fresh_transactions_found: "• Nalezené čerstvé transakce: {count}",
    successfully_processed: "• Úspěšně zpracováno: {count}",
    errors_count: "• Chyby: {count}",
    
    // Zpracování transakcí
    processing_fresh_transaction: "🔍 Zpracování ČERSTVÉ referral TX:\n- Hash: {hash}\n- Příjemce: {recipient}\n- Částka: {amount} USDT\n- Čas: {time}",
    transaction_already_processed: "⏭️ Transakce {hash} již byla zpracována",
    user_not_found_by_wallet: "❌ Uživatel s peněženkou {wallet} nebyl nalezen",
    user_found: "✅ Uživatel nalezen: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ ČERSTVÁ referral odměna zpracována pro uživatele {telegramId}",
    
    // Chyby
    transaction_processing_error: "❌ Chyba zpracování ČERSTVÉ referral transakce",
    wallet_check_error: "❌ Chyba kontroly peněženky {wallet}",
    periodic_check_error: "❌ Chyba periodické kontroly: {error}",
    force_check_error: "❌ Chyba vynucené kontroly čerstvých transakcí: {error}",
    
    // Upozornění správce
    bot_not_available: "❌ Bot není dostupný pro odesílání upozornění",
    user_blocked_bot: "🚫 Uživatel {telegramId} zablokoval bota",
    user_marked_blocked: "✅ Uživatel {telegramId} označen jako blokovaný",
    
    // Proces odměny
    referral_reward_start: "🔔 ZAČÁTEK processReferralRewardEnhanced:\n- Peněženka: {wallet}\n- Částka: {amount} USDT\n- TX Hash: {hash}\n- Od: {from}\n- Časové razítko: {time}",
    transaction_recorded: "✅ Transakce zaznamenána v databázi",
    balance_updated: "✅ Uživatelský zůstatek aktualizován +{amount} USDT",
    referral_reward_db_success: "✅ Referral odměna úspěšně zpracována v databázi",
    sending_user_notification: "🔔 Odesílání upozornění uživateli {telegramId}",
    user_no_telegram_id: "⚠️ Uživatel {userId} nemá telegram_id",
    database_overflow_error: "⚠️ Chyba přetečení číselného pole, zkouším s menší přesností",
    retry_failed: "❌ Opakovaný pokus také selhal",
    referral_reward_end: "✅ KONEC processReferralRewardEnhanced pro peněženku {wallet}",
    
    // Jednoduché odměny
    simple_reward_processing: "🔔 Zpracování referral odměny: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Referral odměna zaznamenána pro uživatele {telegramId}",
    
    // Upozornění
    notification_sent: "✅ Upozornění na referral odměnu odesláno uživateli {telegramId}",
    notification_error: "❌ Chyba odesílání upozornění uživateli {telegramId}: {error}",
    
    // Aktualizace peněženek
    wallets_updater_started: "✅ Sledování uživatelských peněženek spuštěno",
    
    // Osamělé transakce
    orphan_transaction_processing: "🔍 Zpracování osamělé referral transakce pro uživatele {userId}",
    missed_reward_notification_sent: "⚠️ Upozornění na zmeškanou odměnu odesláno pro úroveň {level}",
    orphan_transaction_error: "❌ Chyba zpracování osamělé transakce",
    
    // Obecné
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Knihovna Kurátorů",
    no_curators_data: "Na úrovni {level} zatím nejsou žádná data o kurátorech",
    curators_library_explanation: "Zde jsou zobrazeni sponzoři vašich partnerů a jejich týmy",
    statistics: "Statistika",
    total_curators: "Celkem kurátorů",
    total_referrals: "Celkem partnerů",
    average_per_curator: "Průměrně na kurátora",
    sponsor: "Sponzor",
    partners: "Partneři",
    more: "více",
    incomplete_registration_title: "🚫 Nedokončili jste registraci v botovi!",
    incomplete_registration_message: "Dokončete registraci, abyste mohli začít vydělávat a nepropásnout příležitosti.",
    complete_registration_to_earn: "Dokončete registraci a začněte vydělávat!",
    complete_registration_to_earn_start: "🚀 <b>Jednoduše pošlete příkaz</b> <code>/start</code> <b>pro pokračování v registraci!</b>",
    invalid_tx_hash_format: "❌ <b>Neplatný formát TX Hash</b>\n\nZadejte prosím platný hash transakce (64 znaků, začíná na 0x)",
    checking_transaction_blockchain: "🔍 <b>Kontrolujeme transakci v blockchainu...</b>\n\nZískáváme informace o částce a datu transakce...",
    transaction_check_error: "❌ <b>Chyba kontroly transakce</b>\n\n{error}",
    blockchain_check_error: "❌ Došlo k chybě při kontrole transakce v blockchainu",
    transaction_found_details: "✅ <b>Transakce nalezena!</b>\n\n💰 <b>Částka:</b> {amount} USDT\n📅 <b>Datum:</b> {date}\n\n⏰ <b>Vyberte na jaké období jste poslali do poolu:</b>",
    invalid_period_range: "❌ <b>Neplatné období</b>\n\nZadejte prosím číslo od 1 do 28 dní",
    period_processing_error: "❌ Došlo k chybě při zpracování období",
    period_1_day: "1 den",
    period_7_days: "7 dní",
    period_14_days: "14 dní",
    period_28_days: "28 dní",
    custom_period: "📅 Vlastní období",
    bot_disabled_success: "🔴 Bot deaktivován pro uživatele",
    bot_disable_error: "❌ Chyba: {error}",
    admin_panel: "🔧 Administrace",
    invalid_prize_amount: "Neplatná výše výhry",
    prize_set_success: "✅ Výhra nastavena: {amount} USDT",
    prize_sent_success: "✅ TX hash uložen. Výhra odeslána na kontrakt.",
    prize_send_error: "❌ Chyba: {error}",
    winner_prize_notification: "🎯 Vaše výhra {amount} USDT byla odeslána na kontrakt!\n\n⏰ Za 28 dní obdržíte zisk.\n📋 TX Hash: {txHash}",
    domain_not_allowed_with_details: `❌ <b>Doména není povolena</b>\n\n{domain_not_allowed_description}\n\n<b>Vaše doména:</b> {domain}\n\n`,
    website_rules: "👏🏼 Vaše partnerská linka byla úspěšně propojena!\n\n🏁 Jste v cílové rovince, pro pohodlnou komunikaci, možnost položit dotazy a seznámení s týmem je nutné vstoupit do našeho chatu\n\n1. Přejděte do tohoto chatu @BitnestRus \n\n2. Klikněte na tlačítko 'Vstoupit do skupiny'\n\n3. Povolte upozornění\n\n4. Klikněte na tlačítko níže 'Přihlásil(a) jsem se k odběru'\n\n👇🏼 Nebo použijte tlačítko níže pro automatický přechod do našeho chatu",
    chat_link: "📢 Přihlásit se k odběru chatu",
    disclaimer: "✅ Vážený uživateli, tento systém byl vytvořen pro vzdělávání a informování výhradně nového uživatele našeho týmu, který dříve nepřišel do kontaktu se systémem Bitnest v rámci jiných týmů\n\n🤔 Řekněte prosím, byli jste již dříve součástí jiného týmu v rámci Bitnest nebo ne?\n\n1. Klikněte (NE) - pokud jste dříve NEBYLI účastníkem jiného týmu\n\n2. Klikněte (ANO) - pokud již máte účet v jiném týmu a poslali jste USDT do oběhu\n\nSlužby tohoto bota jsou poskytovány pouze novým uživatelům, kteří dříve nebyli součástí jiného týmu a klikli na tlačítko ✅ NE",
    disclaimer_no: "✅ NE, JSEM NOVÝ ÚČASTNÍK",
    disclaimer_yes: "⛔️ ANO, JSEM ÚČASTNÍK JINÉHO TÝMU",
    block_confirmation_title: "Potvrzení",
    block_confirmation_message: "Pokud jste členem jiného týmu, kontaktujte svého kurátora a vraťte se k nám k dokončení.\n\nJste si jisti, že chcete deaktivovat účet a vzdát se používání tohoto nástroje?",
    back_button: "◀️ Zpět",
    confirm_block_button: "✅ Ano, deaktivovat",
    account_blocked_message: "🚫 <b>Účet deaktivován</b>\n\nVáš účet byl deaktivován na vaši žádost.\n\nPokud se tak stalo omylem, kontaktujte podporu @BitnestRusSupport.",
    account_blocked: "❌ Bohužel, služby tohoto bota jsou poskytovány pouze novým uživatelům. Váš účet není aktivní. Pro všechny dotazy @BitnestRusSupport",
    please_try_again: "Prosím, zkuste to znovu",
    add_custom_transaction: "➕ Přidat transakci",
    adding_custom_transaction: "🔗 <b>Přidání vlastní transakce</b>",
    enter_tx_hash_prompt: "Prosím, zadejte <b>TX Hash</b> vaší transakce:",
    transaction_requirements: "• Musí být provedena v síti BSC (Binance Smart Chain)\n• Musí být transakce USDT",
    tx_hash_example: "📝 <b>Příklad:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nZobrazit vaše transakce do poolu <a href=\"https://bscscan.com/address/{wallet}#tokentxns\">Přejít</a>",
    enter_amount_prompt: "💰 <b>Zadejte částku transakce v USDT:</b>",
    amount_example: "Příklad: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Vyberte období odeslání do poolu:</b>",
    verifying_transaction: "🔍 <b>Kontrolujeme transakci v blockchainu...</b>",
    transaction_details: "TX Hash: <code>{txHash}</code>\nČástka: {amount} USDT\nObdobí: {period} dní",
    please_wait: "Prosím, čekejte...",
    transaction_already_exists: "Tato transakce již byla přidána do systému",
    transaction_not_found: "Transakce nenalezena",
    transaction_not_confirmed: "Transakce není potvrzena nebo neúspěšná",
    transaction_wrong_sender: "Transakce nebyla odeslána z vaší peněženky. Vaše peněženka: {userWallet}, odesílatel v transakci: {txFrom}",
    transaction_wrong_receiver: "Transakce nebyla odeslána na systémovou peněženku. Příjemce musí být: {systemWallet}",
    transaction_amount_mismatch: "Částka se neshoduje. V blockchainu: {blockchainAmount} USDT, vy jste zadali: {enteredAmount} USDT",
    transaction_not_usdt: "Toto není USDT transakce",
    transaction_decode_error: "Nepodařilo se dekódovat data USDT transakce",
    blockchain_error: "Chyba při kontrole v blockchainu: {error}",
    transaction_added_success: "✅ <b>Transakce úspěšně přidána!</b>",
    investment_details: "📊 <b>Podrobnosti investice:</b>",
    investment_amount: "• Částka: {amount} USDT",
    investment_period: "• Období: {period} dní",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Ziskovost: {profit}%",
    investment_added_to_portfolio: "💼 Investice přidána do vašeho portfolia.",
    transaction_add_error: "❌ <b>Chyba při přidávání transakce</b>",
    error_reason: "Důvod: {error}",
    language_changed_success: "✅ Jazyk úspěšně změněn na češtinu!",
    welcome: "👋🏼 Vítejte <b>{username}</b> - to je týmový nástroj naší komunity, tento bot vám umožní krok za krokem porozumět systému a stát se součástí našeho týmu!\n\n🎥 Připravili jsme pro vás podrobná video návody, které vysvětlují a ukazují celý proces\n\n👇🏼 Chcete-li začít s výukou a získat první výsledky, klikněte na tlačítko \"🎓 Začít výuku\"",
    welcome_back: "👋 Již jste absolvovali výuku! Vítejte zpět!",
    education_title: "🎓 Vzdělávací materiály\nVyberte téma:",
    finish: "✅ Výuka dokončena!",
    wallet_installation: "📲 <b>Instalace peněženky</b>\nStáhněte a nainstalujte jednu z podporovaných peněženek.",
    ask_wallet_address: "👍🏼 Skvělá volba! Začínáme s výukou:\n\n💵 V první řadě je ve světě Web3 a DeFi nutné mít vlastní osobní kryptopeněženku, právě teď si ji nainstalujeme:\n\n1. Přejděte na oficiální stránku aplikace <b>MetaMask</b>\n\n2. Nainstalujte aplikaci do svého telefonu\n\n3. Vytvořte peněženku a nezapomeňte si zapsat seed frázi na bezpečné místo\n\n4. Nastavte síť BSC - Binance Smart Chain (BEP20)\n\n5. Zkopírujte veřejnou adresu své peněženky 0x.............\n\n6. Pošlete tuto adresu jako zprávu do pole níže 👇🏼",
    enter_wallet: "🥳 Gratulujeme, vaše peněženka byla úspěšně propojena!\n\n📝 V tomto kroku je nutné dokončit registraci na oficiální stránce Bitnest (viz video)\n\n1. Zkopírujte tento odkaz \n\n<code>{referral_link_bitnest}</code>\n\na otevřete jej v interním prohlížeči vaší peněženky\n\n2. V pravém horním rohu klikněte na \"Connect\"\n\n3. Potvrďte autorizaci na stránce ve vyskakovacím okně vaší peněženky \n\n<i><b>*Pokud se stránka neotevře, zapněte program ze 3 písmen (který vám umožní přístup na stránku)</b></i>\n\n👇🏼 Nebo použijte tlačítka níže pro automatický přechod do peněženky a otevření požadované stránky",
    your_wallet: "💼 Vaše kryptopeněženka\n\n📌 Adresa v síti (BEP20)",
    install_wallet: "👍🏼 Skvělá volba! Začínáme s výukou:\n\n💵 V první řadě je ve světě Web3 a DeFi nutné mít vlastní osobní kryptopeněženku, právě teď si ji nainstalujeme:\n\n1. Přejděte na oficiální stránku aplikace <b>MetaMask</b>\n\n2. Nainstalujte aplikaci do svého telefonu\n\n3. Vytvořte peněženku a nezapomeňte si zapsat seed frázi na bezpečné místo\n\n4. Nastavte síť BSC - Binance Smart Chain (BEP20)\n\n5. Zkopírujte veřejnou adresu své peněženky 0x.............\n\n6. Pošlete tuto adresu jako zprávu do pole níže 👇🏼",
    loading_balance: "⏳ Získáváme informace o zůstatku...",
    refresh: "🔄 Obnovit",
    bnb_balance: "Zůstatek:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Zůstatek tokenů",
    wallet_not_configured: "❌ Peněženka není nastavena",
    send_usdt: "💸 Odeslat USDT",
    check_my_investment: "💸 Odeslat USDT",
    error_amount_not_selected: "❌ Chyba: částka není vybrána",
    error_wallet_not_configured: "❌ Chyba: peněženka není nastavena",
    back_to_amount_selection: "◀️ Zpět na výběr částky",
    configure_wallet: "⚙️ Nastavit peněženku",
    your_mentor: (mentor) => `Váš mentor: ${mentor}`,
    write_to_mentor: "✉️ Napsat mentorovi",
    what_is_bitnest: "🏗 <b>Co je BitNest</b>\nTransparentní operace, kontrola vašich prostředků.",
    defi_basics: "📊 Základy DeFi.\nDále - jak funguje investování do poolů.",
    liquidity_pool_text: "💎 Likviditní pool\n\n💵 Zde můžete poslat USDT do likviditního poolu a získávat bonusy.\n\nVyberte akci:",
    my_investments_empty: "📊 Zatím nemáte žádné investice.",
    investment_saved: "✅ Data uložena",
    investment_return_received: (amount) => `Obdrželi jste svou cirkulaci <b>${amount}$</b>`,
    congrats_profit: "Gratulujeme k získání zisku!",
    referral_reward_received: "Obdrželi jste doporučující odměnu!",
    back_to_main_menu: "🏠 Hlavní menu",
    user: "Uživatel",
    amount: "Částka",
    congrats_referral_earned: "Gratulujeme! Získali jste doporučující odměnu!",
    balance_replenished: (amount) => `Váš zůstatek byl doplněn o ${amount} USDT`,
    referral_reward_received_amount: (amount) => `Obdrželi jste doporučující odměnu ${amount}`,
    you_have_inactive_levels: "Máte neaktivované úrovně!",
    if_invest_amount_activate_levels: (amount, levels) => `Při odeslání ${amount} USDT můžete aktivovat úrovně: ${levels}`,
    activate_levels_to_earn: "Aktivujte úrovně pro získání příjmu z doporučených!",
    new_levels_activated: (levels) => `Aktivovány nové úrovně: ${levels}`,
    now_earn_from_levels: "Nyní získáváte příjem z těchto úrovní vašeho týmu!",
    invalid_tx_hash_contact_support: "❌ Neplatný hash transakce. Kontaktujte prosím podporu.",
    congrats_liquidity_pool_success: "Gratulujeme! Vaše odeslání do likviditního poolu bylo úspěšně dokončeno!",
    transaction_details: "Podrobnosti transakce",
    block: "Blok",
    period: "Doba",
    days: "dní",
    not_specified: "není uvedena",
    go_to_portfolio_for_details: 'Přejděte do \"Můj portfoli\" pro zobrazení podrobností',
    level_deactivated_title: "Úroveň deaktivována",
    level: "Úroveň",
    has_been_deactivated: "byl deaktivován",
    liquidity_pool_completed_reason: "Vaše odeslání do likviditního poolu bylo úspěšně dokončeno!",
    total_return: "Celková částka vrácení",
    return_date: "Datum vrácení",
    error_updating_pool_status: "❌ Chyba při aktualizaci stavu odeslání do poolu. Kontaktujte podporu.",
    transaction_not_found_after_attempts: (txHash) => `❌ Transakce nebyla nalezena ani po několika pokusech.\n\nTX Hash: ${txHash}\n\nMožné důvody:\n• Transakce ještě není potvrzena sítí\n• Neplatný TX Hash\n• Problémy se sítí BSC\n\nZkontrolujte prosím TX Hash a zkuste to znovu nebo kontaktujte podporu.`,
    transaction_wrong_address: (actualTo) => `❌ Transakce byla odeslána na nesprávnou adresu!\n\n▸ Obdržená adresa: ${actualTo}\n▸ Očekávaná adresa: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\nUjistěte se prosím, že posíláte USDT na správnou adresu poolu.`,
    transaction_not_confirmed: (status) => `❌ Transakce není potvrzena. Stav: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support: "Zkontrolujte prosím stav transakce v BscScan a v případě potřeby kontaktujte podporu.",
    error_checking_transaction: "❌ Chyba při kontrole transakce. Zkuste to později nebo kontaktujte podporu.",
    investment_confirmation: `💰 <b>Potvrzení odeslání do poolu</b>\n\n📊 <b>Podrobnosti transakce:</b>\n▸ Částka: <b>{amount} USDT</b>\n▸ Doba: <b>{period} dní</b>\n▸ Ziskovost: <b>{profitPercent}%</b>\n▸ Očekávaný zisk: <b>{expectedProfit} USDT</b>\n▸ Celková částka vrácení: <b>{totalReturn} USDT</b>\n▸ Datum vrácení: <b>{formattedDate}</b>\n\n🔄 <b>Instrukce k odeslání:</b>\n\n1. Otevřete aplikaci MetaMask\n\n2. Přejděte na oficiální stránku Bitnest\n\n3. V pravém horním rohu klikněte na <b>\"Connect\"</b> - <i>(pokud vidíte ikonu peněženky, pokračujte dalším krokem)</i>\n\n4. Klikněte na ikonu peněženky a přejděte do sekce Loop (Smyčka)\n\n5. Zadejte částku odeslání\n\n6. Vyberte dobu odeslání\n\n7. Klikněte na tlačítko \"Circulation\" (Cirkulace)\n\n8. Potvrďte odeslání na stránce ve vyskakovacím okně vaší peněženky\n\n👇🏼 Nebo použijte tlačítka níže pro automatický přechod do peněženky a otevření požadované stránky`,
    send_metamask_mobile: "🦊 Odeslat - MetaMask 📲",
    transaction_search_timer: `⚠️ Čekáme na vaše odeslání, instrukce výše\n\n<b>🔎 Po odeslání začneme hledat transakci ...</b>\n⏰ <b>Lhůta pro odeslání a vyhledání vaší transakce:</b> 20:00 min...\n\n`,
    cancel_search: "❌ Zrušit hledání",
    failed_delete_timer_message: "Nepodařilo se smazat zprávu s časovačem: {error}",
    investment_details_base: `💰 <b>Potvrzení odeslání do poolu</b>\n\n📊 <b>Podrobnosti transakce:</b>\n▸ Částka: <b>{amount} USDT</b>\n▸ Doba: <b>{period} dní</b>\n▸ Stav: <b>Zrušeno</b>\n\n`,
    transaction_search_cancelled: "❌ <b>Hledání transakce zrušeno uživatelem</b>",
    failed_update_message: "Nepodařilo se aktualizovat zprávu, odesíláme novou: {error}",
    transaction_search_cancelled_log: "✅ Hledání transakce zrušeno pro uživatele {userId}",
    no_active_transaction_search: "❌ Nebylo nalezeno aktivní hledání transakcí",
    error_cancelling_search: "❌ Chyba při rušení hledání: {error}",
    error_cancelling_search_user: "❌ Došlo k chybě při rušení hledání",
    processing_found_transaction: "🔄 Zpracování nalezené transakce pro uživatele {userId}",
    investment_in_process_not_found: "Investice se stavem in_process nebyla nalezena",
    failed_update_investment_status: "Nepodařilo se aktualizovat stav investice",
    failed_delete_timer_message: "Nepodařilo se smazat zprávu s časovačem: {error}",
    failed_delete_previous_message: "Nepodařilo se smazat předchozí zprávu: {error}",
    transaction_confirmed_message: `💰 <b>Potvrzení odeslání do poolu</b>\n\n📊 <b>Podrobnosti transakce:</b>\n▸ Částka: <b>{amount} USDT</b>\n▸ Doba: <b>{period} dní</b>\n▸ Očekávaný zisk: <b>{expectedProfit} USDT</b>\n▸ Celková částka vrácení: <b>{totalReturn} USDT</b>\n▸ Datum vrácení: <b>{returnDate}</b>\n\n✅ <b>Transakce potvrzena!</b>\n📊 <b>Hash transakce:</b> <code>{hash}</code>\n💰 <b>Skutečná částka:</b> {actualAmount} USDT\n⏰ <b>Potvrzeno:</b> {confirmationTime}`,
    activating_user_levels: "✅ Aktivujeme úrovně uživatele na základě výše investice",
    user_prefix: "User_",
    notification_sent_to_referrer: "✅ Oznámení odesláno doporučujícímu {telegramId}",
    referrer_not_found_or_missing_data: "⚠️ Doporučující nebyl nalezen nebo nemá potřebná data",
    user_has_no_referrer: "⚠️ Uživatel nemá doporučujícího",
    error_sending_referral_notification: "Chyba odesílání oznámení doporučenému: {error}",
    error_sending_missed_rewards: "Chyba odesílání oznámení o zmeškaných odměnách: {error}",
    error_sending_missed_referrals: "Chyba odesílání oznámení o zmeškaných doporučených: {error}",
    level_activation_notifications_sent: "🎯 Oznámení o aktivaci úrovní odeslána pro úrovně: {levels}",
    error_sending_level_activation: "Chyba odesílání oznámení o aktivaci úrovní: {error}",
    transaction_processed_successfully: "✅ Transakce zpracována pro uživatele {userId}",
    error_processing_transaction: "❌ Chyba zpracování transakce pro uživatele {userId}: {error}",
    transaction_processing_error_message: `❌ <b>Chyba zpracování transakce</b>\n\nTX Hash: {hash}\nChyba: {error}\n\nKontaktujte prosím podporu.`,
    error_sending_notification: "Chyba odesílání oznámení: {error}",
    new_levels_activated: "Aktivovány nové úrovně!",
    activated_levels: "Aktivované úrovně",
    levels_activation_benefit: "Nyní získáváte příjem z těchto úrovní vašeho týmu!",
    referral_made_transaction: "Váš doporučený provedl transakci!",
    your_referral: "Váš doporučený",
    congrats_referral_reward: "Gratulujeme! Získali jste doporučující odměnu!",
    affiliate_text: `👥 Vaše partnerská síť, {username}\n\n17 úrovní vašeho týmu a získávání příjmu z každé úrovně ze ziskovosti vašich doporučených\n\n<b>1 úr</b> - 20%\n<b>2 úr</b> - 10%\n<b>3 - 7 úr</b> - 5%\n<b>8 - 10 úr</b> - 3%\n<b>11 - 17 úr</b> - 1%\n\nPro aktivaci každé úrovně musí váš podíl v poolu odpovídat <b>č. úrovně * 100$</b>\nPro aktivaci všech úrovní musí váš osobní podíl v poolu = <b>1700$</b>\n\n📊 Celková statistika podle úrovní:\n{pools.levels}\n\n💰 Celkem: 0 dop. | 0.000 USDT`,
    your_referral_sent: "Váš doporučený provedl odeslání!",
    missed_referral_reward: (missedAmount, level) => `Zmeškali jste doporučující odměnu ${missedAmount}$ z ${level} úrovně`,
    activate_level_to_earn: "Aktivujte úroveň pro získání příjmu z celé struktury!",
    check_subscription: "✅ Přihlásil(a) jsem se k odběru",
    website_ref: "🎉 Gratulujeme k úspěšné registraci!\n\n🔗 V tomto kroku je nutné přidat váš doporučující odkaz z osobního účtu Bitnest\n\n1. Přejděte na oficiální stránku Bitnest https://bitnest.ad (pokud jste na počítači)\n\n2. V pravém horním rohu klikněte na \"<b>Connect</b>\"<i> - (pokud vidíte ikonu peněženky, pokračujte dalším krokem)</i>\n\n3. Klikněte na \"<b>Pozvat přátele</b>\"\n\n4. Klikněte na \"<b>Kopírovat můj odkaz</b>\"\n\n5. Pošlete jej do pole níže 👇🏼",
    raffle: "🎁 TOMBOLA 🎁",
    daily_raffle: "🎉 Denní tombola!",
    current_prize: "🏆 Výhra",
    participants: "👥 Už se účastní ",
    end_time: "⏰ Výsledky",
    raffle_text: `✅ <b>Podmínky účasti:</b>\n• Minimální aktivní podíl v poolu: 10 USDT\n• Jeden pokus na osobu\n\n`,
    raffle_requirement: "Pro účast v tombole je vyžadován aktivní podíl v poolu",
    raffle_wallet_not_set: "⚠️ Nejprve nastavte peněženku",
    raffle_already_registered: "✅ Úspěšně jste zaregistrováni v aktuálním kole!",
    successfully_registered: "Úspěšně jste zaregistrováni v tombole!",
    registration_failed: "Nepodařilo se zaregistrovat",
    participate_button: "🎟 Zúčastnit se",
    no_active_raffle: "Momentálně není aktivní tombola.",
    already_registered_in_raffle: "✅ Již jste zaregistrováni v aktuální tombole!",
    new_raffle_started: "💰 Výhra: {prize} USDT\n⏰ Do konce: {hours} hodin\n\n",
    register_in_raffle: "🤖 Registrace v tombole",
    raffle_error: "❌ Chyba: {error}",
    raffle_min_investment_required: "Pro účast v tombole je vyžadován aktivní podíl v poolu od 10$\n\nProveďte odeslání USDT do poolu pro získání možnosti účasti.",
    raffle_registration_success: "Úspěšně jste zaregistrováni!\n\nNyní se účastníte tomboly!",
    eligible_to_participate: "💪 Máte právo na registraci v tombole",
    raffle_registration_error: "❌ Chyba registrace: {error}",
    not_registered_yet: "❌ Ještě nejste zaregistrováni. Klikněte na tlačítko vaší peněženky pro registraci.",
    register_button: "📝 Zaregistrovat se",
    registration_check_error: "❌ Chyba při kontrole registrace",
    registering_wallet: "🔄 Registruji vaši peněženku...",
    registration_success: "✅ Úspěšně jste zaregistrováni v aktuálním kole!",
    registration_error: "❌ Chyba registrace",
    try_later_or_contact_admin: "Zkuste to později nebo kontaktujte administrátora.",
    registration_process_error: "❌ Chyba při registraci",
    mentor_not_found: "❌ <b>Mentor nebyl nalezen</b>",
    mentor_not_found_description: "Nemáte přiřazeného mentora. Kontaktujte prosím podporu.",
    new_referral_notification: (username) => `👏🏼 Máte nového doporučeného @${username}`,
    friend: "přítel",
    welcome_error: "👋 Vítejte! Došlo k chybě při načítání menu.",
    link_subscription_pending: "⌛ <b>Čeká se na platbu předplatného</b>\n\nVaše předplatné čeká na potvrzení platby. Pokud jste již zaplatili, klikněte na tlačítko níže pro kontrolu stavu.",
    check_payment: "🔄 Zkontrolovat platbu",
    create_new_payment: "💳 Vytvořit novou platbu",
    link_subscription_required: "❌ <b>Přístup k nastavení odkazů přes předplatné</b>\n\n✅ Pro nastavení doporučujícího odkazu a aktivaci vašeho bota je nutné zakoupit předplatné za 10$/měs.\n\n",
    buy_subscription: "💳 Koupit předplatné (10$/měs)",
    link_settings_error: "❌ Chyba při načítání nastavení odkazů",
    setup_wallet_first: "❌ Nejprve nastavte peněženku v nastavení",
    custom_amount_message: "💰 <b>Zadejte svou částku pro odeslání do poolu</b>\n\nMinimální částka: <b>1 USDT</b>\nMaximální částka: <b>100000000 USDT</b>\n\n📝 <i>Pošlete číslo - částku v USDT do pole níže</i>",
    menu_title: `🎉 <b>Vítejte, {username}</b>\n\n🚀 <b>BitnestRus Bot - Váš spolehlivý pomocník a týmový nástroj</b>\n\n✨ <b>Možnosti bota:</b>\n• 🎁 Tomboly peněžních výher\n• 💰 Finanční statistika vaší peněženky\n• 🌊 Instrukce pro práci s likviditním poolem\n• 👥 Víceúrovňový partnerský program\n• 📊 Analýza a informování\n\n👇 Vyberte sekci v menu:\n`,
    back: "◀️ Zpět",
    next: "➡️ Další",
    language_selection_message: "🌍 Prosím zvolte váš jazyk:\n\nTím nastavíte jazyk pro celého bota",
    nextreg: " ✍🏼 Dokončil(a) jsem registraci",
    my_wallet: "💰 Moje Peněženka",
    liquidity_pool: "🌊 Likviditní pool",
    my_portfolio: "💼 Moje portfolio",
    presentation: "🎥 Prezentace",
    video_instructions: "📚 Video instrukce",
    official_website: "🔗 Oficiální web",
    oficial_site: "✅ Oficiální web",
    affiliate: "👥 Partnerský program",
    settings: "⚙️ Nastavení",
    admin: "🔧 Administrace",
    settings_title: "⚙️ Nastavení\n\nZde můžete nastavit své odkazy\n\nVyberte akci:",
    start_education: "🎓 Začít výuku",
    download_metamask: "🦊 Stáhnout - MetaMask",
    register_metamask: "🦊 Registrace - MetaMask",
    register_metamask_mobile: "🦊 Registrace - MetaMask",
    invest_now_message: `💰 <b>Odeslání USDT do likviditního poolu</b>\n\n<b>Ziskovost podle dob:</b>\n• <b>1 den</b> - 0.4%\n• <b>7 dní</b> - 4%\n• <b>14 dní</b> - 9.5%\n• <b>28 dní</b> - 24%\n\n<i>Všechny prostředky <b>(částka USDT + bonusy)</b> se automaticky vrací po uvedené době na vaši peněženku</i>\n\n📌 <b>Váš zůstatek:</b>\n• BNB: {bnb_balance}\n• USDT: {usdt_balance}\n\n👇🏼 <b>Vyberte částku odeslání do poolu:</b>`,
    custom_amount: "🗂 Vlastní částka",
    error_getting_data: "❌ Chyba při získávání dat, zkuste to znovu.",
    choose_period_message: `🔄 Vybrali jste částku <b>{amount} USDT</b>. Vyberte dobu odeslání do poolu:\n\n<b>Ziskovost podle dob:</b>\n• <b>1 den</b> - 0.4%\n• <b>7 dní</b> - 4%\n• <b>14 dní</b> - 9.5%\n• <b>28 dní</b> - 24%\n\n<i>Všechny prostředky <b>(částka USDT + bonusy)</b> se automaticky vrací po uvedené době na vaši peněženku</i>\n\n👇 <b>Vyberte dobu odeslání do poolu:</b>`,
    back_to_amount_selection: "◀️ Zpět na výběr částky",
    main_menu: "🏠 Hlavní menu",
    timer_message_id_not_found: "❌ timer_message_id nebyl nalezen",
    transaction_search_timer_countdown: (timeString) => `⚠️ Čekáme na vaše odeslání, instrukce výše\n\n<b>🔎 Po odeslání začneme hledat transakci ...</b>\n\n⏰ <b>Lhůta pro odeslání a vyhledání vaší transakce:</b> ${timeString} min...\n\n`,
    cancel_search: "❌ Zrušit hledání",
    timer_error: "❌ Chyba v časovači: {error}",
    timer_stopped_message_not_found: "⏹️ Časovač zastaven: zpráva nebyla nalezena nebo není dostupná",
    timer_minor_error_continue: "⚠️ Menší chyba časovače, pokračujeme...",
    transaction_timeout_message: "⏰ <b>Čas na vyhledání transakce vypršel</b>\n\n❌ Nepodařilo se najít potvrzení transakce v daném čase.\n\nMožné důvody:\n• Transakce ještě není potvrzena sítí\n• Neplatný TX Hash\n• Problémy se sítí BSC\n\nZkontrolujte prosím stav transakce v BscScan a zkuste to znovu.",
    transaction_timeout_log: "⏰ Časový limit transakce pro uživatele {userId}",
    transaction_timeout_error: "❌ Chyba při zpracování časového limitu transakce: {error}",
    transaction_not_found_try_again: "❌ Transakce nebyla nalezena. Zkuste začít znovu.",
    awaiting_transaction_check: "🔍 <b>Čekejte na kontrolu transakce...</b>\n\nBot zkontroluje blockchain během 2-5 minut.\nObdržíte oznámení o výsledku.",
    transaction_not_found_message: `❌ <b>Transakce nebyla nalezena</b>\n\nMožné důvody:\n• Transakce ještě není potvrzena sítí\n• Odesláno ne na adresu poolu\n📞 Pokud jste odeslali USDT, kontaktujte podporu\n🔍 TX Hash: poskytněte hash transakce`,
    transaction_not_found_notification_sent: "✅ Oznámení o nepřítomnosti transakce odesláno uživateli {userId}",
    error_sending_notification: "Chyba odesílání oznámení: {error}",
    request_tx_hash_message: "📝 <b>Prosím, zadejte hash transakce (TX Hash):</b>\n\nPo odeslání USDT zkopírujte TX Hash z vaší peněženky a pošlete jej sem.",
    error_requesting_tx_hash: "Chyba při žádosti o TX Hash: {error}",
    presentation_message: `📊 <b>Prezentace</b>\n\n🎥 Podrobné video prezentace, které vám pomohou pochopit výhody platformy a tohoto nástroje\n\n`,
    presentation_error: "Chyba prezentace: {error}",
    presentation_load_error: "❌ Chyba při načítání prezentace",
    user_not_determined: "❌ Nepodařilo se určit uživatele",
    not_configured: "Nenastavena",
    from_your_inviter: `\n👤 Od vašeho pozvatele: {name}`,
    user: "Uživatel",
    system_video_instruction: `\n📋 Systémová video instrukce`,
    video_instructions_header: "🎥 <b>Video instrukce</b>",
    video_instructions_description: "📚 Podrobný video kurz, ve kterém se dozvíte všechny jemnosti práce se systémem a naučíte se pracovat s poolem",
    video_link_available: `🔗 <b>Odkaz na video:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Odkaz není dostupný</b>\n\n`,
    video_instruction_error: "Chyba video instrukce: {error}",
    video_instruction_load_error: "❌ Chyba při načítání video instrukcí",
    system_link: "🌐 Systémový odkaz",
    from_your_mentor: "👤 Od vašeho Mentora",
    user: "Uživatel",
    your_link: "🌐 Váš odkaz",
    visit_official_website: "Navštivte oficiální stránky platformy a prostudujte si všechny podrobnosti a pravidla práce se službou",
    link: "Odkaz",
    open_metamask: "🦊 Otevřít MetaMask",
    open_in_browser: "💻 Otevřít v prohlížeči PC",
    website_error: "❌ Chyba při načítání informací o webu",
    your_investment_portfolio: "Vaše portfolio aktivního podílu v poolu",
    your_investment_portfolio_add: "➕ Přidat transakci",
    transaction: "Transakce",
    amount: "Částka",
    term: "Doba",
    days: "dní",
    profitability: "Ziskovost",
    time_left: "Do dokončení",
    d: "d",
    h: "h",
    expected_profit: "Očekávaný zisk",
    type: "Typ",
    incoming_transaction: "Příchozí transakce",
    refund: "Vrácení prostředků",
    status: "Stav",
    active: "Aktivní",
    archived: "Archivní odeslání",
    returned: "Vráceno",
    total_statistics: "Celková statistika",
    total_active_amount: "Celková částka aktivních",
    page: "Strana",
    of: "z",
    portfolio_error: "⚠️ Chyba při načítání portfolia",
    congrats_on_profit: "Gratulujeme k získání zisku!",
    bot_not_available: "Bot není dostupný pro odeslání oznámení",
    investment_notification_sent: "Oznámení o vrácení investic odesláno uživateli",
    investment_notification_error: "Chyba odesílání oznámení o vrácení investic:",
    check_old_transactions: "🔍 Zkontrolovat staré transakce",
    checking_old_transactions: "Kontrolujeme staré transakce",
    this_may_take_seconds: "To může trvat několik vteřin...",
    wallet_not_found: "❌ Peněženka nebyla nalezena. Připojte ji v profilu.",
    check_completed: "Kontrola dokončena",
    added_to_portfolio: "Přidáno do portfolia",
    no_transactions_found: "Transakce nebyly nalezeny",
    target_wallet: "Cílová peněženka",
    checking_old_transactions: "Kontrola starých transakcí",
    wallet_not_found: "Peněženka nebyla nalezena",
    check_completed: "Kontrola dokončena",
    found_transactions: "Nalezeny transakce",
    already_added: "již přidána",
    added: "přidána",
    summary: "Souhrn",
    new_added: "Nových přidáno",
    already_exist: "Již existuje",
    total_checked: "Celkem zkontrolováno",
    check_transactions_error: "Chyba kontroly transakcí",
    transactions: "transakcí",
    my_portfolio: "💼 Moje portfolio",
    your_active_pool: "<b>Váš aktivní podíl v poolu</b>",
    your_active_pool_share: (amount) => `💰 <b>Váš aktivní podíl v poolu:</b> ${amount}$`,
    your_personal_share: "Váš celkový podíl v poolu",
    level_activation_title: "Aktivace úrovní partnerského programu",
    check_transactions_error: "⚠️ Chyba při kontrole transakcí. Zkuste to později.",
    affiliate_network_header: (username) => `👥 <b>Vaše partnerská síť, ${username}</b>`,
    affiliate_network_description: "17 úrovní vašeho týmu a získávání příjmu z každé úrovně ze ziskovosti vašich doporučených",
    level_percentages: `<b>• 1 úr</b> - 20%\n<b>• 2 úr</b> - 10%\n<b>• 3-7 úr</b> - 5%\n<b>• 8-10 úr</b> - 3%\n<b>• 11-17 úr</b> - 1%`,
    level_activation_requirements: "Pro aktivaci každé úrovně musí váš podíl v poolu odpovídat <b>č. úrovně * 100$</b>",
    all_levels_activation_requirement: "Pro aktivaci všech úrovní musí váš osobní podíl v poolu = <b>1700$</b>",
    your_personal_share: (amount) => `💰 <b>Váš osobní podíl v poolu:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Aktivováno úrovní:</b> ${count}/17`,
    level_statistics: "📊 <b>Statistika podle úrovní:</b>",
    level_with_referrals: (status, level, count, amount) => `${status} Úr. ${level}: ${count} os. | ${amount} USDT`,
    level_no_referrals: (status, level) => `${status} Úr. ${level}: Žádní doporučení`,
    no_level_data: "<i>Zatím nejsou data podle úrovní</i>",
    total_summary: (referrals, investments) => `\n💰 <b>Celkem:</b> ${referrals} dop. | ${investments} USDT`,
    my_partners: "📋 Moji partneři",
    my_team: "🧏‍♂️ Můj tým",
    ref_link: "🔗 Doporučující odkaz",
    enable_levels: "🔓 Zapnout úrovně",
    search: "🔍 Hledat",
    statistics: "📈 Statistika",
    affiliate_error: "Chyba partnerského programu: {error}",
    affiliate_load_error: "⚠️ Chyba při načítání partnerského programu",
    buy_subscription: "💰 Zakoupení předplatného",
    subscription_text: "Pro zakoupení předplatného kontaktujte kryptobota:\n\nPo zaplacení předplatného získáte přístup k doporučujícímu programu a dalším exkluzivním možnostem.",
    go_to_cryptobot: "📲 Přejít ke kryptobotovi",
    check_subscription_status: "🔄 Zkontrolovat předplatné",
    subscription_active: "✅ Vaše předplatné je aktivní! Nyní můžete zvát doporučené.",
    subscription_inactive: "❌ Předplatné ještě není aktivní. Dokončete prosím platbu nebo kontaktujte podporu.",
    subscription_check_error: "❌ Chyba při kontrole stavu předplatného",
    data_not_found: "Data nebyla nalezena. Aktualizujte portfolio",
    last_page: "Toto je poslední strana",
    first_page: "Toto je první strana",
    page_load_error: "Chyba při načítání strany",
    edit_message_error: "Nepodařilo se upravit zprávu, odesíláme novou:",
    refresh: "🔄 Obnovit",
    referral_access_subscription: "❌ <b>Přístup k doporučujícímu programu přes předplatné</b>\n\n✅ Pro nastavení doporučujícího odkazu a aktivaci vašeho bota je nutné zakoupit předplatné za 10$/měs.",
    referral_invite_text: "👋🏻 Ahoj! Pokud chceš získávat pasivní příjem z TOP-1 burzy, připoj se přes můj odkaz 👆",
    your_referral_link: "Váš doporučující odkaz",
    referral_invite_description: "💡 Zvěte přátele a získejte příjem z jejich aktivních podílů v poolu!",
    share_link: "📢 Sdílet odkaz",
    buy_subscription: "💳 Koupit předplatné (10$/měs)",
    referral_link_error: "❌ Chyba při načítání doporučujícího odkazu",
    link_copied: "📋 Doporučující odkaz zkopírován:",
    share_with_friends: "Nyní jej můžete sdílet s přáteli!",
    link_settings_title: "⚙️ Nastavení vašich odkazů",
    link_settings_description: "Tyto odkazy uvidí vaši doporučení:",
    choose_link_to_change: "💡 Vyberte odkaz ke změně:",
    change_video: "🎥 Změnit video",
    cancel_input: "❌ Zrušit zadávání",
    user_not_found: "❌ Uživatel nebyl nalezen",
    link_access_subscription: "❌ Přístup k nastavení odkazů přes předplatné",
    subscription_required: "✅ Pro nastavení doporučujícího odkazu a aktivaci vašeho bota je nutné zakoupit předplatné za 10$/měs.",
    buy_subscription_button: "💳 Koupit předplatné (10$/měs)",
    payment_pending: "⌛ Čeká se na platbu předplatného",
    payment_pending_description: "Vaše předplatné čeká na potvrzení platby. Pokud jste již zaplatili, klikněte na tlačítko níže pro kontrolu stavu.",
    check_payment: "🔄 Zkontrolovat platbu",
    create_new_payment: "💳 Vytvořit novou platbu",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ Všechny odkazy resetovány na systémová nastavení",
    reset_links_error: "❌ Chyba při resetování odkazů",
    subscription_payment_title: "💳 Platba předplatného pro nastavení odkazů",
    subscription_price: "Cena: ",
    subscription_duration: "Doba platnosti: ",
    pay_via_cryptobot: "🔗 Zaplatit přes kryptobota",
    check_payment: "🔄 Zkontrolovat platbu",
    cancel: "❌ Zrušit",
    subscription_payment_error: "⚠️ Došlo k chybě při vytváření předplatného. Zkuste to prosím později.",
    subscription_description: "Předplatné pro nastavení odkazů (1 měsíc)",
    no_data_to_display: "❌ Žádná data k zobrazení",
    nothing_found_for_query: "Podle dotazu",
    no_referrals_on_levels: "Zatím nemáte doporučené na úrovních",
    invested_in_pool: "Odesláno do poolu",
    found_referrals: "Nalezeni doporučení",
    subscription_activated: "✅ Předplatné úspěšně aktivováno!",
    subscription_activated_description: "🎉 Nyní máte přístup ke všem funkcím nastavení odkazů a partnerského systému.",
    payment_processing: "⌛ Platba se zpracovává. Zkontrolujte prosím později.",
    invoice_expired: "❌ Platnost faktury vypršela.",
    payment_not_found: "❌ Platba nebyla nalezena nebo zrušena.",
    payment_check_error: "⚠️ Chyba při kontrole platby.",
    payment_check_error_description: "Zkuste to prosím později nebo kontaktujte podporu.",
    try_again: "🔄 Zkusit znovu",
    new_payment: "💳 Nová platba",
    enter_presentation_link: "📊 Zadejte odkaz na prezentaci:",
    enter_video_link: "🎥 Zadejte odkaz na video instrukce:",
    enter_official_link: "🌐 Zadejte odkaz na oficiální web:",
    referral_stats: "📊 Statistika podle úrovní",
    level: "Úroveň",
    referrals_count: "👥 Doporučených:",
    total_invested: (amount) => `💰 Odesláno do poolu: ${amount} USDT`,
    search_referrals_prompt: "🔍 Zadejte uživatelské jméno pro hledání:",
    no_referrals: "👥 Zatím nemáte doporučené",
    level_not_found: "❌ Úroveň nebyla nalezena",
    your_referrals: "👥 Vaši doporučení",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Strana ${current} z ${total}`,
    no_referrals_on_level: "Na této úrovni zatím nejsou doporučení",
    back_to_affiliate: "◀️ Zpět k partnerskému programu",
    your_personal_partners: "Vaši osobní partneři",
    id: "ID",
    too_many_partners_use_team: "Příliš mnoho partnerů k zobrazení. Pro úplný seznam použijte sekci 'Můj tým'.",
    total_personal_partners: "Celkem osobních partnerů",
    no_personal_partners_yet: "Zatím nemáte osobní partnery",
    invite_friends_tip: "💡 Zvěte přátele přes svůj doporučující odkaz, aby se stali vašimi osobními partnery!",
    my_team: "🧏‍♂️ Můj tým",
    personal_partners_error: "❌ Chyba při načítání osobních partnerů",
    level_activation_title: "Aktivace úrovní partnerského programu",
    your_pool_share: "Váš podíl v poolu",
    new_activated_levels: "Nové aktivované úrovně",
    activation_status: "Stav aktivace úrovní",
    how_to_activate: "Jak aktivovat",
    levels_activate_automatically: "Úrovně se aktivují automaticky po dosažení potřebné výše investic (100$ za úroveň)",
    to_activate_level: "Pro aktivaci úrovně",
    needs_more: "potřebujete ještě",
    refresh_status: "🔄 Obnovit stav",
    levels_check_error: "❌ Chyba při kontrole úrovní",
    settings_title: "⚙️ Nastavení\n\nZde můžete nastavit své odkazy\n\nVyberte akci:",
    link_settings: "⚙️ Nastavení odkazů",
    contact_mentor: "🙆‍♂️ Kontaktovat mentora",
    community_chat: "💬 Komunitní chat",
    support_service: "⚠️ Služba podpory",
    language_settings: "🌐 Jazyk / Language",
    language_changed_el: "✅ Jazyk změněn na Češtinu",
    language_changed_ge: "✅ Language changed to Greek",
    language_changed_ka: "✅ ენა შეიცვალა ქართულად",
    language_changed_en: "✅ Language changed to English",
    language_changed_fr: "✅ Language changed to French",
    language_changed_id: "✅ Language changed to Indonesia",
    language_changed_es: "✅ Language changed to Español",
    language_change_error: "❌ Chyba při změně jazyka",
    not_subscribed: "❌ Není přihlášen k odběru našeho chatu. Přihlaste se prosím k odběru a znovu klikněte na \"Zkontrolovat odběr\".",
    please_subscribe_to_chat: "Pro pokračování je nutné přihlásit se k odběru našeho kanálu.",
    subscribe_to_chat: "📢 Přihlásit se k odběru chatu",
    check_subscription_btn: "🔄 Zkontrolovat odběr",
    subscription_check_error: "Chyba kontroly odběru",
    wallet_not_configured: "❌ Peněženka není nastavena",
    wallet_not_configured: "❌ Peněženka není nastavena",
    transaction: "Transakce",
    wallet: "Peněženka",
    user_not_found: "❌ Uživatel nebyl nalezen v systému. Zkuste to znovu.",
    invalid_url_format: "❌ Neplatný formát odkazu",
    subscription_required_for_links: "❌ Pro nastavení odkazů je vyžadováno aktivní předplatné",
    subscription_required_description: "💳 Zakupte předplatné za 10$/měs. pro nastavení vašich odkazů",
    buy_subscription_button: "💳 Koupit předplatné",
    domain_not_allowed: "❌ Tento odkaz nevede na týmový kurz",
    domain_not_allowed_description: "✅ Zadejte odkaz správného formátu nebo kontaktujte službu podpory",
    your_domain: "Vaše doména: {domain}",
    support_service: "⚠️ Služba podpory",
    link_saved_success: "✅ Odkaz úspěšně uložen!",
    link_save_error: "❌ Chyba při ukládání odkazu",
    invalid_referral_link: "❌ Neplatný formát odkazu. Zadejte prosím platný HTTP/HTTPS odkaz.",
    referral_link_save_error: "❌ Chyba při ukládání odkazu. Zkuste to znovu.",
    invalid_investment_amount: "❌ <b>Neplatná částka!</b>",
    investment_amount_limits: "Minimální částka: <b>1 USDT</b>\nMaximální částka: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Zadejte platnou částku číslem</i>",
    investment_chosen_amount: "🔄 Vybrali jste částku <b>{amount} USDT</b>.",
    choose_investment_period: "Vyberte dobu odeslání do poolu:",
    investment_yield: "<b>Ziskovost podle dob:</b>",
    investment_return_info: "<i>Všechny prostředky <b>(částka USDT + bonusy)</b> se automaticky vrací po uvedené době na vaši peněženku</i>",
    select_period: "👇 <b>Vyberte dobu odeslání do poolu:</b>",
    search_results: '🔍 Výsledky hledání pro "{query}:',
    levels: "📊 Úrovně: {levels}",
    sent_to_pool: "💰 Odesláno do poolu: {amount} USDT",
    admin_prize_set: "✅ Výhra nastavena: {amount} USDT",
    admin_time_set: "✅ Čas nastaven: začátek v {startHour}:00, délka {durationHours} hodin",
    admin_funds_returned: "✅ Prostředky vráceny pro kolo #{roundId}",
    invalid_round_id: "❌ Neplatné ID kola",
    admin_error: "❌ Chyba při provádění příkazu",
    invalid_wallet_format: "❌ Neplatný formát adresy peněženky.",
    wallet_format_details: "✅ Správný formát: 0x + 40 znaků (čísla a písmena A-F)",
    wallet_wrong_example: "❌ Příklad nesprávného: 0x123, 0xghijklmnop...",
    wallet_network_warning: "⚠️ Ujistěte se, že adresa patří do sítě BSC (Binance Smart Chain)",
    wallet_already_used: "❌ Tato peněženka je již používána jiným uživatelem. Použijte prosím jinou peněženku.",
    invalid_tx_hash: "❌ <b>Neplatný formát TX Hash!</b>",
    tx_hash_format: "TX Hash musí začínat 0x a obsahovat 64 znaků.",
    checking_transaction: "🔍 Kontroluji transakci...",
    transaction_accepted: "✅ <b>Transakce přijata ke kontrole!</b>",
    transaction_check_time: "Bot zkontroluje stav transakce během 2-5 minut.",
    transaction_notification: "Obdržíte oznámení, když bude transakce potvrzena.",
    transaction_save_error: "❌ Chyba při ukládání transakce. Kontaktujte prosím podporu.",
    use_menu_buttons: "Pro navigaci používejte tlačítka menu",
    level_activation_title: "Aktivace úrovní partnerského programu",
    your_pool_share: "Váš podíl v poolu",
    new_activated_levels: "Nové aktivované úrovně",
    activation_status: "Stav aktivace úrovní",
    how_to_activate: "Jak aktivovat",
    levels_activate_automatically: "Úrovně se aktivují automaticky po dosažení potřebné výše investic (100$ za úroveň)",
    to_activate_level: "Pro aktivaci úrovně",
    needs_more: "potřebujete ještě",
    refresh_status: "🔄 Obnovit stav",
    levels_check_error: "❌ Chyba při kontrole úrovní",
    referrals_title: (level) => `👥 <b>Vaši doporučení</b> | <b>Úroveň ${level}</b>`,
    no_referrals: "Na této úrovni zatím nejsou doporučení",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Strana {page} z {total}",
    back_btn: "◀️ Zpět",
    select_language: "🌐 <b>Vyberte jazyk:</b>",
    current_language: "Aktuální jazyk: {language}",
    russian: "🇷🇺 Čeština",
    english: "🇺🇸 Angličtina",
    french: "🇫🇷 Francouzština",
    indonesia: "🇮🇩 Indonéština",
    espaniol: "🇪🇸 Španělština",
    italy: "🇮🇹 Italština",
    german: "🇩🇪 Němčina",
    georgia: "🇬🇪 Gruzínština",
    greece: "🇬🇷 Řečtina",
    swahilli: "🇰🇪 Keňština",
    turkish: "🇹🇷 Turečtina",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Zpět k nastavení",
    total_invested_level: "Osobní podíl v poolu",
    error: "❌ Došlo k chybě, zkuste to znovu.",
    invalid_address: "❌ Neplatná adresa.",
    access_denied: "⛔ Nedostatek oprávnění",
    loading: "⏳ Načítání...",
    updated: "Aktualizováno",
    enabled: "✅ Zapnuto",
    disabled: "❌ Vypnuto",
    turn_on: "🔔 Zapnout",
    turn_off: "🔕 Vypnout",
    description: "Popis"
},
	tr: {
    // 🔥 REFERANS SİSTEMİ - TÜRKÇE
    referral_reward_notification: "🎉 <b>Referans ödülü alındı!</b>\n\n💰 <b>Tutar:</b> {amount} USDT\n\n💼 Fonlar zaten bakiyenizde ve çekme veya yeniden yatırım için hazır.",
    referral_reward_my_portfolio: "💼 Portföyüm",
    
    missed_referral_reward: "😡 <b>Kaçırılan referans ödülü!</b>\n\n💰 <b>Tutar:</b> {amount} USDT\n📊 <b>Seviye:</b> {level}\n\n🔐 Referans ödülleri almak için {level}. seviyeyi etkinleştirin!",
    activate_levels_button: "💼 Seviyeleri Etkinleştir",
    
    // İzleme ve kontrol
    starting_periodic_check: "🔄 Periyodik referans işlemleri kontrolü başlatılıyor (her dakika)...",
    periodic_check_started: "✅ Kullanıcı cüzdan izleme başlatıldı",
    checking_recent_transactions: "⏰ Son dakikanın işlemleri kontrol ediliyor: {time} tarihinden itibaren",
    wallet_check_progress: "🔍 Cüzdan için yeni işlemler kontrol ediliyor: {wallet}",
    fresh_transaction_found: "🕐 Yeni işlem bulundu: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 {wallet} cüzdanı için son dakikada {count} yeni referans işlemi bulundu",
    
    // Kontrol sonuçları
    force_check_started: "🔍 YENİ referans işlemlerinin zorunlu kontrolü (son dakika)...",
    no_wallets_for_check: "❌ Kontrol edilecek kullanıcı cüzdanı yok",
    wallets_check_summary: "📊 Son dakikadan {count} kullanıcı cüzdanı kontrol ediliyor",
    check_results: "📊 Son dakika kontrol sonuçları:",
    wallets_checked: "• Kontrol edilen cüzdanlar: {count}",
    fresh_transactions_found: "• Bulunan yeni işlemler: {count}",
    successfully_processed: "• Başarıyla işlendi: {count}",
    errors_count: "• Hatalar: {count}",
    
    // İşlem işleme
    processing_fresh_transaction: "🔍 YENİ referans TX işleniyor:\n- Hash: {hash}\n- Alıcı: {recipient}\n- Tutar: {amount} USDT\n- Zaman: {time}",
    transaction_already_processed: "⏭️ {hash} işlemi zaten işlendi",
    user_not_found_by_wallet: "❌ {wallet} cüzdanlı kullanıcı bulunamadı",
    user_found: "✅ Kullanıcı bulundu: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ {telegramId} kullanıcısı için YENİ referans ödülü işlendi",
    
    // Hatalar
    transaction_processing_error: "❌ YENİ referans işlemi işleme hatası",
    wallet_check_error: "❌ {wallet} cüzdan kontrol hatası",
    periodic_check_error: "❌ Periyodik kontrol hatası: {error}",
    force_check_error: "❌ Yeni işlemler zorunlu kontrol hatası: {error}",
    
    // Yönetici bildirimleri
    bot_not_available: "❌ Bot bildirim göndermek için kullanılamıyor",
    user_blocked_bot: "🚫 {telegramId} kullanıcısı botu engelledi",
    user_marked_blocked: "✅ {telegramId} kullanıcısı engelli olarak işaretlendi",
    
    // Ödül süreci
    referral_reward_start: "🔔 BAŞLANGIÇ processReferralRewardEnhanced:\n- Cüzdan: {wallet}\n- Tutar: {amount} USDT\n- TX Hash: {hash}\n- Gönderen: {from}\n- Zaman damgası: {time}",
    transaction_recorded: "✅ İşlem veritabanına kaydedildi",
    balance_updated: "✅ Kullanıcı bakiyesi +{amount} USDT güncellendi",
    referral_reward_db_success: "✅ Referans ödülü veritabanında başarıyla işlendi",
    sending_user_notification: "🔔 {telegramId} kullanıcısına bildirim gönderiliyor",
    user_no_telegram_id: "⚠️ {userId} kullanıcısının telegram_id'si yok",
    database_overflow_error: "⚠️ Sayısal alan taşma hatası, daha az hassasiyetle deneme",
    retry_failed: "❌ Yeniden deneme de başarısız oldu",
    referral_reward_end: "✅ SON processReferralRewardEnhanced {wallet} cüzdanı için",
    
    // Basit ödüller
    simple_reward_processing: "🔔 Referans ödülü işleniyor: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ {telegramId} kullanıcısı için referans ödülü kaydedildi",
    
    // Bildirimler
    notification_sent: "✅ {telegramId} kullanıcısına referans ödülü bildirimi gönderildi",
    notification_error: "❌ {telegramId} kullanıcısına bildirim gönderme hatası: {error}",
    
    // Cüzdan güncellemeleri
    wallets_updater_started: "✅ Kullanıcı cüzdan izleme başlatıldı",
    
    // Yetim işlemler
    orphan_transaction_processing: "🔍 {userId} kullanıcısı için yetim referans işlemi işleniyor",
    missed_reward_notification_sent: "⚠️ {level}. seviye için kaçırılan ödül bildirimi gönderildi",
    orphan_transaction_error: "❌ Yetim işlem işleme hatası",
    
    // Genel
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Kütüphane Küratörleri",
    no_curators_data: "{level} seviyesi için küratör verisi bulunmuyor",
    curators_library_explanation: "Burada ortaklarınızın sponsorlarını ve ekiplerini görebilirsiniz",
    statistics: "İstatistikler",
    total_curators: "Toplam küratör",
    total_referrals: "Toplam ortak",
    average_per_curator: "Küratör başına ortalama",
    sponsor: "Sponsor",
    partners: "Ortaklar",
    more: "daha fazla",
	incomplete_registration_title: "🚫 Bot'ta kaydı tamamlamadınız!",
    incomplete_registration_message: "Kar elde etmeye başlamak ve fırsatları kaçırmamak için kaydı tamamlayın.",
    complete_registration_to_earn: "Kaydı tamamlayın ve kazanmaya başlayın!",
	complete_registration_to_earn_start: "🚀 <b>Kayda devam etmek için lütfen</b> <code>/start</code> <b>komutunu gönderin!</b>",
    invalid_tx_hash_format:
      "❌ <b>Geçersiz TX Hash formatı</b>\n\nLütfen geçerli bir işlem hash'i girin (64 karakter, 0x ile başlar)",
    checking_transaction_blockchain:
      "🔍 <b>Blockchain'de işlem kontrol ediliyor...</b>\n\nİşlem tutarı ve tarih bilgisi alınıyor...",
    transaction_check_error: "❌ <b>İşlem kontrol hatası</b>\n\n{error}",
    blockchain_check_error:
      "❌ Blockchain'de işlem kontrolü sırasında bir hata oluştu",
    transaction_found_details:
      "✅ <b>İşlem bulundu!</b>\n\n💰 <b>Tutar:</b> {amount} USDT\n📅 <b>Tarih:</b> {date}\n\n⏰ <b>Havuz için hangi süreyi seçtiğinizi belirtin:</b>",
    invalid_period_range:
      "❌ <b>Geçersiz süre</b>\n\nLütfen 1 ile 28 gün arasında bir sayı girin",
    period_processing_error: "❌ Süre işlenirken bir hata oluştu",

    // Süreler
    period_1_day: "1 gün",
    period_7_days: "7 gün",
    period_14_days: "14 gün",
    period_28_days: "28 gün",
    custom_period: "📅 Özel süre",

    // Yönetici Paneli
    bot_disabled_success: "🔴 Bot kullanıcılar için devre dışı bırakıldı",
    bot_disable_error: "❌ Hata: {error}",
    admin_panel: "🔧 Yönetici Paneli",
    invalid_prize_amount: "Geçersiz ödül tutarı",
    prize_set_success: "✅ Ödül ayarlandı: {amount} USDT",
    prize_sent_success: "✅ TX hash kaydedildi. Ödül kontrata gönderildi.",
    prize_send_error: "❌ Hata: {error}",
    winner_prize_notification:
      "🎯 {amount} USDT kazancınız kontrata gönderildi!\n\n⏰ 28 gün sonra karınızı alacaksınız.\n📋 TX Hash: {txHash}",

    // Alan Adları
    domain_not_allowed_with_details:
      `❌ <b>Alan adına izin verilmiyor</b>\n\n{domain_not_allowed_description}\n\n<b>Alan adınız:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Referans bağlantınız başarıyla bağlandı!\n\n🏁 Bitiş çizgisine geldiniz, iletişim kolaylığı, sorularınızı sorma ve ekibimizle tanışma fırsatı için sohbet grubumuza katılmanız gerekiyor\n\n1. Şu sohbete gidin @BitnestRus \n\n2. 'Gruba Katıl' butonuna tıklayın\n\n3. Bildirimleri açmayı unutmayın\n\n4. Aşağıdaki 'Abone oldum' butonuna tıklayın\n\n👇🏼 Veya otomatik olarak sohbetimize gitmek için aşağıdaki butonu kullanın",
    chat_link: "📢 Sohbete Abone Ol",
    disclaimer:
      "✅ Sayın kullanıcı, bu sistem sadece ekibimizin Bitnest sistemiyle daha önce diğer ekipler kapsamında etkileşimde bulunmamış yeni kullanıcılarını eğitmek ve bilgilendirmek için oluşturulmuştur\n\n🤔 Lütfen söyler misiniz, daha önce Bitnest kapsamında başka bir ekip üyesi miydiniz?\n\n1. (HAYIR) - eğer daha önce başka bir ekip üyesi DEĞİLSENİZ\n\n2. (EVET) - eğer zaten başka bir ekipte hesabınız varsa ve USDT dolaşıma gönderdiyseniz\n\nBu botun hizmetleri sadece daha önce başka bir ekip üyesi olmayan ve ✅ HAYIR butonuna basan yeni kullanıcılara sağlanır",
    disclaimer_no: "✅ HAYIR, BEN YENİ KULLANICIYIM",
    disclaimer_yes: "⛔️ EVET, BEN BAŞKA BİR EKİBİN ÜYESİYİM",
    // Onay için yeni metinler
    block_confirmation_title: "Onay",
    block_confirmation_message: "Eğer başka bir ekibin üyesiyseniz, kendi danışmanınıza başvurun ve tamamlamak için bize geri dönün.\n\nHesabı devre dışı bırakmak ve bu aracı kullanmaktan vazgeçmek istediğinizden emin misiniz?",
    back_button: "◀️ Geri",
    confirm_block_button: "✅ Evet, devre dışı bırak",
    account_blocked_message: "🚫 <b>Hesap devre dışı bırakıldı</b>\n\nHesabınız isteğiniz üzerine devre dışı bırakıldı.\n\nEğer bu bir hata sonucu olduysa, destekle iletişime geçin @BitnestRusSupport.",
    account_blocked:
      "❌ Maalesef, bu botun hizmetleri sadece yeni kullanıcılara sağlanmaktadır. Hesabınız aktif değil. Tüm sorularınız için @BitnestRusSupport.",
    please_try_again: "Lütfen tekrar deneyin",
    add_custom_transaction: "➕ İşlem ekle",
    adding_custom_transaction: "🔗 <b>Kendi işleminizi ekleme</b>",
    enter_tx_hash_prompt:
      "Lütfen işleminizin <b>TX Hash</b>'ini girin:",
    transaction_requirements:
      "• BSC ağında (Binance Smart Chain) yapılmış olmalı\n• USDT işlemi olmalı",
    tx_hash_example:
      `📝 <b>Örnek:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nHavuz işlemlerinizi görüntüleyin <a href="https://bscscan.com/address/{wallet}#tokentxns">Git</a>`,
    enter_amount_prompt: "💰 <b>USDT cinsinden işlem tutarını girin:</b>",
    amount_example: "Örnek: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Havuz gönderme süresini seçin:</b>",
    verifying_transaction: "🔍 <b>Blockchain'de işlem kontrol ediliyor...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nTutar: {amount} USDT\nSüre: {period} gün",
    please_wait: "Lütfen bekleyin...",
    transaction_already_exists: "Bu işlem zaten sisteme eklenmiş",
    transaction_not_found: "İşlem bulunamadı",
    transaction_not_confirmed: "İşlem onaylanmamış veya başarısız",
    transaction_wrong_sender:
      "İşlem sizin cüzdanınızdan gönderilmedi. Cüzdanınız: {userWallet}, işlemdeki gönderen: {txFrom}",
    transaction_wrong_receiver:
      "İşlem sistem cüzdanına gönderilmedi. Alıcı şu olmalı: {systemWallet}",
    transaction_amount_mismatch:
      "Tutar uyuşmuyor. Blockchain'de: {blockchainAmount} USDT, siz girdiniz: {enteredAmount} USDT",
    transaction_not_usdt: "Bu bir USDT işlemi değil",
    transaction_decode_error: "USDT işlem verileri çözülemedi",
    blockchain_error: "Blockchain kontrol hatası: {error}",
    transaction_added_success: "✅ <b>İşlem başarıyla eklendi!</b>",
    investment_details: "📊 <b>Yatırım detayları:</b>",
    investment_amount: "• Tutar: {amount} USDT",
    investment_period: "• Süre: {period} gün",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Karlılık: {profit}%",
    investment_added_to_portfolio: "💼 Yatırım portföyünüze eklendi.",
    transaction_add_error: "❌ <b>İşlem eklenirken hata</b>",
    error_reason: "Sebep: {error}",
    language_changed_success: "✅ Dil başarıyla Türkçe olarak değiştirildi!",
    welcome: `👋🏼 Hoş geldiniz <b>{username}</b> - bu, topluluğumuzun bir ekip aracıdır, bu bot sistemi adım adım anlamanızı ve ekibimizin bir parçası olmanızı sağlayacak!\n\n🎥 Sizin için tüm süreci anlatan ve gösteren adım adım video talimatlar hazırladık\n\n👇🏼 Eğitime başlamak ve ilk sonuçlarınızı almaya başlamak için \"🎓 Eğitime Başla\" butonuna tıklayın`,
    welcome_back: "👋 Eğitimi zaten tamamladınız! Tekrar hoş geldiniz!",
    education_title: "🎓 Eğitim Materyalleri\nBir konu seçin:",
    finish: "✅ Eğitim tamamlandı!",
    wallet_installation:
      "📲 <b>Cüzdan kurulumu</b>\nDesteklenen cüzdanlardan birini indirin ve kurun.",
    ask_wallet_address:
      "👍🏼 Harika seçim! Eğitime başlıyoruz:\n\n💵 Web3 ve DeFi dünyasında öncelikle kişisel bir kripto cüzdanına ihtiyacınız var, şimdi hemen kuracağız:\n\n1. <b>MetaMask</b> uygulamasının resmi web sitesine gidin\n\n2. Uygulamayı telefonunuza kurun\n\n3. Bir cüzdan oluşturun ve tohum ifadeyi mutlaka güvenli bir yere yazın\n\n4. BSC ağını - Binance Smart Chain (BEP20) yapılandırın\n\n5. Cüzdanınızın genel adresini 0x............. kopyalayın\n\n6. Bu adresi aşağıdaki alana mesaj olarak gönderin 👇🏼",
    enter_wallet: `🥳 Tebrikler cüzdanınız başarıyla bağlandı!\n\n📝 Bu adımda Bitnest'in resmi web sitesinde kayıt olmanız gerekiyor (videoya bakın)\n\n1. Bu bağlantıyı kopyalayın \n\n<code>{referral_link_bitnest}</code>\n\nve cüzdanınızın dahili tarayıcısında açın\n\n2. Sağ üst köşede \"Connect\"e tıklayın\n\n3. Cüzdanınızın açılır penceresinde web sitesinde yetkilendirmeyi onaylayın \n\n<i><b>*Eğer site açılmıyorsa, 3 harfli programı açın (bu sitede oturum açmanıza izin verecek)</b></i>\n\n👇🏼 Veya otomatik olarak cüzdana gitmek ve gerekli sayfayı açmak için aşağıdaki butonları kullanın`,
    your_wallet: "💼 Kripto cüzdanınız\n\n📌 Ağ adresi (BEP20)",
    install_wallet:
      "👍🏼 Harika seçim! Eğitime başlıyoruz:\n\n💵 Web3 ve DeFi dünyasında öncelikle kişisel bir kripto cüzdanına ihtiyacınız var, şimdi hemen kuracağız:\n\n1. <b>MetaMask</b> uygulamasının resmi web sitesine gidin\n\n2. Uygulamayı telefonunuza kurun\n\n3. Bir cüzdan oluşturun ve tohum ifadeyi mutlaka güvenli bir yere yazın\n\n4. BSC ağını - Binance Smart Chain (BEP20) yapılandırın\n\n5. Cüzdanınızın genel adresini 0x............. kopyalayın\n\n6. Bu adresi aşağıdaki alana mesaj olarak gönderin 👇🏼",
    loading_balance: "⏳ Bakiye bilgisi alınıyor...",
    refresh: "🔄 Yenile",
    bnb_balance: "Bakiye:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Token bakiyesi",
    wallet_not_configured: "❌ Cüzdan yapılandırılmadı",
    send_usdt: "💸 USDT Gönder",
    check_my_investment: "💸 USDT Gönder",
    error_amount_not_selected: "❌ Hata: tutar seçilmedi",
    error_wallet_not_configured: "❌ Hata: cüzdan yapılandırılmadı",
    back_to_amount_selection: "◀️ Tutar seçimine geri dön",
    configure_wallet: "⚙️ Cüzdanı Yapılandır",
    your_mentor: (mentor) => `Danışmanınız: ${mentor}`,
    write_to_mentor: "✉️ Danışmana Yaz",
    what_is_bitnest:
      "🏗 <b>BitNest Nedir</b>\nŞeffaf işlemler, fonlarınızın kontrolü.",
    defi_basics: "📊 DeFi Temelleri.\nSonra - havuzlara yatırım nasıl çalışır.",
    liquidity_pool_text:
      "💎 Likidite Havuzu\n\n💵 Buradan USDT'yi likidite havuzuna gönderip bonuslar alabilirsiniz.\n\nBir işlem seçin:",
    my_investments_empty: "📊 Henüz yatırımınız yok.",
    investment_saved: "✅ Veriler kaydedildi",
    investment_return_received: (amount) =>
      `Dolaşımınız <b>${amount}$</b> size ulaştı`,
    congrats_profit: "Kar elde ettiğiniz için tebrikler!",
    referral_reward_received: "Referans ödülü aldınız!",
    back_to_main_menu: "🏠 Ana menüye dön",
    user: "Kullanıcı",
    amount: "Tutar",
    congrats_referral_earned:
      "Tebrikler! Referans ödülü kazandınız!",
    balance_replenished: (amount) => `Bakiyeniz ${amount} USDT ile yenilendi`,
    referral_reward_received_amount: (amount) =>
      `Referans ödülü aldınız ${amount}`,
    you_have_inactive_levels: "Aktif olmayan seviyeleriniz var!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `${amount} USDT gönderirseniz şu seviyeleri aktifleştirebilirsiniz: ${levels}`,
    activate_levels_to_earn:
      "Seviyeleri aktifleştirerek referanslardan gelir elde edin!",
    new_levels_activated: (levels) => `Yeni seviyeler aktifleştirildi: ${levels}`,
    now_earn_from_levels:
      "Artık ekibinizin bu seviyelerinden gelir elde ediyorsunuz!",
    invalid_tx_hash_contact_support:
      "❌ Geçersiz işlem hash'i. Lütfen destekle iletişime geçin.",
    congrats_liquidity_pool_success:
      "Tebrikler! Likidite havuzuna gönderiminiz başarıyla tamamlandı!",
    transaction_details: "İşlem detayları",
    block: "Blok",
    period: "Vade",
    days: "gün",
    not_specified: "belirtilmemiş",
    level_deactivated_title: "Seviye devre dışı bırakıldı",
    level: "Seviye",
    has_been_deactivated: "devre dışı bırakıldı",
    liquidity_pool_completed_reason:
      "Likidite havuzuna gönderiminiz başarıyla tamamlandı!",
    go_to_portfolio_for_details:
      'Detaylar için \"Portföyüm\"e gidin',
    total_return: "Toplam iade tutarı",
    return_date: "İade tarihi",
    error_updating_pool_status:
      "❌ Havuza gönderim durumu güncellenirken hata. Destekle iletişime geçin.",

    transaction_not_found_after_attempts: (txHash) =>
      `❌ İşlem birkaç denemeden sonra bulunamadı.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Olası nedenler:\n` +
      `• İşlem henüz ağ tarafından onaylanmadı\n` +
      `• Geçersiz TX Hash\n` +
      `• BSC ağında sorunlar\n\n` +
      `Lütfen TX Hash'i kontrol edin ve tekrar deneyin veya destekle iletişime geçin.`,
    transaction_wrong_address: (actualTo) =>
      `❌ İşlem yanlış adrese gönderildi!\n\n` +
      `▸ Alınan adres: ${actualTo}\n` +
      `▸ Beklenen adres: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Lütfen USDT'yi havuzun doğru adresine gönderdiğinizden emin olun.`,
    transaction_not_confirmed: (status) =>
      `❌ İşlem onaylanmadı. Durum: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Lütfen işlem durumunu BscScan'de kontrol edin ve gerekirse destekle iletişime geçin.",
    error_checking_transaction:
      "❌ İşlem kontrol edilirken hata. Daha sonra tekrar deneyin veya destekle iletişime geçin.",
    investment_confirmation:
      `💰 <b>Havuza Gönderim Onayı</b>\n\n` +
      `📊 <b>İşlem detayları:</b>\n` +
      `▸ Tutar: <b>{amount} USDT</b>\n` +
      `▸ Süre: <b>{period} gün</b>\n` +
      `▸ Karlılık: <b>{profitPercent}%</b>\n` +
      `▸ Beklenen kar: <b>{expectedProfit} USDT</b>\n` +
      `▸ Toplam iade tutarı: <b>{totalReturn} USDT</b>\n` +
      `▸ İade tarihi: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Gönderim talimatları:</b>\n\n` +
      `1. MetaMask uygulamasını açın\n\n` +
      `2. Bitnest'in resmi web sitesine gidin\n\n` +
      `3. Sağ üst köşede <b>\"Connect\"</b>e tıklayın - <i>(eğer cüzdan simgesi görüyorsanız, bir sonraki adıma geçin)</i>\n\n` +
      `4. Cüzdan simgesine tıklayın ve Loop (Döngü) bölümüne gidin\n\n` +
      `5. Gönderim tutarını girin\n\n` +
      `6. Gönderim süresini seçin\n\n` +
      `7. \"Circulation\" (Dolaşım) butonuna tıklayın\n\n` +
      `8. Cüzdanınızın açılır penceresinde web sitesinde gönderimi onaylayın\n\n` +
      `👇🏼 Veya otomatik olarak cüzdana gitmek ve gerekli sayfayı açmak için aşağıdaki butonları kullanın`,
    send_metamask_mobile: "🦊 Gönder - MetaMask 📲",
    transaction_search_timer: `⚠️ Gönderiminizi bekliyoruz, talimatlar yukarıda\n\n<b>🔎 Gönderimden sonra, işlem araması başlayacak ...</b>\n⏰ <b>Gönderim ve işlem arama süresi:</b> 20:00 dak...\n\n`,
    cancel_search: "❌ Aramayı iptal et",
    failed_delete_timer_message:
      "Zamanlayıcı mesajı silinemedi: {error}",
    investment_details_base:
      `💰 <b>Havuza Gönderim Onayı</b>\n\n` +
      `📊 <b>İşlem detayları:</b>\n` +
      `▸ Tutar: <b>{amount} USDT</b>\n` +
      `▸ Süre: <b>{period} gün</b>\n` +
      `▸ Durum: <b>İptal edildi</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>İşlem araması kullanıcı tarafından iptal edildi</b>",
    failed_update_message:
      "Mesaj güncellenemedi, yeni gönderiliyor: {error}",
    transaction_search_cancelled_log:
      "✅ {userId} kullanıcısı için işlem araması iptal edildi",
    no_active_transaction_search: "❌ Aktif işlem araması bulunamadı",
    error_cancelling_search: "❌ Arama iptal edilirken hata: {error}",
    error_cancelling_search_user: "❌ Arama iptal edilirken bir hata oluştu",
    processing_found_transaction:
      "🔄 {userId} kullanıcısı için bulunan işlem işleniyor",
    investment_in_process_not_found:
      "İşlemde durumunda yatırım bulunamadı",
    failed_update_investment_status: "Yatırım durumu güncellenemedi",
    failed_delete_timer_message:
      "Zamanlayıcı mesajı silinemedi: {error}",
    failed_delete_previous_message:
      "Önceki mesaj silinemedi: {error}",
    transaction_confirmed_message:
      `💰 <b>Havuza Gönderim Onayı</b>\n\n` +
      `📊 <b>İşlem detayları:</b>\n` +
      `▸ Tutar: <b>{amount} USDT</b>\n` +
      `▸ Süre: <b>{period} gün</b>\n` +
      `▸ Beklenen kar: <b>{expectedProfit} USDT</b>\n` +
      `▸ Toplam iade tutarı: <b>{totalReturn} USDT</b>\n` +
      `▸ İade tarihi: <b>{returnDate}</b>\n\n` +
      `✅ <b>İşlem onaylandı!</b>\n` +
      `📊 <b>İşlem hash'i:</b> <code>{hash}</code>\n` +
      `💰 <b>Gerçek tutar:</b> {actualAmount} USDT\n` +
      `⏰ <b>Onaylandı:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Yatırım tutarına göre kullanıcı seviyeleri aktifleştiriliyor",
    user_prefix: "Kullanıcı_",
    notification_sent_to_referrer:
      "✅ {telegramId} referansına bildirim gönderildi",
    referrer_not_found_or_missing_data:
      "⚠️ Referans bulunamadı veya gerekli verilere sahip değil",
    user_has_no_referrer: "⚠️ Kullanıcının referansı yok",
    error_sending_referral_notification:
      "Referans bildirimi gönderilirken hata: {error}",
    error_sending_missed_rewards:
      "Kaçırılan ödül bildirimleri gönderilirken hata: {error}",
    error_sending_missed_referrals:
      "Kaçırılan referans bildirimi gönderilirken hata: {error}",
    level_activation_notifications_sent:
      "🎯 Seviye aktifleştirme bildirimleri şu seviyelere gönderildi: {levels}",
    error_sending_level_activation:
      "Seviye aktifleştirme bildirimi gönderilirken hata: {error}",
    transaction_processed_successfully:
      "✅ {userId} kullanıcısı için işlem başarıyla işlendi",
    error_processing_transaction:
      "❌ {userId} kullanıcısı için işlem işlenirken hata: {error}",
    transaction_processing_error_message:
      `❌ <b>İşlem işleme hatası</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Hata: {error}\n\n` +
      `Lütfen destekle iletişime geçin.`,
    error_sending_notification: "Bildirim gönderilirken hata: {error}",
    new_levels_activated: "Yeni seviyeler aktifleştirildi!",
    activated_levels: "Aktifleştirilen seviyeler",
    levels_activation_benefit:
      "Artık ekibinizin bu seviyelerinden gelir elde ediyorsunuz!",
    referral_made_transaction: "Referansınız bir gönderim yaptı!",
    your_referral: "Referansınız",
    congrats_referral_reward:
      "Tebrikler! Referans ödülü kazandınız!",
    // =========================
    // Ortaklık Programı
    // =========================
    affiliate_text: `👥 Ortaklık ağınız, {username}\n\n17 ekibiniz seviyesi ve referanslarınızın karlılığından her seviyeden gelir elde etme\n\n<b>1. sev</b> - %20\n<b>2. sev</b> - %10\n<b>3 - 7. sev</b> - %5\n<b>8 - 10. sev</b> - %3\n<b>11 - 17. sev</b> - %1\n\nHer seviyeyi aktifleştirmek için, havuzdaki payınız <b>Seviye no * 100$</b> karşılamalı\nTüm seviyeleri aktifleştirmek için, kişisel havuz payınız = <b>1700$</b>\n\n📊 Seviyelere göre genel istatistik:\n{pools.levels}\n\n💰 Toplam: 0 ref. | 0.000 USDT`,
    your_referral_sent: "Referansınız bir gönderim yaptı!",
    missed_referral_reward: (missedAmount, level) =>
      `${level}. seviyeden ${missedAmount}$ referans ödülünü kaçırdınız`,
    activate_level_to_earn:
      "Tüm yapıdan gelir elde etmek için seviyeyi aktifleştirin!",
    check_subscription: "✅ Abone oldum",
    website_ref:
      '🎉 Başarılı kayıt için tebrikler!\n\n🔗 Bu adımda Bitnest kişisel hesabınızdan kendi referans bağlantınızı eklemeniz gerekiyor\n\n1. Bitnest in resmi web sitesine gidin\n\n2. Sağ üst köşede \"<b>Connect</b>\"e tıklayın<i> - (eğer cüzdan simgesi görüyorsanız, bir sonraki adıma geçin)</i>\n\n3. \"<b>Arkadaşları Davet Et</b>\"e tıklayın\n\n4. \"<b>Bağlantımı Kopyala</b>\"e tıklayın\n\n5. Aşağıdaki alana gönderin 👇🏼',

    // =========================
    // Çekilişler ve etkinlikler
    // =========================
    raffle: "🎁 ÇEKİLİŞ 🎁",
    daily_raffle: "🎉 Günlük çekiliş!",
    current_prize: "🏆 Ödül",
    participants: "👥 Zaten katılan ",
    end_time: "⏰ Sonuçlar",
    raffle_text: `✅ <b>Katılım koşulları:</b>\n• Havuzda minimum aktif pay: 10 USDT\n• Kişi başı bir deneme\n\n`,
    raffle_requirement:
      "Çekilişe katılmak için havuzda aktif bir paya sahip olmak gerekiyor",
    raffle_wallet_not_set: "⚠️ Önce cüzdanı yapılandırın",
    raffle_already_registered:
      "✅ Mevcut turda başarıyla kayıt oldunuz!",
    successfully_registered: "Çekilişe başarıyla kayıt oldunuz!",
    registration_failed: "Kayıt başarısız oldu",
    participate_button: "🎟 Katıl",
    no_active_raffle: "Şu anda aktif çekiliş yok.",
    already_registered_in_raffle:
      "✅ Zaten mevcut çekilişe kayıtlısınız!",
    new_raffle_started:
      "💰 Ödül: {prize} USDT\n" + "⏰ Bitişe kalan: {hours} saat\n\n",
    register_in_raffle: "🤖 Çekilişe kayıt",
    raffle_error: "❌ Hata: {error}",

    // Cüzdan bölümünden
    raffle_min_investment_required:
      "Çekilişe katılmak için havuzda 10$'dan aktif pay gerekiyor\n\n" +
      "Katılma yeteneği kazanmak için USDT'yi havuza gönderin.",
    raffle_registration_success:
      "Başarıyla kayıt oldunuz!\n\nArtık çekilişe katılıyorsunuz!",
    eligible_to_participate: "💪 Çekilişe kayıt olmaya uygunsunuz",
    raffle_registration_error: "❌ Kayıt hatası: {error}",

    // Menü ve navigasyon bölümünden (kayıt kontrolü için)
    not_registered_yet:
      "❌ Henüz kayıt olmadınız. Kayıt olmak için cüzdan butonunuza tıklayın.",
    register_button: "📝 Kayıt Ol",
    registration_check_error: "❌ Kayıt kontrolü sırasında hata",
    registering_wallet: "🔄 Cüzdanınız kaydediliyor...",
    registration_success: "✅ Mevcut tura başarıyla kayıt oldunuz!",
    registration_error: "❌ Kayıt hatası",
    try_later_or_contact_admin:
      "Daha sonra deneyin veya yöneticiyle iletişime geçin.",
    registration_process_error: "❌ Kayıt sırasında hata",
    mentor_not_found: "❌ <b>Danışman bulunamadı</b>",
    mentor_not_found_description:
      "Atanmış bir danışmanınız yok. Lütfen destekle iletişime geçin.",
    // =========================
    // Diğer
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 Yeni bir referansınız var @${username}`,
    friend: "arkadaş",
    welcome_error: "👋 Hoş geldiniz! Menü yüklenirken bir hata oluştu.",
    link_subscription_pending:
      "⌛ <b>Abonelik ödemesi bekleniyor</b>\n\n" +
      "Aboneliğiniz ödeme onayı bekliyor. " +
      "Eğer zaten ödeme yaptıysanız, durumu kontrol etmek için aşağıdaki butona tıklayın.",
    check_payment: "🔄 Ödemeyi Kontrol Et",
    create_new_payment: "💳 Yeni Ödeme Oluştur",
    link_subscription_required:
      "❌ <b>Bağlantı ayarlarına abonelikle erişim</b>\n\n" +
      "✅ Referans bağlantınızı yapılandırmak ve botunuzu aktifleştirmek için 10$/ay abonelik satın almanız gerekiyor.\n\n",
    buy_subscription: "💳 Abonelik Satın Al (10$/ay)",
    link_settings_error: "❌ Bağlantı ayarları yüklenirken hata",
    setup_wallet_first: "❌ Önce ayarlardan cüzdanı yapılandırın",
    custom_amount_message:
      "💰 <b>Havuza gönderim için kendi tutarınızı girin</b>\n\n" +
      "Minimum tutar: <b>1 USDT</b>\n" +
      "Maksimum tutar: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Aşağıdaki alana USDT cinsinden bir sayı - tutar gönderin</i>",

    // =========================
    // Menü ve navigasyon
    // =========================
    menu_title: `🎉 <b>Hoş geldiniz, {username}</b>\n\n🚀 <b>BitnestRus Bot - Güvenilir asistanınız ve ekip aracınız</b>\n\n✨ <b>Bot özellikleri:</b>\n• 🎁 Para ödüllü çekilişler\n• 💰 Cüzdanınızın finansal istatistikleri\n• 🌊 Likidite havuzu çalışma talimatları\n• 👥 Çok seviyeli ortaklık programı\n• 📊 Analiz ve bilgilendirme\n\n👇 Menüden bir bölüm seçin:\n`,
    back: "◀️ Geri",
    next: "➡️ İleri",
    language_selection_message:
      "🌍 Lütfen dilinizi seçin:\n\nBu, tüm bot için dili ayarlayacak",
    nextreg: " ✍🏼 Kaydı tamamladım",
    my_wallet: "💰 Cüzdanım",
    liquidity_pool: "🌊 Likidite Havuzu",
    my_portfolio: "💼 Portföyüm",
    presentation: "🎥 Sunum",
    video_instructions: "📚 Video talimatlar",
    official_website: "🔗 Resmi web sitesi",
    oficial_site: "✅ Resmi web sitesi",
    affiliate: "👥 Ortaklık Programı",
    settings: "⚙️ Ayarlar",
    admin: "🔧 Yönetici Paneli",
    settings_title:
      "⚙️ Ayarlar\n\nBuradan bağlantılarınızı yapılandırabilirsiniz\n\nBir işlem seçin:",
    start_education: "🎓 Eğitime Başla",
    download_metamask: "🦊 İndir - MetaMask",
    register_metamask: "🦊 Kayıt - MetaMask",
    register_metamask_mobile: "🦊 Kayıt - MetaMask",
    invest_now_message:
      `💰 <b>Likidite havuzuna USDT gönderimi</b>\n\n` +
      `<b>Sürelere göre karlılık:</b>\n` +
      `• <b>1 gün</b> - %0.4\n` +
      `• <b>7 gün</b> - %4\n` +
      `• <b>14 gün</b> - %9.5\n` +
      `• <b>28 gün</b> - %24\n\n` +
      `<i>Tüm fonlar <b>(USDT tutarı + bonuslar)</b> belirtilen süre sonunda otomatik olarak cüzdanınıza iade edilir</i>\n\n` +
      `📌 <b>Bakiyeniz:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Havuza gönderim tutarını seçin:</b>`,
    custom_amount: "🗂 Özel tutar",
    error_getting_data: "❌ Veri alınırken hata, lütfen tekrar deneyin.",
    choose_period_message:
      `🔄 <b>{amount} USDT</b> tutarını seçtiniz. Havuza gönderim süresini seçin:\n\n` +
      `<b>Sürelere göre karlılık:</b>\n` +
      `• <b>1 gün</b> - %0.4\n` +
      `• <b>7 gün</b> - %4\n` +
      `• <b>14 gün</b> - %9.5\n` +
      `• <b>28 gün</b> - %24\n\n` +
      `<i>Tüm fonlar <b>(USDT tutarı + bonuslar)</b> belirtilen süre sonunda otomatik olarak cüzdanınıza iade edilir</i>\n\n` +
      `👇 <b>Havuza gönderim süresini seçin:</b>`,
    back_to_amount_selection: "◀️ Tutar seçimine geri dön",
    main_menu: "🏠 Ana menüye dön",
    timer_message_id_not_found: "❌ timer_message_id bulunamadı",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ Gönderiminizi bekliyoruz, talimatlar yukarıda\n\n<b>🔎 Gönderimden sonra, işlem araması başlayacak ...</b>\n\n⏰ <b>Gönderim ve işlem arama süresi:</b> ${timeString}  dak...\n\n`,
    cancel_search: "❌ Aramayı iptal et",
    timer_error: "❌ Zamanlayıcı hatası: {error}",
    timer_stopped_message_not_found:
      "⏹️ Zamanlayıcı durduruldu: mesaj bulunamadı veya erişilemez",
    timer_minor_error_continue:
      "⚠️ Küçük zamanlayıcı hatası, devam ediyor...",
    transaction_timeout_message:
      "⏰ <b>İşlem arama süresi doldu</b>\n\n" +
      "❌ Ayrılan süre içinde işlem onayı bulunamadı.\n\n" +
      "Olası nedenler:\n" +
      "• İşlem henüz ağ tarafından onaylanmadı\n" +
      "• Geçersiz TX Hash\n" +
      "• BSC ağında sorunlar\n\n" +
      "Lütfen işlem durumunu BscScan'de kontrol edin ve tekrar deneyin.",
    transaction_timeout_log: "⏰ {userId} kullanıcısı için işlem zaman aşımı",
    transaction_timeout_error:
      "❌ İşlem zaman aşımı işlenirken hata: {error}",
    transaction_not_found_try_again:
      "❌ İşlem bulunamadı. Lütfen baştan başlayarak tekrar deneyin.",
    awaiting_transaction_check:
      "🔍 <b>İşlem kontrolü bekleniyor...</b>\n\n" +
      "Bot blockchain'i 2-5 dakika içinde kontrol edecek.\n" +
      "Sonuç hakkında bildirim alacaksınız.",
    transaction_not_found_message:
      `❌ <b>İşlem bulunamadı</b>\n\n` +
      `Olası nedenler:\n` +
      `• İşlem henüz ağ tarafından onaylanmadı\n` +
      `• Havuz adresine gönderilmedi\n` +
      `📞 Eğer USDT gönderdiyseniz, destekle iletişime geçin\n` +
      `🔍 TX Hash: işlem hash'ini sağlayın`,
    transaction_not_found_notification_sent:
      "✅ {userId} kullanıcısına işlem olmama bildirimi gönderildi",
    error_sending_notification: "Bildirim gönderilirken hata: {error}",
    request_tx_hash_message:
      "📝 <b>Lütfen işlem hash'ini (TX Hash) girin:</b>\n\n" +
      "USDT gönderdikten sonra TX Hash'i cüzdanınızdan kopyalayın ve buraya gönderin.",
    error_requesting_tx_hash: "TX Hash istenirken hata: {error}",
    presentation_message:
      `📊 <b>Sunum</b>\n\n` +
      `🎥 Platformun avantajlarını ve bu aracı anlamanıza yardımcı olacak detaylı video sunumu\n\n`,
    presentation_error: "Sunum hatası: {error}",
    presentation_load_error: "❌ Sunum yüklenirken hata",
    user_not_determined: "❌ Kullanıcı belirlenemedi",
    not_configured: "Yapılandırılmadı",
    from_your_inviter: `\n👤 Davet edeninizden: {name}`,
    user: "Kullanıcı",
    system_video_instruction: `\n📋 Sistem video talimatı`,
    video_instructions_header: "🎥 <b>Video talimatlar</b>",
    video_instructions_description:
      "📚 Sistemle çalışmanın tüm inceliklerini öğreneceğiniz ve havuzla etkileşim kurmayı öğreneceğiniz detaylı video kursu",
    video_link_available: `🔗 <b>Video bağlantısı:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Bağlantı mevcut değil</b>\n\n`,
    video_instruction_error: "Video talimat hatası: {error}",
    video_instruction_load_error: "❌ Video talimatlar yüklenirken hata",
    system_link: "🌐 Sistem bağlantısı",
    from_your_mentor: "👤 Danışmanınızdan",
    user: "Kullanıcı",
    your_link: "🌐 Bağlantınız",
    visit_official_website:
      "Platformun resmi web sitesini ziyaret edin ve servisle çalışmanın tüm detaylarını ve kurallarını inceleyin",
    link: "Bağlantı",
    open_metamask: "🦊 MetaMask'i Aç",
    open_in_browser: "💻 PC tarayıcısında aç",
    website_error: "❌ Site bilgisi yüklenirken hata",
    your_investment_portfolio: "Havuzdaki aktif payınızın portföyü",
    your_investment_portfolio_add: "➕ İşlem ekle",
    transaction: "İşlem",
    amount: "Tutar",
    term: "Süre",
    days: "gün",
    profitability: "Karlılık",
    time_left: "Tamamlanmasına kalan",
    d: "g",
    h: "s",
    expected_profit: "Beklenen kar",
    type: "Tür",
    incoming_transaction: "Gelen işlem",
    refund: "Fon iadesi",
    status: "Durum",
    active: "Aktif",
    archived: "Arşivlenmiş gönderim",
    returned: "İade edildi",
    total_statistics: "Genel istatistik",
    total_active_amount: "Toplam aktif tutar",
    page: "Sayfa",
    of: "/",
    portfolio_error: "⚠️ Portföy yüklenirken hata",
    congrats_on_profit: "Kar elde ettiğiniz için tebrikler!",
    bot_not_available: "Bot bildirim göndermek için kullanılamıyor",
    investment_notification_sent:
      "Yatırım iadesi bildirimi kullanıcıya gönderildi",
    investment_notification_error:
      "Yatırım iadesi bildirimi gönderilirken hata:",
    check_old_transactions: "🔍 Eski işlemleri kontrol et",
    checking_old_transactions: "Eski işlemler kontrol ediliyor",
    this_may_take_seconds: "Bu birkaç saniye sürebilir...",
    wallet_not_found: "❌ Cüzdan bulunamadı. Lütfen profilde bağlayın.",
    check_completed: "Kontrol tamamlandı",
    added_to_portfolio: "Portföye eklendi",
    no_transactions_found: "İşlem bulunamadı",
    target_wallet: "Hedef cüzdan",
    checking_old_transactions: "Eski işlemler kontrol ediliyor",
    wallet_not_found: "Cüzdan bulunamadı",
    check_completed: "Kontrol tamamlandı",
    found_transactions: "İşlemler bulundu",
    already_added: "zaten eklendi",
    added: "eklendi",
    summary: "Özet",
    new_added: "Yeni eklendi",
    already_exist: "Zaten var",
    total_checked: "Toplam kontrol edildi",
    check_transactions_error: "İşlem kontrol hatası",
    transactions: "işlem",
    my_portfolio: "💼 Portföyüm",
    your_active_pool: "<b>Havuzdaki aktif payınız</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>Havuzdaki aktif payınız:</b> ${amount}$`,
    your_personal_share: "Havuzdaki toplam payınız",
    level_activation_title: "Ortaklık programı seviye aktifleştirme",
    check_transactions_error:
      "⚠️ İşlemler kontrol edilirken hata. Lütfen daha sonra deneyin.",
    affiliate_network_header: (username) =>
      `👥 <b>Ortaklık ağınız, ${username}</b>`,
    affiliate_network_description:
      "17 ekibiniz seviyesi ve referanslarınızın karlılığından her seviyeden gelir elde etme",
    level_percentages:
      `<b>• 1. sev</b> - %20\n` +
      `<b>• 2. sev</b> - %10\n` +
      `<b>• 3-7. sev</b> - %5\n` +
      `<b>• 8-10. sev</b> - %3\n` +
      `<b>• 11-17. sev</b> - %1`,
    level_activation_requirements:
      "Her seviyeyi aktifleştirmek için havuzdaki payınız <b>Seviye no * 100$</b> karşılamalı",
    all_levels_activation_requirement:
      "Tüm seviyeleri aktifleştirmek için, kişisel havuz payınız = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>Kişisel havuz payınız:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Aktifleştirilen seviyeler:</b> ${count}/17`,
    level_statistics: "📊 <b>Seviyelere göre istatistik:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Sev. ${level}: ${count} kişi | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Sev. ${level}: Referans yok`,
    no_level_data: "<i>Henüz seviye verisi yok</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Toplam:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 Ortaklarım",
    my_team: "🧏‍♂️ Ekibim",
    ref_link: "🔗 Ref bağlantı",
    enable_levels: "🔓 Seviyeleri Aç",
    search: "🔍 Ara",
    statistics: "📈 İstatistik",
    affiliate_error: "Ortaklık hatası: {error}",
    affiliate_load_error: "⚠️ Ortaklık programı yüklenirken hata",
    buy_subscription: "💰 Abonelik satın alma",
    subscription_text:
      "Abonelik satın almak için kripto botuna başvurun:\n\nAbonelik ödemesinden sonra referans programına ve diğer özel özelliklere erişim elde edeceksiniz.",
    go_to_cryptobot: "📲 Kripto botuna git",
    check_subscription_status: "🔄 Aboneliği kontrol et",
    subscription_active:
      "✅ Aboneliğiniz aktif! Artık referans davet edebilirsiniz.",
    subscription_inactive:
      "❌ Abonelik henüz aktif değil. Lütfen ödemeyi tamamlayın veya destekle iletişime geçin.",
    subscription_check_error: "❌ Abonelik durumu kontrol edilirken hata",
    data_not_found: "Veri bulunamadı. Portföyü yenileyin",
    last_page: "Bu son sayfa",
    first_page: "Bu ilk sayfa",
    page_load_error: "Sayfa yüklenirken hata",
    edit_message_error:
      "Mesaj düzenlenemedi, yeni gönderiliyor:",
    refresh: "🔄 Yenile",
    referral_access_subscription:
      "❌ <b>Referans programına abonelikle erişim</b>\n\n✅ Referans bağlantınızı yapılandırmak ve botunuzu aktifleştirmek için 10$/ay abonelik satın almanız gerekiyor.",
    referral_invite_text:
      "👋🏻 Merhaba! TOP-1 borsasından pasif gelir elde etmek istiyorsan, benim bağlantımdan katıl 👆",
    your_referral_link: "Referans bağlantınız",
    referral_invite_description:
      "💡 Arkadaşlarınızı davet edin ve onların havuzdaki aktif paylarından gelir elde edin!",
    share_link: "📢 Bağlantıyı paylaş",
    buy_subscription: "💳 Abonelik Satın Al (10$/ay)",
    referral_link_error: "❌ Referans bağlantısı yüklenirken hata",
    link_copied: "📋 Referans bağlantısı kopyalandı:",
    share_with_friends: "Artık onu arkadaşlarınızla paylaşabilirsiniz!",
    link_settings_title: "⚙️ Bağlantı ayarlarınız",
    link_settings_description: "Bu bağlantılar referanslarınız tarafından görülecek:",
    choose_link_to_change: "💡 Değiştirmek için bir bağlantı seçin:",
    change_video: "🎥 Videoyu değiştir",
    cancel_input: "❌ Girişi iptal et",
    user_not_found: "❌ Kullanıcı bulunamadı",
    link_access_subscription: "❌ Bağlantı ayarlarına abonelikle erişim",
    subscription_required:
      "✅ Referans bağlantınızı yapılandırmak ve botunuzu aktifleştirmek için 10$/ay abonelik satın almanız gerekiyor.",
    buy_subscription_button: "💳 Abonelik Satın Al (10$/ay)",
    payment_pending: "⌛ Abonelik ödemesi bekleniyor",
    payment_pending_description:
      "Aboneliğiniz ödeme onayı bekliyor. Eğer zaten ödeme yaptıysanız, durumu kontrol etmek için aşağıdaki butona tıklayın.",
    check_payment: "🔄 Ödemeyi Kontrol Et",
    create_new_payment: "💳 Yeni Ödeme Oluştur",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ Tüm bağlantılar sistem ayarlarına sıfırlandı",
    reset_links_error: "❌ Bağlantılar sıfırlanırken hata",
    subscription_payment_title: "💳 Bağlantı ayarları için abonelik ödemesi",
    subscription_price: "Fiyat: ",
    subscription_duration: "Geçerlilik süresi: ",
    pay_via_cryptobot: "🔗 Kripto botu ile öde",
    check_payment: "🔄 Ödemeyi Kontrol Et",
    cancel: "❌ İptal",
    subscription_payment_error:
      "⚠️ Abonelik oluşturulurken bir hata oluştu. Lütfen daha sonra deneyin.",
    subscription_description: "Bağlantı ayarları aboneliği (1 ay)",
    no_data_to_display: "❌ Görüntülenecek veri yok",
    nothing_found_for_query: "Sorgu için",
    no_referrals_on_levels: "Henüz seviyelerde referansınız yok",
    invested_in_pool: "Havuza gönderildi",
    found_referrals: "Referanslar bulundu",
    subscription_activated: "✅ Abonelik başarıyla aktifleştirildi!",
    subscription_activated_description:
      "🎉 Artık bağlantı ayarları ve ortaklık sistemi tüm özelliklerine erişiminiz var.",
    payment_processing: "⌛ Ödeme işleniyor. Daha sonra kontrol etmeyi deneyin.",
    invoice_expired: "❌ Fatura süresi doldu.",
    payment_not_found: "❌ Ödeme bulunamadı veya iptal edildi.",
    payment_check_error: "⚠️ Ödeme kontrolü sırasında hata.",
    payment_check_error_description:
      "Lütfen daha sonra deneyin veya destekle iletişime geçin.",
    try_again: "🔄 Tekrar Dene",
    new_payment: "💳 Yeni Ödeme",
    enter_presentation_link: "📊 Sunum bağlantısını girin:",
    enter_video_link: "🎥 Video talimat bağlantısını girin:",
    enter_official_link: "🌐 Resmi site bağlantısını girin:",
    referral_stats: "📊 Seviyelere göre istatistik",
    level: "Seviye",
    referrals_count: "👥 Referanslar:",
    total_invested: (amount) => `💰 Havuza gönderildi: ${amount} USDT`,
    search_referrals_prompt: "🔍 Aramak için bir kullanıcı adı girin:",
    no_referrals: "👥 Henüz referansınız yok",
    level_not_found: "❌ Seviye bulunamadı",
    your_referrals: "👥 Referanslarınız",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Sayfa ${current} / ${total}`,
    no_referrals_on_level: "Bu seviyede henüz referans yok",
    back_to_affiliate: "◀️ Ortaklık programına geri dön",
    your_personal_partners: "Kişisel ortaklarınız",
    id: "ID",
    too_many_partners_use_team:
      "Görüntülenecek çok fazla ortak var. Tam liste için 'Ekibim' bölümünü kullanın.",
    total_personal_partners: "Toplam kişisel ortak",
    no_personal_partners_yet: "Henüz kişisel ortağınız yok",
    invite_friends_tip:
      "💡 Kişisel ortaklarınız olmaları için arkadaşlarınızı kendi referans bağlantınızla davet edin!",
    my_team: "🧏‍♂️ Ekibim",
    personal_partners_error: "❌ Kişisel ortaklar yüklenirken hata",
    level_activation_title: "Ortaklık programı seviye aktifleştirme",
    your_pool_share: "Havuzdaki payınız",
    new_activated_levels: "Yeni aktifleştirilen seviyeler",
    activation_status: "Seviye aktifleştirme durumu",
    how_to_activate: "Nasıl aktifleştirilir",
    levels_activate_automatically:
      "Seviyeler gerekli yatırım tutarına (seviye başına 100$) ulaşıldığında otomatik olarak aktifleştirilir",
    to_activate_level: "Seviyeyi aktifleştirmek için",
    needs_more: "daha fazla gerekli",
    refresh_status: "🔄 Durumu yenile",
    levels_check_error: "❌ Seviyeler kontrol edilirken hata",
    settings_title:
      "⚙️ Ayarlar\n\nBuradan bağlantılarınızı yapılandırabilirsiniz\n\nBir işlem seçin:",
    link_settings: "⚙️ Bağlantı Ayarları",
    contact_mentor: "🙆‍♂️ Danışmanla İletişim",
    community_chat: "💬 Topluluk Sohbeti",
    support_service: "⚠️ Destek Servisi",
    language_settings: "🌐 Dil / Language",
    language_changed_el: "✅ Dil Türkçe olarak değiştirildi",
    language_changed_ge: "✅ Language changed to Greek",
    language_changed_ka: "✅ ენა შეიცვალა ქართულად",
    language_changed_en: "✅ Language changed to English",
    language_changed_fr: "✅ Language changed to French",
    language_changed_id: "✅ Language changed to Indonesia",
    language_changed_es: "✅ Language changed to Español",
    language_change_error: "❌ Dil değiştirilirken hata",
    not_subscribed:
      '❌ Sohbetimize abone olmadınız. Lütfen abone olun ve tekrar "Aboneliği kontrol et"e tıklayın.',
    please_subscribe_to_chat: "Devam etmek için kanalımıza abone olmanız gerekiyor.",
    subscribe_to_chat: "📢 Sohbete Abone Ol",
    check_subscription_btn: "🔄 Aboneliği Kontrol Et",
    subscription_check_error: "Abonelik kontrol hatası",
    wallet_not_configured: "❌ Cüzdan yapılandırılmadı",
    wallet_not_configured: "❌ Cüzdan yapılandırılmadı",
    transaction: "İşlem",
    wallet: "Cüzdan",
    user_not_found: "❌ Kullanıcı sistemde bulunamadı. Lütfen tekrar deneyin.",
    invalid_url_format: "❌ Geçersiz bağlantı formatı",
    subscription_required_for_links:
      "❌ Bağlantı ayarları için aktif abonelik gerekli",
    subscription_required_description:
      "💳 Bağlantılarınızı yapılandırmak için 10$/ay abonelik satın alın",
    buy_subscription_button: "💳 Abonelik Satın Al",
    domain_not_allowed: "❌ Bu bağlantı ekip kursuna yönlendirmiyor",
    domain_not_allowed_description:
      "✅ Doğru formatta bir bağlantı girin veya destek servisiyle iletişime geçin",
    your_domain: "Alan adınız: {domain}",
    support_service: "⚠️ Destek Servisi",
    link_saved_success: "✅ Bağlantı başarıyla kaydedildi!",
    link_save_error: "❌ Bağlantı kaydedilirken hata",
    invalid_referral_link:
      "❌ Geçersiz bağlantı formatı. Lütfen geçerli bir HTTP/HTTPS bağlantısı girin.",
    referral_link_save_error:
      "❌ Bağlantı kaydedilirken hata. Lütfen tekrar deneyin.",
    invalid_investment_amount: "❌ <b>Geçersiz tutar!</b>",
    investment_amount_limits:
      "Minimum tutar: <b>1 USDT</b>\nMaksimum tutar: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Geçerli bir tutarı sayı olarak girin</i>",
    investment_chosen_amount: "🔄 <b>{amount} USDT</b> tutarını seçtiniz.",
    choose_investment_period: "Havuza gönderim süresini seçin:",
    investment_yield: "<b>Sürelere göre karlılık:</b>",
    investment_return_info:
      "<i>Tüm fonlar <b>(USDT tutarı + bonuslar)</b> belirtilen süre sonunda otomatik olarak cüzdanınıza iade edilir</i>",
    select_period: "👇 <b>Havuza gönderim süresini seçin:</b>",
    search_results: '🔍 "{query}" sorgusu için arama sonuçları:',
    levels: "📊 Seviyeler: {levels}",
    sent_to_pool: "💰 Havuza gönderildi: {amount} USDT",
    admin_prize_set: "✅ Ödül ayarlandı: {amount} USDT",
    admin_time_set:
      "✅ Zaman ayarlandı: {startHour}:00'da başlangıç, {durationHours} saat süre",
    admin_funds_returned: "✅ #{roundId}. tur için fonlar iade edildi",
    invalid_round_id: "❌ Geçersiz tur ID",
    admin_error: "❌ Komut yürütülürken hata",
    invalid_wallet_format: "❌ Geçersiz cüzdan adresi formatı.",
    wallet_format_details:
      "✅ Doğru format: 0x + 40 karakter (rakamlar ve A-F harfleri)",
    wallet_wrong_example: "❌ Yanlış örnek: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Adresin BSC ağına (Binance Smart Chain) ait olduğundan emin olun",
    wallet_already_used:
      "❌ Bu cüzdan zaten başka bir kullanıcı tarafından kullanılıyor. Lütfen başka bir cüzdan kullanın.",
    invalid_tx_hash: "❌ <b>Geçersiz TX Hash formatı!</b>",
    tx_hash_format: "TX Hash 0x ile başlamalı ve 64 karakter içermeli.",
    checking_transaction: "🔍 İşlem kontrol ediliyor...",
    transaction_accepted: "✅ <b>İşlem kontrole kabul edildi!</b>",
    transaction_check_time:
      "Bot işlem durumunu 2-5 dakika içinde kontrol edecek.",
    transaction_notification:
      "İşlem onaylandığında bir bildirim alacaksınız.",
    transaction_save_error:
      "❌ İşlem kaydedilirken hata. Lütfen destekle iletişime geçin.",
    use_menu_buttons: "Navigasyon için menü butonlarını kullanın",
    level_activation_title: "Ortaklık programı seviye aktifleştirme",
    your_pool_share: "Havuzdaki payınız",
    new_activated_levels: "Yeni aktifleştirilen seviyeler",
    activation_status: "Seviye aktifleştirme durumu",
    how_to_activate: "Nasıl aktifleştirilir",
    levels_activate_automatically:
      "Seviyeler gerekli yatırım tutarına (seviye başına 100$) ulaşıldığında otomatik olarak aktifleştirilir",
    to_activate_level: "Seviyeyi aktifleştirmek için",
    needs_more: "daha fazla gerekli",
    refresh_status: "🔄 Durumu yenile",
    levels_check_error: "❌ Seviyeler kontrol edilirken hata",
    referrals_title: (level) => `👥 <b>Referanslarınız</b> | <b>Seviye ${level}</b>`,
    no_referrals: "Bu seviyede henüz referans yok",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Sayfa {page} / {total}",
    back_btn: "◀️ Geri",
    select_language: "🌐 <b>Bir dil seçin:</b>",
    current_language: "Mevcut dil: {language}",
    russian: "🇷🇺 Rusça",
    english: "🇺🇸 İngilizce",
    french: "🇫🇷 Fransızca",
    indonesia: "🇮🇩 Endonezce",
    espaniol: "🇪🇸 İspanyolca",
    italy: "🇮🇹 İtalyanca",
    german: "🇩🇪 Almanca",
    georgia: "🇬🇪 Gürcüce",
    greece: "🇬🇷 Yunanca",
    swahilli: "🇰🇪 Kenya Dili",
    turkish: "🇹🇷 Türk",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Ayarlara geri dön",
    total_invested_level: "Havuzdaki kişisel pay",

    // =========================
    // Hatalar ve bildirimler
    // =========================
    error: "❌ Bir hata oluştu, lütfen tekrar deneyin.",
    invalid_address: "❌ Geçersiz adres.",
    access_denied: "⛔ Erişim reddedildi",
    loading: "⏳ Yükleniyor...",
    updated: "Güncellendi",
    enabled: "✅ Açık",
    disabled: "❌ Kapalı",
    turn_on: "🔔 Aç",
    turn_off: "🔕 Kapat",
    description: "Açıklama",
  },
  ge: {referral_reward_notification: "🎉 <b>Λήφθηκε ανταμοιβή σύστασης!</b>\n\n💰 <b>Ποσό:</b> {amount} USDT\n\n💼 Τα κεφάλαια είναι ήδη στον ισολογισμό σας και διαθέσιμα για ανάληψη ή επανεπένδυση.",
    referral_reward_my_portfolio: "💼 Το Πορτφόλιό μου",
    
    missed_referral_reward: "😡 <b>Χαμένη ανταμοιβή σύστασης!</b>\n\n💰 <b>Ποσό:</b> {amount} USDT\n📊 <b>Επίπεδο:</b> {level}\n\n🔐 Ενεργοποιήστε το επίπεδο {level} για να λαμβάνετε ανταμοιβές σύστασης!",
    activate_levels_button: "💼 Ενεργοποίηση Επιπέδων",
    
    // Παρακολούθηση και έλεγχος
    starting_periodic_check: "🔄 Εκκίνηση περιοδικού ελέγχου συναλλαγών σύστασης (κάθε λεπτό)...",
    periodic_check_started: "✅ Εκκίνηση παρακολούθησης πορτοφολιών χρηστών",
    checking_recent_transactions: "⏰ Έλεγχος συναλλαγών του τελευταίου λεπτού: από {time}",
    wallet_check_progress: "🔍 Έλεγχος πρόσφατων συναλλαγών για πορτοφόλι: {wallet}",
    fresh_transaction_found: "🕐 Βρέθηκε πρόσφατη συναλλαγή: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Για πορτοφόλι {wallet} βρέθηκαν {count} πρόσφατες συναλλαγές σύστασης στο τελευταίο λεπτό",
    
    // Αποτελέσματα ελέγχου
    force_check_started: "🔍 Εξαναγκασμένος έλεγχος ΠΡΟΣΦΑΤΩΝ συναλλαγών σύστασης (τελευταίο λεπτό)...",
    no_wallets_for_check: "❌ Δεν υπάρχουν πορτοφόλια χρηστών για έλεγχο",
    wallets_check_summary: "📊 Έλεγχος {count} πορτοφολιών χρηστών από το τελευταίο λεπτό",
    check_results: "📊 Αποτελέσματα ελέγχου τελευταίου λεπτού:",
    wallets_checked: "• Ελεγμένα πορτοφόλια: {count}",
    fresh_transactions_found: "• Πρόσφατες συναλλαγές που βρέθηκαν: {count}",
    successfully_processed: "• Επεξεργάστηκαν επιτυχώς: {count}",
    errors_count: "• Σφάλματα: {count}",
    
    // Επεξεργασία συναλλαγών
    processing_fresh_transaction: "🔍 Επεξεργασία ΠΡΟΣΦΑΤΗΣ συναλλαγής σύστασης:\n- Hash: {hash}\n- Παραλήπτης: {recipient}\n- Ποσό: {amount} USDT\n- Ώρα: {time}",
    transaction_already_processed: "⏭️ Η συναλλαγή {hash} έχει ήδη επεξεργαστεί",
    user_not_found_by_wallet: "❌ Ο χρήστης με πορτοφόλι {wallet} δεν βρέθηκε",
    user_found: "✅ Βρέθηκε χρήστης: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ ΠΡΟΣΦΑΤΗ ανταμοιβή σύστασης επεξεργάστηκε για χρήστη {telegramId}",
    
    // Σφάλματα
    transaction_processing_error: "❌ Σφάλμα επεξεργασίας ΠΡΟΣΦΑΤΗΣ συναλλαγής σύστασης",
    wallet_check_error: "❌ Σφάλμα ελέγχου πορτοφολιού {wallet}",
    periodic_check_error: "❌ Σφάλμα περιοδικού ελέγχου: {error}",
    force_check_error: "❌ Σφάλμα εξαναγκασμένου ελέγχου πρόσφατων συναλλαγών: {error}",
    
    // Ειδοποιήσεις διαχειριστή
    bot_not_available: "❌ Το bot δεν είναι διαθέσιμο για αποστολή ειδοποιήσεων",
    user_blocked_bot: "🚫 Ο χρήστης {telegramId} απέκλεισε το bot",
    user_marked_blocked: "✅ Ο χρήστης {telegramId} σημειώθηκε ως αποκλεισμένος",
    
    // Διαδικασία ανταμοιβής
    referral_reward_start: "🔔 ΕΝΑΡΞΗ processReferralRewardEnhanced:\n- Πορτοφόλι: {wallet}\n- Ποσό: {amount} USDT\n- TX Hash: {hash}\n- Από: {from}\n- Χρονική σήμανση: {time}",
    transaction_recorded: "✅ Η συναλλαγή καταγράφηκε στη βάση δεδομένων",
    balance_updated: "✅ Ο ισολογισμός χρήστη ενημερώθηκε +{amount} USDT",
    referral_reward_db_success: "✅ Η ανταμοιβή σύστασης επεξεργάστηκε επιτυχώς στη βάση δεδομένων",
    sending_user_notification: "🔔 Αποστολή ειδοποίησης στον χρήστη {telegramId}",
    user_no_telegram_id: "⚠️ Ο χρήστης {userId} δεν έχει telegram_id",
    database_overflow_error: "⚠️ Σφάλμα υπερχείλισης αριθμητικού πεδίου, δοκιμή με μικρότερη ακρίβεια",
    retry_failed: "❌ Η επανάληψη απέτυχε επίσης",
    referral_reward_end: "✅ ΤΕΛΟΣ processReferralRewardEnhanced για πορτοφόλι {wallet}",
    
    // Απλές ανταμοιβές
    simple_reward_processing: "🔔 Επεξεργασία ανταμοιβής σύστασης: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Η ανταμοιβή σύστασης καταγράφηκε για τον χρήστη {telegramId}",
    
    // Ειδοποιήσεις
    notification_sent: "✅ Ειδοποίηση ανταμοιβής σύστασης στάλθηκε στον χρήστη {telegramId}",
    notification_error: "❌ Σφάλμα αποστολής ειδοποίησης στον χρήστη {telegramId}: {error}",
    
    // Ενημερώσεις πορτοφολιών
    wallets_updater_started: "✅ Εκκίνηση παρακολούθησης πορτοφολιών χρηστών",
    
    // Ορφανές συναλλαγές
    orphan_transaction_processing: "🔍 Επεξεργασία ορφανής συναλλαγής σύστασης για χρήστη {userId}",
    missed_reward_notification_sent: "⚠️ Ειδοποίηση χαμένης ανταμοιβής στάλθηκε για επίπεδο {level}",
    orphan_transaction_error: "❌ Σφάλμα επεξεργασίας ορφανής συναλλαγής",
    
    // Γενικά
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Βιβλιοθήκη Επιμελητών",
    no_curators_data: "Δεν υπάρχουν δεδομένα επιμελητών για το επίπεδο {level}",
    curators_library_explanation: "Εδώ μπορείτε να δείτε τους χορηγούς των συνεργατών σας και τις ομάδες τους",
    statistics: "Στατιστικά",
    total_curators: "Συνολικοί επιμελητές",
    total_referrals: "Συνολικοί συνεργάτες",
    average_per_curator: "Μέσος όρος ανά επιμελητή",
    sponsor: "Χορηγός",
    partners: "Συνεργάτες",
    more: "περισσότερα",
    incomplete_registration_title: "Δεν έχετε ολοκληρώσει την εγγραφή στο bot!",
    incomplete_registration_message: "Ολοκληρώστε την εγγραφή για να αρχίσετε να κερδίζετε κέρδη και να μην χάσετε ευκαιρίες.",
    complete_registration_to_earn: "Ολοκληρώστε την εγγραφή και αρχίστε να κερδίζετε!",
    complete_registration_to_earn_start: "🚀 <b>Απλά στείλτε την εντολή</b> <code>/start</code> <b>για να συνεχίσετε την εγγραφή!</b>",
    invalid_tx_hash_format:
      "❌ <b>Μη έγκυρη μορφή TX Hash</b>\n\nΠαρακαλώ εισάγετε έγκυρο hash συναλλαγής (64 χαρακτήρες, ξεκινά με 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Ελέγχουμε τη συναλλαγή στο blockchain...</b>\n\nΛαμβάνουμε πληροφορίες για το ποσό και την ημερομηνία συναλλαγής...",
    transaction_check_error: "❌ <b>Σφάλμα ελέγχου συναλλαγής</b>\n\n{error}",
    blockchain_check_error:
      "❌ Προέκυψε σφάλμα κατά τον έλεγχο της συναλλαγής στο blockchain",
    transaction_found_details:
      "✅ <b>Βρέθηκε συναλλαγή!</b>\n\n💰 <b>Ποσό:</b> {amount} USDT\n📅 <b>Ημερομηνία:</b> {date}\n\n⏰ <b>Επιλέξτε περίοδο αποστολής στην πισίνα:</b>",
    invalid_period_range:
      "❌ <b>Μη έγκυρη περίοδος</b>\n\nΠαρακαλώ εισάγετε αριθμό από 1 έως 28 ημέρες",
    period_processing_error:
      "❌ Προέκυψε σφάλμα κατά την επεξεργασία της περιόδου",

    // Периоды
    period_1_day: "1 ημέρα",
    period_7_days: "7 ημέρες",
    period_14_days: "14 ημέρες",
    period_28_days: "28 ημέρες",
    custom_period: "📅 Προσαρμοσμένη περίοδος",

    // Админка
    bot_disabled_success: "🔴 Το bot απενεργοποιήθηκε για χρήστες",
    bot_disable_error: "❌ Σφάλμα: {error}",
    admin_panel: "🔧 Πίνακας διαχείρισης",
    invalid_prize_amount: "Μη έγκυρο ποσό βραβείου",
    prize_set_success: "✅ Βραβείο ορίστηκε: {amount} USDT",
    prize_sent_success:
      "✅ TX hash αποθηκεύτηκε. Το βραβείο στάλθηκε στη σύμβαση.",
    prize_send_error: "❌ Σφάλμα: {error}",
    winner_prize_notification:
      "🎯 Τα κέρδη σας {amount} USDT στάλθηκαν στη σύμβαση!\n\n⏰ Θα λάβετε το κέρδος σε 28 ημέρες.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Ο τομέας δεν επιτρέπεται</b>\n\n{domain_not_allowed_description}\n\n<b>Ο τομέας σας:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Ο σύνδεσμος σας συνεργάτη έχει επισυναφθεί με επιτυχία!\n\n🏁 Βρίσκεστε στην τελική ευθεία! Για ευκολία στην επικοινωνία, να κάνετε ερωτήσεις και να γνωρίσετε την ομάδα, πρέπει να μπείτε στην ομάδα chat μας.\n\n1. Μεταβείτε σε αυτήν την ομάδα: @BitnestRus\n\n2. Πατήστε το κουμπί 'Γίνεται Μέλος της Ομάδας'\n\n3. Φροντίστε να ενεργοποιήσετε τις ειδοποιήσεις\n\n4. Πατήστε το κουμπί παρακάτω 'Έχω Γίνει Μέλος'\n\n👇🏼 Ή χρησιμοποιήστε το κουμπί παρακάτω για να μεταβείτε αυτόματα στην ομάδα chat μας",
    chat_link: "📢  Γίνεται Μέλος της Ομάδας",
    disclaimer:
      "✅ Αγαπητέ χρήστη, αυτό το σύστημα έχει σχεδιαστεί για την εκπαίδευση και την ενημέρωση νέων χρηστών που δεν έχουν αλληλεπιδράσει προηγουμένως με το σύστημα Bitnest\n\n🤔 Παρακαλώ πείτε μας, έχετε εγγραφεί στο παρελθόν;\n\n1. Κάντε κλικ (ΟΧΙ) - εάν δεν έχετε ακόμη λογαριασμό στο σύστημα και θέλετε να ολοκληρώσετε την εκπαίδευση και να γίνετε μέλος της ομάδας μας\n\n2. Κάντε κλικ (ΝΑΙ) - εάν έχετε ήδη λογαριασμό στο σύστημα και έχετε στείλει USDT σε κυκλοφορία\n\nΟι υπηρεσίες αυτού του bot παρέχονται μόνο σε νέους χρήστες που δεν ήταν στο σύστημα πριν και πάτησαν το κουμπί ✅ ΟΧΙ",
    disclaimer_no: "✅ ΟΧΙ, ΕΙΜΑΙ ΝΕΟΣ ΣΥΜΜΕΤΕΧΩΝ",
    disclaimer_yes: "⛔️ ΝΑΙ, ΕΙΜΑΙ ΜΕΛΟΣ ΑΛΛΗΣ ΟΜΑΔΑΣ",
    block_confirmation_title: "Επιβεβαίωση",
    block_confirmation_message: "Εάν είστε μέλος άλλης ομάδας, επικοινωνήστε με τον επιμελητή σας.\n\nΕίστε σίγουρος ότι θέλετε να μπλοκάρετε τον λογαριασμό σας;",
    back_button: "◀️ Πίσω",
    confirm_block_button: "✅ Ναι, μπλοκάρισμα",
    account_blocked_message: "🚫 <b>Ο λογαριασμός μπλοκαρίστηκε</b>\n\nΟ λογαριασμός σας έχει μπλοκαριστεί κατόπιν αιτήματός σας.\n\nΑν αυτό συνέβη από λάθος, επικοινωνήστε με την υποστήριξη @BitnestRusSupport.",
    account_blocked:
      "❌ Δυστυχώς, οι υπηρεσίες αυτού του bot παρέχονται μόνο σε νέους χρήστες. Ο λογαριασμός σας δεν είναι ενεργός. Για οποιεσδήποτε ερωτήσεις @BitnestRusSupport",
    please_try_again: "Παρακαλώ δοκιμάστε ξανά",
    add_custom_transaction: "➕ Προσθήκη συναλλαγής",
    adding_custom_transaction: "🔗 <b>Προσθήκη της συναλλαγής σας</b>",
    enter_tx_hash_prompt:
      "Παρακαλώ εισάγετε το <b>TX Hash</b> της συναλλαγής σας:",
    transaction_requirements:
      "• Πρέπει να εκτελεστεί στο δίκτυο BSC (Binance Smart Chain)\n• Πρέπει να είναι συναλλαγή USDT",
    tx_hash_example:
      `📝 <b>Παράδειγμα:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nΔείτε τις συναλλαγές σας στην πισίνα <a href="https://bscscan.com/address/{wallet}#tokentxns">Μετάβαση</a>`,
    enter_amount_prompt: "💰 <b>Εισάγετε το ποσό της συναλλαγής σε USDT:</b>",
    amount_example: "Παράδειγμα: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Επιλέξτε περίοδο επένδυσης:</b>",
    verifying_transaction: "🔍 <b>Επαλήθευση συναλλαγής στο blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nΠοσό: {amount} USDT\nΠερίοδος: {period} ημέρες",
    please_wait: "Παρακαλώ περιμένετε...",
    transaction_already_exists:
      "Αυτή η συναλλαγή έχει ήδη προστεθεί στο σύστημα",
    transaction_not_found: "Η συναλλαγή δεν βρέθηκε",
    transaction_not_confirmed: "Η συναλλαγή δεν επιβεβαιώθηκε ή απέτυχε",
    transaction_wrong_sender:
      "Η συναλλαγή στάλθηκε από λάθος πορτοφόλι. Το πορτοφόλι σας: {userWallet}, αποστολέας στη συναλλαγή: {txFrom}",
    transaction_wrong_receiver:
      "Η συναλλαγή στάλθηκε σε λάθος πορτοφόλι συστήματος. Ο παραλήπτης πρέπει να είναι: {systemWallet}",
    transaction_amount_mismatch:
      "Το ποσό δεν ταιριάζει. Στο blockchain: {blockchainAmount} USDT, εισάγατε: {enteredAmount} USDT",
    transaction_not_usdt: "Αυτή δεν είναι συναλλαγή USDT",
    transaction_decode_error:
      "Αποτυχία αποκωδικοποίησης δεδομένων συναλλαγής USDT",
    blockchain_error: "Σφάλμα κατά την επαλήθευση στο blockchain: {error}",
    transaction_added_success: "✅ <b>Η συναλλαγή προστέθηκε με επιτυχία!</b>",
    investment_details: "📊 <b>Λεπτομέρειες επένδυσης:</b>",
    investment_amount: "• Ποσό: {amount} USDT",
    investment_period: "• Περίοδος: {period} ημέρες",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Κερδοφορία: {profit}%",
    investment_added_to_portfolio:
      "💼 Η επένδυση προστέθηκε στο χαρτοφυλάκιό σας.",
    transaction_add_error: "❌ <b>Σφάλμα προσθήκης συναλλαγής</b>",
    error_reason: "Αιτία: {error}",
    your_investment_portfolio_add: "➕ Προσθήκη συναλλαγής",
    language_changed_success: "✅ Η γλώσσα άλλαξε με επιτυχία σε Ελληνικά!",
    welcome: `👋🏼 Καλώς ήρθες <b>{username}</b> - αυτό είναι το ομαδικό εργαλείο της κοινότητάς μας. Αυτό το bot θα σας επιτρέψει να κατανοήσετε το σύστημα βήμα προς βήμα και να γίνετε μέλος της ομάδας μας!\n\n🎥 Σας έχουμε ετοιμάσει βηματικές βίντεο-οδηγίες, που εξηγούν και δείχνουν ολόκληρη τη διαδικασία\n\n👇🏼 Για να ξεκινήσετε την εκμάθηση και να αρχίσετε να βλέπετε το πρώτο σας αποτέλεσμα, πατήστε το κουμπί '🎓 Ξεκινήστε την Εκπαίδευση'`,
    welcome_back: "👋 Έχετε ήδη ολοκληρώσει την εκπαίδευση! Καλώς ήρθατε πάλι!",
    education_title: "🎓 Εκπαιδευτικό Υλικό\nΕπιλέξτε ένα θέμα:",
    finish: "✅ Η εκπαίδευση ολοκληρώθηκε!",
    wallet_installation:
      "📲 <b>Εγκατάσταση Πορτοφολιού</b>\nΚατεβάστε και εγκαταστήστε ένα από τα υποστηριζόμενα πορτοφόλια.",
    ask_wallet_address:
      "👍🏼 Εξαιρετική επιλογή! Ξεκινάμε την εκπαίδευση:\n\n💵 Το πρώτο πράγμα στον κόσμο του Web3 και του DeFi είναι να έχεις ένα προσωπικό κρυπτονομισματικό πορτοφόλι, τώρα ακριβώς θα το εγκαταστήσουμε:\n\n1. Μεταβείτε στην επίσημη ιστοσελίδα της εφαρμογής <b>MetaMask</b>\n\n2. Εγκαταστήστε την εφαρμογή στο τηλέφωνό σας\n\n3. Δημιουργήστε ένα πορτοφόλι και φροντίστε να σημειώσετε τη φράση-κλειδί (seed phrase) σε ασφαλές μέρος\n\n4. Ρυθμίστε το δίκτυο BSC - Binance Smart Chain (BEP20)\n\n5. Αντιγράψτε τη δημόσια διεύθυνση του πορτοφολιού σας 0x.............\n\n6. Στείλτε αυτή τη διεύθυνση ως μήνυμα στο παρακάτω πεδίο 👇🏼",
    enter_wallet: `🥳 Συγχαρητήρια, το πορτοφόλι σας έχει συνδεθεί με επιτυχία!\n\n📝 Σε αυτό το βήμα, πρέπει να ολοκληρώσετε την εγγραφή σας στον επίσημο ιστότοπο του Bitnest (δείτε το βίντεο)\n\n1. Αντιγράψτε αυτόν τον σύνδεσμο \n\n<code>{referral_link_bitnest}</code>\n\n και ανοίξτε τον στον εσωτερικό browser του πορτοφολιού σας\n\n2. Πάνω δεξιά, πατήστε 'Connect'\n\n3. Επιβεβαιώστε την εξουσιοδότηση στον ιστότοπο στο pop-up παράθυρο του πορτοφολιού σας\n\n<i><b>*Αν ο ιστότοπος δεν ανοίγει, τότε ενεργοποιήστε το πρόγραμμα με τα 3 γράμματα (που θα σας επιτρέψει να μπείτε στον ιστότοπο)</b></i>\n\n👇🏼 Ή χρησιμοποιήστε τα παρακάτω κουμπιά για αυτόματη μετάβαση στο πορτοφόλι και άνοιγμα της απαιτούμενης σελίδας`,
    your_wallet:
      "💼 Το Κρυπτονομισματικό Πορτοφόλι Σας\n\n📌 Διεύθυνση στο δίκτυο (BEP20)",
    install_wallet:
      "👍🏼 Εξαιρετική επιλογή! Ξεκινάμε την εκπαίδευση:\n\n💵 Το πρώτο πράγμα στον κόσμο του Web3 και του DeFi είναι να έχεις ένα προσωπικό κρυπτονομισματικό πορτοφόλι, τώρα ακριβώς θα το εγκαταστήσουμε:\n\n1. Μεταβείτε στην επίσημη ιστοσελίδα της εφαρμογής <b>MetaMask</b>\n\n2. Εγκαταστήστε την εφαρμογή στο τηλέφωνό σας\n\n3. Δημιουργήστε ένα πορτοφόλι και φροντίστε να σημειώσετε τη φράση-κλειδί (seed phrase) σε ασφαλές μέρος\n\n4. Ρυθμίστε το δίκτυο BSC - Binance Smart Chain (BEP20)\n\n5. Αντιγράψτε τη δημόσια διεύθυνση του πορτοφολιού σας 0x.............\n\n6. Στείλτε αυτή τη διεύθυνση ως μήνυμα στο παρακάτω πεδίο 👇🏼",
    loading_balance: "⏳ Ανακτώνται πληροφορίες για το υπόλοιπο...",
    refresh: "🔄 Ανανέωση",
    bnb_balance: "Υπόλοιπο:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Υπόλοιπο Token",
    wallet_not_configured: "❌ Το πορτοφόλι δεν έχει ρυθμιστεί",
    send_usdt: "💸 Αποστολή USDT",
    check_my_investment: "💸 Αποστολή USDT", // Σημείωση: Αυτό είναι ίδιο με το παραπάνω. Εάν προορίζεται για διαφορετική λειτουργία, ίσως χρειαστεί διόρθωση.
    error_amount_not_selected: "❌ Σφάλμα: δεν έχει επιλεγεί ποσό",
    error_wallet_not_configured: "❌ Σφάλμα: το πορτοφόλι δεν έχει ρυθμιστεί",
    back_to_amount_selection: "◀️ Πίσω στην επιλογή ποσού",
    configure_wallet: "⚙️ Ρύθμιση Πορτοφολιού",
    your_mentor: (mentor) => `Ο μέντοράς σας: ${mentor}`,
    write_to_mentor: "✉️ Γράψτε στον μέντορα",
    what_is_bitnest:
      "🏗 <b>Τι είναι το BitNest</b>\nΔιαφανείς λειτουργίες, έλεγχος των κεφαλαίων σας.",
    defi_basics:
      "📊 Βασικά του DeFi.\nΣτη συνέχεια — πώς λειτουργεί η επένδυση σε pools.",
    liquidity_pool_text:
      "💎 Πool Ρευστότητας\n\n💵 Εδώ μπορείτε να στείλετε USDT στο pool ρευστότητας και να λαμβάνετε μπόνους.\n\nΕπιλέξτε ενέργεια:",
    my_investments_empty: "📊 Δεν έχετε επενδύσεις ακόμα.",
    investment_saved: "✅ Τα δεδομένα αποθηκεύτηκαν",
    investment_return_received: (amount) =>
      `Σας πιστώθηκε η κυκλοφορία σας <b>${amount}$</b>`,
    congrats_profit: "Συγχαρητήρια για την απόκτηση κέρδους!",
    referral_reward_received: "Λάβατε επιβράβευση παραπομπής!",
    back_to_main_menu: "🏠 Στο κύριο μενού",
    user: "Χρήστης",
    amount: "Ποσό",
    congrats_referral_earned: "Συγχαρητήρια! Κερδίσατε επιβράβευση παραπομπής!",
    balance_replenished: (amount) =>
      `Το υπόλοιπό σας αναπληρώθηκε κατά ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Λάβατε επιβράβευση παραπομπής ${amount}`,
    you_have_inactive_levels: "Έχετε μη ενεργοποιημένα επίπεδα!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Αν στείλετε ${amount} USDT μπορείτε να ενεργοποιήσετε τα επίπεδα: ${levels}`,
    activate_levels_to_earn:
      "Ενεργοποιήστε τα επίπεδα για να λαμβάνετε έσοδα από τους παραπεμπόμενους!",
    new_levels_activated: (levels) => `Νέα ενεργοποιημένα επίπεδα: ${levels}`,
    now_earn_from_levels:
      "Τώρα λαμβάνετε έσοδα από αυτά τα επίπεδα της ομάδας σας!",
    invalid_tx_hash_contact_support:
      "❌ Μη έγκυρο hash συναλλαγής. Παρακαλώ επικοινωνήστε με την υποστήριξη.",
    congrats_liquidity_pool_success:
      "Συγχαρητήρια! Η κατάθεσή σας στο pool ρευστότητας ολοκληρώθηκε με επιτυχία!",
    transaction_details: "Λεπτομέρειες Συναλλαγής",
    block: "Μπλοκ",
    period: "Περίοδος",
    days: "ημέρες",
    not_specified: "δεν καθορίστηκε",
    level_deactivated_title: "Το επίπεδο απενεργοποιήθηκε",
    level: "Επίπεδο",
    has_been_deactivated: "έχει απενεργοποιηθεί",
    liquidity_pool_completed_reason:
      "Η κατάθεσή σας στο pool ρευστότητας ολοκληρώθηκε με επιτυχία!",
    go_to_portfolio_for_details:
      'Μεταβείτε στο "Πορτοφόλι μου" για λεπτομέρειες',
    total_return: "Συνολικό ποσό επιστροφής",
    return_date: "Ημερομηνία επιστροφής",
    error_updating_pool_status:
      "❌ Σφάλμα κατά την ενημέρωση της κατάστασης της κατάθεσης στο pool. Επικοινωνήστε με την υποστήριξη.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Η συναλλαγή δεν βρέθηκε μετά από πολλές προσπάθειες.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Πιθανές αιτίες:\n` +
      `• Η συναλλαγή δεν έχει ακόμα επιβεβαιωθεί από το δίκτυο\n` +
      `• Μη έγκυρο TX Hash\n` +
      `• Προβλήματα με το δίκτυο BSC\n\n` +
      `Παρακαλώ ελέγξτε το TX Hash και δοκιμάστε ξανά ή επικοινωνήστε με την υποστήριξη.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Η συναλλαγή στάλθηκε σε λάθος διεύθυνση!\n\n` +
      `▸ Διεύθυνση που ελήφθη: ${actualTo}\n` +
      `▸ Αναμενόμενη διεύθυνση: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Παρακαλώ βεβαιωθείτε ότι στέλνετε USDT στη σωστή διεύθυνση του pool.`,
    transaction_not_confirmed: (status) =>
      `❌ Η συναλλαγή δεν επιβεβαιώθηκε. Κατάσταση: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Παρακαλώ ελέγξτε την κατάσταση της συναλλαγής στο BscScan και επικοινωνήστε με την υποστήριξη αν χρειαστεί.",
    error_checking_transaction:
      "❌ Σφάλμα κατά τον έλεγχο της συναλλαγής. Δοκιμάστε αργότερα ή επικοινωνήστε με την υποστήριξη.",
    investment_confirmation:
      `💰 <b>Επιβεβαίωση Κατάθεσης στο Pool</b>\n\n` +
      `📊 <b>Λεπτομέρειες Συναλλαγής:</b>\n` +
      `▸ Ποσό: <b>{amount} USDT</b>\n` +
      `▸ Περίοδος: <b>{period} ημέρες</b>\n` +
      `▸ Απόδοση: <b>{profitPercent}%</b>\n` +
      `▸ Αναμενόμενο Κέρδος: <b>{expectedProfit} USDT</b>\n` +
      `▸ Συνολικό Ποσό Επιστροφής: <b>{totalReturn} USDT</b>\n` +
      `▸ Ημερομηνία Επιστροφής: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Οδηγίες Αποστολής:</b>\n\n` +
      `1. Ανοίξτε την εφαρμογή MetaMask\n\n` +
      `2. Μεταβείτε στον επίσημο ιστότοπο του Bitnest\n\n` +
      `3. Πάνω δεξιά πατήστε <b>'Connect'</b> - <i>(αν βλέπετε το εικονίδιο του πορτοφολιού, προχωρήστε στο επόμενο βήμα)</i>\n\n` +
      `4. Πατήστε στο εικονίδιο του πορτοφολιού και μεταβείτε στην ενότητα Loop (Κύκλωμα)\n\n` +
      `5. Εισάγετε το ποσό κατάθεσης\n\n` +
      `6. Επιλέξτε τη διάρκεια της κατάθεσης\n\n` +
      `7. Πατήστε το κουμπί 'Circulation' (Κυκλοφορία)\n\n` +
      `8. Επιβεβαιώστε την κατάθεση στον ιστότοπο στο pop-up παράθυρο του πορτοφολιού σας\n\n` +
      `👇🏼 Ή χρησιμοποιήστε τα παρακάτω κουμπιά για αυτόματη μετάβαση στο πορτοφόλι και άνοιγμα της απαιτούμενης σελίδας`,
    send_metamask_mobile: "🦊 Αποστολή - MetaMask 📲",
    transaction_search_timer:
      "⚠️ Αναμένουμε την κατάθεσή σας, οι οδηγίες είναι παραπάνω\n\n<b>🔎 Μετά την αποστολή, θα ξεκινήσει η αναζήτηση της συναλλαγής ...</b>\n⏰ <b>Προθεσμία για την αποστολή και αναζήτηση της συναλλαγής σας:</b> 20:00 λεπτά...\n\n",
    cancel_search: "❌ Ακύρωση αναζήτησης",
    failed_delete_timer_message:
      "Δεν ήταν δυνατή η διαγραφή του μηνύματος με το χρονόμετρο: {error}",
    investment_details_base:
      `💰 <b>Επιβεβαίωση Κατάθεσης στο Pool</b>\n\n` +
      `📊 <b>Λεπτομέρειες Συναλλαγής:</b>\n` +
      `▸ Ποσό: <b>{amount} USDT</b>\n` +
      `▸ Περίοδος: <b>{period} ημέρες</b>\n` +
      `▸ Κατάσταση: <b>Ακυρώθηκε</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Η αναζήτηση συναλλαγής ακυρώθηκε από τον χρήστη</b>",
    failed_update_message:
      "Αδυναμία ενημέρωσης μηνύματος, αποστέλλεται νέο: {error}",
    transaction_search_cancelled_log:
      "✅ Η αναζήτηση συναλλαγής ακυρώθηκε για τον χρήστη {userId}",
    no_active_transaction_search: "❌ Δεν βρέθηκε ενεργή αναζήτηση συναλλαγών",
    error_cancelling_search: "❌ Σφάλμα κατά την ακύρωση αναζήτησης: {error}",
    error_cancelling_search_user:
      "❌ Προέκυψε σφάλμα κατά την ακύρωση της αναζήτησης",
    processing_found_transaction:
      "🔄 Επεξεργασία της συναλλαγής που βρέθηκε για τον χρήστη {userId}",
    investment_in_process_not_found:
      "Δεν βρέθηκε επένδυση με κατάσταση in_process",
    failed_update_investment_status: "Αποτυχία ενημέρωσης κατάστασης επένδυσης",
    failed_delete_previous_message:
      "Αδυναμία διαγραφής προηγούμενου μηνύματος: {error}",
    transaction_confirmed_message:
      `💰 <b>Επιβεβαίωση Κατάθεσης στο Pool</b>\n\n` +
      `📊 <b>Λεπτομέρειες Συναλλαγής:</b>\n` +
      `▸ Ποσό: <b>{amount} USDT</b>\n` +
      `▸ Περίοδος: <b>{period} ημέρες</b>\n` +
      `▸ Αναμενόμενο Κέρδος: <b>{expectedProfit} USDT</b>\n` +
      `▸ Συνολικό Ποσό Επιστροφής: <b>{totalReturn} USDT</b>\n` +
      `▸ Ημερομηνία Επιστροφής: <b>{returnDate}</b>\n\n` +
      `✅ <b>Η συναλλαγή επιβεβαιώθηκε!</b>\n` +
      `📊 <b>Hash Συναλλαγής:</b> <code>{hash}</code>\n` +
      `💰 <b>Πραγματικό Ποσό:</b> {actualAmount} USDT\n` +
      `⏰ <b>Επιβεβαιώθηκε:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Ενεργοποιούμε τα επίπεδα του χρήστη βάσει του ποσού επένδυσης",
    user_prefix: "User_",
    notification_sent_to_referrer:
      "✅ Ειδοποίηση στάλθηκε στον παραπέμποντα {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Ο παραπέμπων δεν βρέθηκε ή δεν έχει τα απαραίτητα δεδομένα",
    user_has_no_referrer: "⚠️ Ο χρήστης δεν έχει παραπέμποντα",
    error_sending_referral_notification:
      "Σφάλμα αποστολής ειδοποίησης στον παραπεμπόμενο: {error}",
    error_sending_missed_rewards:
      "Σφάλμα αποστολής ειδοποιήσεων για χαμένα ανταμοιβά: {error}",
    error_sending_missed_referrals:
      "Σφάλμα αποστολής ειδοποίησης για χαμένους παραπεμπόμενους: {error}",
    level_activation_notifications_sent:
      "🎯 Οι ειδοποιήσεις ενεργοποίησης επιπέδων στάλθηκαν για τα επίπεδα: {levels}",
    error_sending_level_activation:
      "Σφάλμα αποστολής ειδοποίησης ενεργοποίησης επιπέδων: {error}",
    transaction_processed_successfully:
      "✅ Η συναλλαγή επεξεργάστηκε για τον χρήστη {userId}",
    error_processing_transaction:
      "❌ Σφάλμα επεξεργασίας συναλλαγής για τον χρήστη {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Σφάλμα Επεξεργασίας Συναλλαγής</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Σφάλμα: {error}\n\n` +
      `Παρακαλώ επικοινωνήστε με την υποστήριξη.`,
    new_levels_activated: "Ενεργοποιήθηκαν νέα επίπεδα!",
    activated_levels: "Ενεργοποιημένα Επίπεδα",
    levels_activation_benefit:
      "Τώρα λαμβάνετε έσοδα από αυτά τα επίπεδα της ομάδας σας!",
    referral_made_transaction: "Ο παραπεμπόμενός σας πραγματοποίησε συναλλαγή!",
    your_referral: "Ο παραπεμπόμενός σας",
    congrats_referral_reward: "Συγχαρητήρια! Κερδίσατε επιβράβευση παραπομπής!",
    affiliate_text: (username) =>
      `👥 Το δίκτυο συνεργατών σας, ${username}\n\n17 επίπεδα της ομάδας σας και απόκτηση εσόδων από κάθε επίπεδο από την κερδοφορία των παραπεμπόμενών σας\n\n<b>1ου επιπ.</b> - 20%\n<b>2ου επιπ.</b> - 10%\n<b>3ου - 7ου επιπ.</b> - 5%\n<b>8ου - 10ου επιπ.</b> - 3%\n<b>11ου - 17ου επιπ.</b> - 1%\n\nΓια την ενεργοποίηση κάθε επιπέδου, το μερίδιό σας στο pool πρέπει να αντιστοιχεί σε <b>Αρ. Επιπέδου * 100$</b>\nΓια την ενεργοποίηση όλων των επιπέδων, το προσωπικό σας μερίδιο στο pool = <b>1700$</b>\n\n📊 Σύνολο στατιστικών ανά επίπεδα:\n{pools.levels}\n\n💰 Σύνολο: 0 παραπ. | 0.000 USDT`,
    your_referral_sent: "Ο παραπεμπόμενός σας πραγματοποίησε κατάθεση!",
    missed_referral_reward: (missedAmount, level) =>
      `Χάσατε την επιβράβευση παραπομπής ${missedAmount}$ από το ${level} επίπεδο`,
    activate_level_to_earn:
      "Ενεργοποιήστε το επίπεδο για να λαμβάνετε έσοδα από ολόκληρη τη δομή!",
    check_subscription: "✅ Έχω εγγραφεί",
    website_ref:
      '🎉 Συγχαρητήρια για την επιτυχημένη εγγραφή!\n\n🔗 Σε αυτό το βήμα, πρέπει να προσθέσετε τον σύνδεσμο παραπομπής σας από τον προσωπικό σας λογαριασμό Bitnest\n\n1. Μεταβείτε στον επίσημο ιστότοπο του Bitnest\n\n2. Πάνω δεξιά πατήστε "<b>Connect</b>"<i> - (αν βλέπετε το εικονίδιο του πορτοφολιού, προχωρήστε στο επόμενο βήμα)</i>\n\n3. Πατήστε "<b>Προσκάλεσε Φίλους</b>"\n\n4. Πατήστε "<b>Αντιγραφή Συνδέσμου μου</b>"\n\n5. Στείλτε τον στο παρακάτω πεδίο 👇🏼',
    raffle: "🎁 ΚΛΗΡΩΣΗ 🎁",
    daily_raffle: "🎉 Καθημερινή κλήρωση!",
    current_prize: "🏆 Έπαθλο",
    participants: "👥 Συμμετέχουν ήδη ",
    end_time: "⏰ Αποτελέσματα",
    raffle_text: `✅ <b>Όρια Συμμετοχής:</b>\n• Ελάχιστο ενεργό μερίδιο στο pool: 10 USDT\n• Μία προσπάθεια ανά άτομο\n\n`,
    raffle_requirement:
      "Για τη συμμετοχή στην κλήρωση απαιτείται να έχετε ενεργό μερίδιο στο pool",
    raffle_wallet_not_set: "⚠️ Ρυθμίστε πρώτα το πορτοφόλι",
    raffle_already_registered:
      "✅ Έχετε εγγραφεί με επιτυχία στον τρέχοντα γύρο!",
    successfully_registered: "Εγγραφήκατε με επιτυχία στην κλήρωση!",
    registration_failed: "Αποτυχία εγγραφής",
    participate_button: "🎟 Συμμετοχή",
    no_active_raffle: "Δεν υπάρχει ενεργή κλήρωση αυτήν τη στιγμή.",
    already_registered_in_raffle:
      "✅ Έχετε ήδη εγγραφεί στην τρέχουσα κλήρωση!",
    new_raffle_started: (prize, hours) =>
      `💰 Έπαθλο: ${prize} USDT\n⏰ Μέχρι το τέλος: ${hours} ώρες\n\n`,
    register_in_raffle: "🤖 Εγγραφή στην κλήρωση",
    raffle_error: "❌ Σφάλμα: {error}",
    raffle_min_investment_required:
      "Για συμμετοχή στην κλήρωση απαιτείται ενεργό μερίδιο στο pool από 10$\n\n" +
      "Κάντε κατάθεση USDT στο pool για να αποκτήσετε τη δυνατότητα συμμετοχής.",
    raffle_registration_success:
      "Εγγραφήκατε με επιτυχία!\n\nΤώρα συμμετέχετε στην κλήρωση!",
    eligible_to_participate: "💪 Έχετε το δικαίωμα εγγραφής στην κλήρωση",
    raffle_registration_error: "❌ Σφάλμα εγγραφής: {error}",
    not_registered_yet:
      "❌ Δεν έχετε εγγραφεί ακόμα. Πατήστε στο κουμπί του πορτοφολιού σας για εγγραφή.",
    register_button: "📝 Εγγραφή",
    registration_check_error: "❌ Σφάλμα κατά τον έλεγχο εγγραφής",
    registering_wallet: "🔄 Γίνεται εγγραφή του πορτοφολιού σας...",
    registration_success: "✅ Έχετε εγγραφεί με επιτυχία στον τρέχοντα γύρο!",
    registration_error: "❌ Σφάλμα εγγραφής",
    try_later_or_contact_admin:
      "Δοκιμάστε αργότερα ή επικοινωνήστε με τον διαχειριστή.",
    registration_process_error: "❌ Σφάλμα κατά την εγγραφή",
    mentor_not_found: "❌ <b>Ο μέντορας δεν βρέθηκε</b>",
    mentor_not_found_description:
      "Δεν έχετε ανατεθειμένο μέντορα. Παρακαλώ επικοινωνήστε με την υποστήριξη.",
    new_referral_notification: (username) =>
      `👏🏼 Έχετε έναν νέο παραπεμπόμενο @${username}`,
    friend: "φίλος",
    welcome_error:
      "👋 Καλώς ήρθατε! Προέκυψε σφάλμα κατά τη φόρτωση του μενού.",
    link_subscription_pending:
      "⌛ <b>Εκκρεμεί πληρωμή συνδρομής</b>\n\n" +
      "Η συνδρομή σας αναμένει επιβεβαίωση πληρωμής. " +
      "Εάν έχετε ήδη πληρώσει, πατήστε το παρακάτω κουμπί για έλεγχο της κατάστασης.",
    check_payment: "🔄 Έλεγχος Πληρωμής",
    create_new_payment: "💳 Δημιουργία Νέας Πληρωμής",
    link_subscription_required:
      "❌ <b>Πρόσβαση στις ρυθμίσεις συνδέσμων μέσω συνδρομής</b>\n\n" +
      "✅ Για τη ρύθμιση του συνδέσμου παραπομπής και την ενεργοποίηση του bot σας, απαιτείται αγορά συνδρομής 10$/μήνα.\n\n",
    buy_subscription: "💳 Αγορά Συνδρομής (10$/μήνα)",
    link_settings_error: "❌ Σφάλμα κατά τη φόρτωση ρυθμίσεων συνδέσμων",
    setup_wallet_first: "❌ Ρυθμίστε πρώτα το πορτοφόλι στις ρυθμίσεις",
    custom_amount_message:
      "💰 <b>Εισάγετε το δικό σας ποσό για κατάθεση στο pool</b>\n\n" +
      "Ελάχιστο ποσό: <b>1 USDT</b>\n" +
      "Μέγιστο ποσό: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Στείλτε έναν αριθμό - το ποσό σε USDT στο παρακάτω πεδίο</i>",
    menu_title: (username) =>
      `🎉 <b>Καλώς ήρθες, ${username}</b>\n\n🚀 <b>BitnestRus Bot - Ο αξιόπιστος βοηθός και ομαδικό εργαλείο σας</b>\n\n✨ <b>Δυνατότητες bot:</b>\n• 🎁 Κληρώσεις χρηματικών επάθλων\n• 💰 Χρηματοοικονομικά στατιστικά του πορτοφολιού σας\n• 🌊 Οδηγίες για εργασία με το pool ρευστότητας\n• 👥 Πρόγραμμα πολυεπίπεδων συνεργατών\n• 📊 Αναλυτικά και ενημέρωση\n\n👇 Επιλέξτε ενότητα στο μενού:\n`,
    back: "◀️ Πίσω",
    next: "➡️ Επόμενο",
    nextreg: " ✍🏼 Έχω ολοκληρώσει την εγγραφή",
    my_wallet: "💰 Το Πορτοφόλι Μου",
    liquidity_pool: "🌊 Pool Ρευστότητας",
    my_portfolio: "💼 Η ΘΗΚΟΦΥΛΑΚΗ ΜΟΥ", // Διευκρίνιση: 'Portfolio' μπορεί να μεταφραστεί και ως 'Χαρτοφυλάκιο', αλλά 'Θηκοφυλακή' είναι επίσης αποδεκτό.
    presentation: "🎥 Παρουσίαση",
    video_instructions: "📚 Βίντεο-Οδηγίες",
    official_website: "🔗 Επίσημος Ιστότοπος",
    oficial_site: "✅ Επίσημος Ιστότοπος",
    affiliate: "👥 Πρόγραμμα Συνεργατών",
    settings: "⚙️ Ρυθμίσεις",
    admin: "🔧 Διαχείριση",
    settings_title:
      "⚙️ Ρυθμίσεις\n\nΕδώ μπορείτε να ρυθμίσετε τους συνδέσμους σας\n\nΕπιλέξτε ενέργεια:",
    start_education: "🎓 Ξεκινήστε την Εκπαίδευση",
    download_metamask: "🦊 Λήψη - MetaMask",
    register_metamask: "🦊 Εγγραφή - MetaMask",
    register_metamask_mobile: "🦊 Εγγραφή - MetaMask",
    invest_now_message: (bnb_balance, usdt_balance) =>
      `💰 <b>Κατάθεση USDT στο Pool Ρευστότητας</b>\n\n` +
      `<b>Απόδοση ανά περίοδο:</b>\n` +
      `• <b>1 ημέρα</b> - 0.4%\n` +
      `• <b>7 ημέρες</b> - 4%\n` +
      `• <b>14 ημέρες</b> - 9.5%\n` +
      `• <b>28 ημέρες</b> - 24%\n\n` +
      `<i>Όλα τα κεφάλαια <b>(ποσό USDT + μπόνους)</b> επιστρέφονται αυτόματα μετά την καθορισμένη περίοδο στο πορτοφόλι σας</i>\n\n` +
      `📌 <b>Το Υπόλοιπό σας:</b>\n` +
      `• BNB: ${bnb_balance}\n` +
      `• USDT: ${usdt_balance}\n\n` +
      `👇🏼 <b>Επιλέξτε ποσό κατάθεσης στο pool:</b>`,
    custom_amount: "🗂 Προσαρμοσμένο Ποσό",
    error_getting_data: "❌ Σφάλμα κατά τη λήψη δεδομένων, δοκιμάστε ξανά.",
    choose_period_message: (amount) =>
      `🔄 Επιλέξατε το ποσό <b>${amount} USDT</b>. Επιλέξτε περίοδο κατάθεσης στο pool:\n\n` +
      `<b>Απόδοση ανά περίοδο:</b>\n` +
      `• <b>1 ημέρα</b> - 0.4%\n` +
      `• <b>7 ημέρες</b> - 4%\n` +
      `• <b>14 ημέρες</b> - 9.5%\n` +
      `• <b>28 ημέρες</b> - 24%\n\n` +
      `<i>Όλα τα κεφάλαια <b>(ποσό USDT + μπόνους)</b> επιστρέφονται αυτόματα μετά την καθορισμένη περίοδο στο πορτοφόλι σας</i>\n\n` +
      `👇 <b>Επιλέξτε περίοδο κατάθεσης στο pool:</b>`,
    back_to_amount_selection: "◀️ Πίσω στην επιλογή ποσού",
    main_menu: "🏠 Στο Κύριο Μενού",
    timer_message_id_not_found: "❌ Δεν βρέθηκε το timer_message_id",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ Αναμένουμε την κατάθεσή σας, οι οδηγίες είναι παραπάνω\n\n<b>🔎 Μετά την αποστολή, θα ξεκινήσει η αναζήτηση της συναλλαγής ...</b>\n\n⏰ <b>Προθεσμία για την αποστολή και αναζήτηση της συναλλαγής σας:</b> ${timeString} λεπτά...\n\n`,
    timer_error: "❌ Σφάλμα στο χρονόμετρο: {error}",
    timer_stopped_message_not_found:
      "⏹️ Το χρονόμετρο σταμάτησε: το μήνυμα δεν βρέθηκε ή δεν είναι προσβάσιμο",
    timer_minor_error_continue: "⚠️ Μικρό σφάλμα χρονομέτρου, συνεχίζουμε...",
    transaction_timeout_message:
      "⏰ <b>Έληξε ο χρόνος αναζήτησης της συναλλαγής</b>\n\n" +
      "❌ Δεν ήταν δυνατή η εύρεση επιβεβαίωσης συναλλαγής εντός του καθορισμένου χρόνου.\n\n" +
      "Πιθανές αιτίες:\n" +
      "• Η συναλλαγή δεν έχει ακόμα επιβεβαιωθεί από το δίκτυο\n" +
      "• Μη έγκυρο TX Hash\n" +
      "• Προβλήματα με το δίκτυο BSC\n\n" +
      "Παρακαλώ ελέγξτε την κατάσταση της συναλλαγής στο BscScan και δοκιμάστε ξανά.",
    transaction_timeout_log:
      "⏰ Λήξη χρονικού ορίου συναλλαγής για τον χρήστη {userId}",
    transaction_timeout_error:
      "❌ Σφάλμα κατά την επεξεργασία λήξης χρονικού ορίου συναλλαγής: {error}",
    transaction_not_found_try_again:
      "❌ Η συναλλαγή δεν βρέθηκε. Δοκιμάστε να ξεκινήσετε από την αρχή.",
    awaiting_transaction_check:
      "🔍 <b>Αναμένετε έλεγχο συναλλαγής...</b>\n\n" +
      "Το bot θα ελέγξει το blockchain εντός 2-5 λεπτών.\n" +
      "Θα λάβετε ειδοποίηση για το αποτέλεσμα.",
    transaction_not_found_message:
      "❌ <b>Δεν βρέθηκε η συναλλαγή</b>\n\n" +
      "Πιθανές αιτίες:\n" +
      "• Η συναλλαγή δεν έχει ακόμα επιβεβαιωθεί από το δίκτυο\n" +
      "• Απεστάλη σε λάθος διεύθυνση pool\n" +
      "📞 Εάν στείλατε USDT, επικοινωνήστε με την υποστήριξη\n" +
      "🔍 TX Hash: δώστε το hash της συναλλαγής",

    transaction_not_found_notification_sent:
      "✅ Ειδοποίηση για απουσία συναλλαγής στάλθηκε στον χρήστη {userId}",
    request_tx_hash_message:
      "📝 <b>Παρακαλώ εισάγετε το hash της συναλλαγής (TX Hash):</b>\n\n" +
      "Αφού στείλετε USDT, αντιγράψτε το TX Hash από το πορτοφόλι σας και στείλτε το εδώ.",
    error_requesting_tx_hash: "Σφάλμα αιτήματος TX Hash: {error}",
    presentation_message:
      "📊 <b>Παρουσίαση</b>\n\n" +
      "🎥 Λεπτομερές βίντεο παρουσίασης που θα σας βοηθήσει να κατανοήσετε τα πλεονεκτήματα της πλατφόρμας και αυτού του εργαλείου\n\n",
    presentation_error: "Σφάλμα παρουσίασης: {error}",
    presentation_load_error: "❌ Σφάλμα κατά τη φόρτωση της παρουσίασης",
    user_not_determined: "❌ Αδυναμία προσδιορισμού χρήστη",
    not_configured: "Δεν ρυθμίστηκε",
    from_your_inviter: (name) => `\n👤 Από τον προσκεκλημένο σας: ${name}`,
    user: "Χρήστης",
    system_video_instruction: "\n📋 Συστημική Βίντεο-Οδηγία",
    video_instructions_header: "🎥 <b>Βίντεο-Οδηγίες</b>",
    video_instructions_description:
      "📚 Λεπτομερές μάθημα βίντεο, στο οποίο θα μάθετε όλες τις λεπτότητες εργασίας με το σύστημα και θα μάθετε να αλληλεπιδράτε με το pool",
    video_link_available: (link) =>
      `🔗 <b>Σύνδεσμος βίντεο:</b>\n\n<code>${link}</code>`,
    video_link_not_available: "❌ <b>Ο σύνδεσμος δεν είναι διαθέσιμος</b>\n\n",
    video_instruction_error: "Σφάλμα βίντεο οδηγιών: {error}",
    video_instruction_load_error: "❌ Σφάλμα κατά τη φόρτωση βίντεο-οδηγιών",
    system_link: "🌐 Συστημικός Σύνδεσμος",
    from_your_mentor: "👤 Από τον Μέντορά σας",
    your_link: "🌐 Ο Σύνδεσμός Σας",
    visit_official_website:
      "Επισκεφτείτε τον επίσημο ιστότοπο της πλατφόρμας και μελετήστε όλες τις λεπτομέρειες και τους κανόνες εργασίας με την υπηρεσία",
    link: "Σύνδεσμος",
    open_metamask: "🦊 Άνοιγμα MetaMask",
    open_in_browser: "💻 Άνοιγμα σε browser Υπολογιστή",
    website_error: "❌ Σφάλμα κατά τη φόρτωση πληροφοριών ιστότοπου",
    your_investment_portfolio: "Η θηκοφυλακή του ενεργού μεριδίου σας στο pool",
    transaction: "Συναλλαγή",
    amount: "Ποσό",
    term: "Περίοδος",
    days: "ημέρες",
    profitability: "Κερδοφορία",
    time_left: "Μέχρι την ολοκλήρωση",
    d: "η",
    h: "ώ",
    expected_profit: "Αναμενόμενο Κέρδος",
    type: "Τύπος",
    incoming_transaction: "Εισερχόμενη Συναλλαγή",
    refund: "Επιστροφή Κεφαλαίων",
    status: "Κατάσταση",
    active: "Ενεργό",
    archived: "Αρχειοθετημένη Κατάθεση",
    returned: "Επιστράφηκε",
    total_statistics: "Συνολικά Στατιστικά",
    total_active_amount: "Συνολικό ποσό ενεργών",
    page: "Σελίδα",
    of: "από",
    portfolio_error: "⚠️ Σφάλμα κατά τη φόρτωση θηκοφυλακής",
    congrats_on_profit: "Συγχαρητήρια για την απόκτηση κέρδους!",
    bot_not_available: "Το bot δεν είναι διαθέσιμο για αποστολή ειδοποίησης",
    investment_notification_sent:
      "Η ειδοποίηση επιστροφής επενδύσεων στάλθηκε στον χρήστη",
    investment_notification_error:
      "Σφάλμα αποστολής ειδοποίησης επιστροφής επενδύσεων:",
    check_old_transactions: "🔍 Έλεγχος Παλαιών Συναλλαγών",
    checking_old_transactions: "Ελέγχουμε παλιές συναλλαγές",
    this_may_take_seconds: "Αυτό μπορεί να πάρει μερικά δευτερόλεπτα...",
    wallet_not_found: "❌ Δεν βρέθηκε πορτοφόλι. Συνδέστε το στο προφίλ.",
    check_completed: "Ο έλεγχος ολοκληρώθηκε",
    added_to_portfolio: "Προστέθηκε στη θηκοφυλακή",
    no_transactions_found: "Δεν βρέθηκαν συναλλαγές",
    target_wallet: "Προορισμός Πορτοφολιού",
    found_transactions: "Βρέθηκαν συναλλαγές",
    already_added: "ήδη προστέθηκε",
    added: "προστέθηκε",
    summary: "Περίληψη",
    new_added: "Νέων προστέθηκε",
    already_exist: "Υπάρχει ήδη",
    total_checked: "Σύνολο ελεγχέντων",
    check_transactions_error: "Σφάλμα ελέγχου συναλλαγών",
    transactions: "συναλλαγές",
    your_active_pool: "<b>Το ενεργό μερίδιό σας στο pool</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>Το ενεργό μερίδιό σας στο pool:</b> ${amount}$`,
    your_personal_share: "Το συνολικό μερίδιό σας στο pool",
    level_activation_title: "Ενεργοποίηση Επιπέδων Προγράμματος Συνεργατών",
    affiliate_network_header: (username) =>
      `👥 <b>Το δίκτυο συνεργατών σας, ${username}</b>`,
    affiliate_network_description:
      "17 επίπεδα της ομάδας σας και απόκτηση εσόδων από κάθε επίπεδο από την κερδοφορία των παραπεμπόμενών σας",
    level_percentages:
      "<b>• 1ου επιπ.</b> - 20%\n" +
      "<b>• 2ου επιπ.</b> - 10%\n" +
      "<b>• 3ου-7ου επιπ.</b> - 5%\n" +
      "<b>• 8ου-10ου επιπ.</b> - 3%\n" +
      "<b>• 11ου-17ου επιπ.</b> - 1%",
    level_activation_requirements:
      "Για την ενεργοποίηση κάθε επιπέδου το μερίδιό σας στο pool πρέπει να αντιστοιχεί σε <b>Αρ. Επιπέδου * 100$</b>",
    all_levels_activation_requirement:
      "Για την ενεργοποίηση όλων των επιπέδων, το προσωπικό σας μερίδιο στο pool = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>Το προσωπικό σας μερίδιο στο pool:</b> ${amount}$`,
    activated_levels: (count) =>
      `🎯 <b>Ενεργοποιημένα Επίπεδα:</b> ${count}/17`,
    level_statistics: "📊 <b>Στατιστικά ανά Επίπεδο:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Επ. ${level}: ${count} άτομα | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Επ. ${level}: Δεν υπάρχουν παραπεμπόμενοι`,
    no_level_data: "<i>Δεν υπάρχουν ακόμη δεδομένα ανά επίπεδο</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Σύνολο:</b> ${referrals} παραπ. | ${investments} USDT`,
    my_partners: "📋 Οι Συνεργάτες Μου",
    my_team: "🧏‍♂️ Η Ομάδα Μου",
    ref_link: "🔗 Σύνδεσμος Παραπομπής",
    enable_levels: "🔓 Ενεργοποίηση Επιπέδων",
    search: "🔍 Αναζήτηση",
    statistics: "📈 Στατιστικά",
    affiliate_error: "Σφάλμα προγράμματος συνεργατών: {error}",
    affiliate_load_error: "⚠️ Σφάλμα κατά τη φόρτωση προγράμματος συνεργατών",
    buy_subscription: "💰 Απόκτηση Συνδρομής",
    subscription_text:
      "Για την απόκτηση συνδρομής, επικοινωνήστε με το cryptobot:\n\nΜετά την πληρωμή της συνδρομής, θα αποκτήσετε πρόσβαση στο πρόγραμμα παραπομπών και άλλες αποκλειστικές δυνατότητες.",
    go_to_cryptobot: "📲 Μετάβαση στο Cryptobot",
    check_subscription_status: "🔄 Έλεγχος Συνδρομής",
    subscription_active:
      "✅ Η συνδρομή σας είναι ενεργή! Τώρα μπορείτε να προσκαλέσετε παραπεμπόμενους.",
    subscription_inactive:
      "❌ Η συνδρομή δεν είναι ακόμα ενεργή. Παρακαλώ ολοκληρώστε την πληρωμή ή επικοινωνήστε με την υποστήριξη.",
    subscription_check_error: "❌ Σφάλμα κατά τον έλεγχο κατάστασης συνδρομής",
    data_not_found: "Δεν βρέθηκαν δεδομένα. Ενημερώστε τη θηκοφυλακή.",
    last_page: "Αυτή είναι η τελευταία σελίδα",
    first_page: "Αυτή είναι η πρώτη σελίδα",
    page_load_error: "Σφάλμα κατά τη φόρτωση σελίδας",
    edit_message_error: "Αδυναμία επεξεργασίας μηνύματος, αποστέλλεται νέο:",
    refresh: "🔄 Ανανέωση",
    referral_access_subscription:
      "❌ <b>Πρόσβαση στο πρόγραμμα παραπομπών μέσω συνδρομής</b>\n\n✅ Για τη ρύθμιση του συνδέσμου παραπομπής και την ενεργοποίηση του bot σας, απαιτείται αγορά συνδρομής 10$/μήνα.",
    referral_invite_text:
      "👋🏻 Γεια! Αν θέλεις να λαμβάνεις παθητικό εισόδημα από την TOP-1 ανταλλαγή, συνδέσου μέσω του συνδέσμου μου 👆",
    your_referral_link: "Ο Σύνδεσμος Παραπομπής Σας",
    referral_invite_description:
      "💡 Προσκαλέστε φίλους και λαμβάνετε έσοδα από τα ενεργά μερίδια τους στο pool!",
    share_link: "📢 Κοινοποίηση Συνδέσμου",
    referral_link_error: "❌ Σφάλμα κατά τη φόρτωση συνδέσμου παραπομπής",
    link_copied: "📋 Ο σύνδεσμος παραπομπής αντιγράφηκε:",
    share_with_friends: "Τώρα μπορείτε να τον μοιραστείτε με φίλους!",
    link_settings_title: "⚙️ Ρυθμίσεις των Συνδέσμων Σας",
    link_settings_description:
      "Αυτοί οι σύνδεσμοι θα είναι ορατοί στους παραπεμπόμενους σας:",
    choose_link_to_change: "💡 Επιλέξτε σύνδεσμο για αλλαγή:",
    change_video: "🎥 Αλλαγή Βίντεο",
    cancel_input: "❌ Ακύρωση Εισαγωγής",
    link_access_subscription:
      "❌ Πρόσβαση στις ρυθμίσεις συνδέσμων μέσω συνδρομής",
    subscription_required:
      "✅ Για τη ρύθμιση του συνδέσμου παραπομπής και την ενεργοποίηση του bot σας, απαιτείται αγορά συνδρομής 10$/μήνα.",
    payment_pending: "⌛ Εκκρεμεί πληρωμή συνδρομής",
    payment_pending_description:
      "Η συνδρομή σας αναμένει επιβεβαίωση πληρωμής. Εάν έχετε ήδη πληρώσει, πατήστε το παρακάτω κουμπί για έλεγχο της κατάστασης.",
    create_new_payment: "💳 Δημιουργία Νέας Πληρωμής",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success:
      "✅ Όλοι οι σύνδεσμοι επαναφέρθηκαν στις συστημικές ρυθμίσεις",
    reset_links_error: "❌ Σφάλμα κατά την επαναφορά συνδέσμων",
    subscription_payment_title: "💳 Πληρωμή Συνδρομής για Ρύθμιση Συνδέσμων",
    subscription_price: "Κόστος: ",
    subscription_duration: "Διάρκεια: ",
    pay_via_cryptobot: "🔗 Πληρωμή μέσω Cryptobot",
    cancel: "❌ Ακύρωση",
    subscription_payment_error:
      "⚠️ Προέκυψε σφάλμα κατά τη δημιουργία συνδρομής. Παρακαλώ δοκιμάστε αργότερα.",
    subscription_description: "Συνδρομή για ρυθμίσεις συνδέσμων (1 μήνας)",
    no_data_to_display: "❌ Δεν υπάρχουν δεδομένα προς εμφάνιση",
    nothing_found_for_query: "Για το ερώτημα",
    no_referrals_on_levels: "Δεν έχετε ακόμη παραπεμπόμενους σε επίπεδα",
    invested_in_pool: "Κατατέθηκε στο pool",
    found_referrals: "Βρέθηκαν παραπεμπόμενοι",
    subscription_activated: "✅ Η συνδρομή ενεργοποιήθηκε με επιτυχία!",
    subscription_activated_description:
      "🎉 Τώρα έχετε πρόσβαση σε όλες τις λειτουργίες ρύθμισης συνδέσμων και του συστήματος συνεργατών.",
    payment_processing:
      "⌛ Η πληρωμή βρίσκεται σε επεξεργασία. Δοκιμάστε να ελέγξετε αργότερα.",
    invoice_expired: "❌ Η ημερομηνία λήξης του τιμολογίου έχει παρέλθει.",
    payment_not_found: "❌ Η πληρωμή δεν βρέθηκε ή ακυρώθηκε.",
    payment_check_error: "⚠️ Σφάλμα κατά τον έλεγχο πληρωμής.",
    payment_check_error_description:
      "Παρακαλώ δοκιμάστε αργότερα ή επικοινωνήστε με την υποστήριξη.",
    try_again: "🔄 Δοκιμάστε Ξανά",
    new_payment: "💳 Νέα Πληρωμή",
    enter_presentation_link: "📊 Εισάγετε σύνδεσμο για παρουσίαση:",
    enter_video_link: "🎥 Εισάγετε σύνδεσμο για βίντεο-οδηγίες:",
    enter_official_link: "🌐 Εισάγετε σύνδεσμο για επίσημο ιστότοπο:",
    referral_stats: "📊 Στατιστικά ανά Επίπεδο",
    level: "Επίπεδο",
    referrals_count: "👥 Παραπεμπόμενοι:",
    total_invested: (amount) => `💰 Κατατέθηκε στο pool: ${amount} USDT`,
    search_referrals_prompt: "🔍 Εισάγετε όνομα χρήστη για αναζήτηση:",
    no_referrals: "👥 Δεν έχετε ακόμη παραπεμπόμενους",
    your_referrals: "👥 Οι Παραπεμπόμενοί Σας",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Σελίδα ${current} από ${total}`,
    no_referrals_on_level:
      "Σε αυτό το επίπεδο δεν υπάρχουν ακόμη παραπεμπόμενοι",
    back_to_affiliate: "◀️ Πίσω στο Πρόγραμμα Συνεργατών",
    your_personal_partners: "Οι Προσωπικοί Σας Συνεργάτες",
    id: "ID",
    too_many_partners_use_team:
      'Πάρα πολλοί συνεργάτες για εμφάνιση. Χρησιμοποιήστε την ενότητα "Η Ομάδα Μου" για πλήρη λίστα.',
    total_personal_partners: "📊 Σύνολο Προσωπικών Συνεργατών",
    no_personal_partners_yet: "Δεν έχετε ακόμη προσωπικούς συνεργάτες",
    invite_friends_tip:
      "💡 Προσκαλέστε φίλους μέσω του συνδέσμου παραπομπής σας, για να γίνουν προσωπικοί σας συνεργάτες!",
    personal_partners_error: "❌ Σφάλμα κατά τη φόρτωση προσωπικών συνεργατών",
    activation_status: "Κατάσταση Ενεργοποίησης Επιπέδων",
    how_to_activate: "Πώς να ενεργοποιήσετε",
    levels_activate_automatically:
      "Τα επίπεδα ενεργοποιούνται αυτόματα όταν επιτευχθεί το απαιτούμενο ποσό επενδύσεων (100$ ανά επίπεδο)",
    to_activate_level: "Για την ενεργοποίηση του επιπέδου",
    needs_more: "χρειάζεται ακόμα",
    refresh_status: "🔄 Ανανέωση Κατάστασης",
    levels_check_error: "❌ Σφάλμα κατά τον έλεγχο επιπέδων",
    contact_mentor: "🙆‍♂️ Επικοινωνία με τον Μέντορα",
    community_chat: "💬 Κοινοτικό Chat",
    support_service: "⚠️ Υπηρεσία Υποστήριξης",
    language_settings: "🌐 Γλώσσα / Language",
    language_changed_el: "✅ Η γλώσσα άλλαξε σε Ελληνικά",
    language_changed_ge: "✅ Η γλώσσα άλλαξε σε Γερμανικά",
    language_changed_ka: "✅ Η γλώσσα άλλαξε σε Γεωργιανά",
    language_changed_en: "✅ Η γλώσσα άλλαξε σε Αγγλικά",
    language_changed_fr: "✅ Η γλώσσα άλλαξε σε Γαλλικά",
    language_changed_id: "✅ Η γλώσσα άλλαξε σε Ινδονησιακά",
    language_changed_es: "✅ Η γλώσσα άλλαξε σε Ισπανικά",
    language_change_error: "❌ Σφάλμα κατά την αλλαγή γλώσσας",
    not_subscribed:
      '❌ Δεν έχετε εγγραφεί στο chat μας. Παρακαλώ εγγραφείτε και πατήστε "Έλεγχος Συνδρομής" ξανά.',
    please_subscribe_to_chat: "Για να συνεχίσετε, πρέπει να εγγραφείτε στο κανάλι μας.",
    subscribe_to_chat: "📢 Εγγραφή στο Chat",
    check_subscription_btn: "🔄 Έλεγχος Συνδρομής",
    subscription_check_error: "Σφάλμα ελέγχου συνδρομής",
    invalid_url_format: "❌ Μη έγκυρη μορφή συνδέσμου",
    subscription_required_for_links:
      "❌ Για τη ρύθμιση συνδέσμων απαιτείται ενεργή συνδρομή",
    subscription_required_description:
      "💳 Αποκτήστε συνδρομή 10$/μήνα για να ρυθμίσετε τους συνδέσμους σας",
    domain_not_allowed:
      "❌ Αυτός ο σύνδεσμος δεν οδηγεί στην ομαδική σειρά μαθημάτων",
    domain_not_allowed_description:
      "✅ Εισάγετε σύνδεσμο σωστής μορφής ή επικοινωνήστε με την υπηρεσία υποστήριξης",
    your_domain: "Ο τομέας σας: {domain}",
    invalid_referral_link:
      "❌ Μη έγκυρη μορφή συνδέσμου. Παρακαλώ εισάγετε έναν έγκυρο σύνδεσμο HTTP/HTTPS.",
    referral_link_save_error:
      "❌ Σφάλμα κατά την αποθήκευση συνδέσμου. Δοκιμάστε ξανά.",
    invalid_investment_amount: "❌ <b>Μη έγκυρο ποσό!</b>",
    investment_amount_limits:
      "Ελάχιστο ποσό: <b>1 USDT</b>\nΜέγιστο ποσό: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Εισάγετε σωστό ποσό ως αριθμό</i>",
    investment_chosen_amount: (amount) =>
      `🔄 Επιλέξατε ποσό <b>${amount} USDT</b>.`,
    choose_investment_period: "Επιλέξτε περίοδο κατάθεσης στο pool:",
    investment_yield: "<b>Απόδοση ανά περίοδο:</b>",
    investment_return_info:
      "<i>Όλα τα κεφάλαια <b>(ποσό USDT + μπόνους)</b> επιστρέφονται αυτόματα μετά την καθορισμένη περίοδο στο πορτοφόλι σας</i>",
    select_period: "👇 <b>Επιλέξτε περίοδο κατάθεσης στο pool:</b>",
    search_results: (query) => `🔍 Αποτελέσματα αναζήτησης για \'${query}\':`,
    levels: (levels) => `📊 Επίπεδα: ${levels}`,
    sent_to_pool: (amount) => `💰 Κατατέθηκε στο pool: ${amount} USDT`,
    admin_prize_set: (amount) => `✅ Το έπαθλο ορίστηκε: ${amount} USDT`,
    admin_time_set: (startHour, durationHours) =>
      `✅ Ο χρόνος ορίστηκε: έναρξη στις ${startHour}:00, διάρκεια ${durationHours} ωρών`,
    admin_funds_returned: (roundId) =>
      `✅ Τα κεφάλαια επιστράφηκαν για τον γύρο #${roundId}`,
    invalid_round_id: "❌ Μη έγκυρο ID γύρου",
    admin_error: "❌ Σφάλμα κατά την εκτέλεση εντολής",
    invalid_wallet_format: "❌ Μη έγκυρη μορφή διεύθυνσης πορτοφολιού.",
    wallet_format_details:
      "✅ Σωστή μορφή: 0x + 40 χαρακτήρες (αριθμοί και γράμματα A-F)",
    wallet_wrong_example: "❌ Παράδειγμα λανθασμένου: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Βεβαιωθείτε ότι η διεύθυνση ανήκει στο δίκτυο BSC (Binance Smart Chain)",
    wallet_already_used:
      "❌ Αυτό το πορτοφόλι χρησιμοποιείται ήδη από άλλο χρήστη. Παρακαλώ χρησιμοποιήστε άλλο πορτοφόλι.",
    invalid_tx_hash: "❌ <b>Μη έγκυρη μορφή TX Hash!</b>",
    tx_hash_format:
      "Το TX Hash πρέπει να ξεκινά με 0x και να περιέχει 64 χαρακτήρες.",
    checking_transaction: "🔍 Ελέγχω τη συναλλαγή...",
    transaction_accepted: "✅ <b>Η συναλλαγή έγινε αποδεκτή για έλεγχο!</b>",
    transaction_check_time:
      "Το bot θα ελέγξει την κατάσταση της συναλλαγής εντός 2-5 λεπτών.",
    transaction_notification:
      "Θα λάβετε ειδοποίηση όταν η συναλλαγή επιβεβαιωθεί.",
    transaction_save_error:
      "❌ Σφάλμα κατά την αποθήκευση συναλλαγής. Παρακαλώ επικοινωνήστε με την υποστήριξη.",
    use_menu_buttons: "Χρησιμοποιήστε τα κουμπιά μενού για πλοήγηση",
    referrals_title: (level) =>
      `👥 <b>Οι Παραπεμπόμενοί Σας</b> | <b>Επίπεδο ${level}</b>`,
    back_btn: "◀️ Πίσω",
    select_language: "🌐 <b>Επιλέξτε Γλώσσα:</b>",
    current_language: (language) => `Τρέχουσα γλώσσα: ${language}`,
    russian: "🇷🇺 Ρωσικά",
    english: "🇺🇸 Αγγλικά",
    french: "🇫🇷 Γαλλικά",
    indonesia: "🇮🇩 Ινδονησιακά",
    espaniol: "🇪🇸 Ισπανικά",
    italy: "🇮🇹 Ιταλικά",
    german: "🇩🇪 Γερμανικά",
    georgia: "🇬🇪 Γεωργιανά",
    greece: "🇬🇷 Ελληνικά",
    swahilli: "🇰🇪 Κένυα",
    turkish: "🇹🇷 τουρκική",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Πίσω στις Ρυθμίσεις",
    total_invested_level: "Προσωπικό μερίδιο στο pool",
    error: "❌ Προέκυψε σφάλμα, δοκιμάστε ξανά.",
    invalid_address: "❌ Μη έγκυρη διεύθυνση.",
    access_denied: "⛔ Δεν υπάρχει πρόσβαση",
    loading: "⏳ Φόρτωση...",
    updated: "Ενημερώθηκε",
    enabled: "✅ Ενεργοποιημένα",
    disabled: "❌ Απενεργοποιημένα",
    turn_on: "🔔 Ενεργοποίηση",
    turn_off: "🔕 Απενεργοποίηση",
  },
  ka: {
    // 🔥 რეფერალური სისტემა - ქართული
    referral_reward_notification: "🎉 <b>მიღებულია რეფერალური ჯილდო!</b>\n\n💰 <b>რაოდენობა:</b> {amount} USDT\n\n💼 სახსრები უკვე თქვენს ბალანსზეა და ხელმისაწვდომია გატანის ან რეინვესტირებისთვის.",
    referral_reward_my_portfolio: "💼 ჩემი პორტფელი",
    
    missed_referral_reward: "😡 <b>გაშვებული რეფერალური ჯილდო!</b>\n\n💰 <b>რაოდენობა:</b> {amount} USDT\n📊 <b>დონე:</b> {level}\n\n🔐 გაააქტიურეთ დონე {level} რეფერალური ჯილდოების მისაღებად!",
    activate_levels_button: "💼 დონეების აქტივაცია",
    
    // მონიტორინგი და შემოწმება
    starting_periodic_check: "🔄 რეფერალური ტრანზაქციების პერიოდული შემოწმების დაწყება (ყოველ წუთს)...",
    periodic_check_started: "✅ მომხმარებლის საფულეების მონიტორინგი დაიწყო",
    checking_recent_transactions: "⏰ ბოლო წუთის ტრანზაქციების შემოწმება: {time}-დან",
    wallet_check_progress: "🔍 სიახლე ტრანზაქციების შემოწმება საფულისთვის: {wallet}",
    fresh_transaction_found: "🕐 ნაპოვნია სიახლე ტრანზაქცია: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 საფულე {wallet}-ისთვის ნაპოვნია {count} სიახლე რეფერალური ტრანზაქცია ბოლო წუთში",
    
    // შემოწმების შედეგები
    force_check_started: "🔍 აიძულებული შემოწმება სიახლე რეფერალური ტრანზაქციების (ბოლო წუთი)...",
    no_wallets_for_check: "❌ არ არის მომხმარებლის საფულეები შესამოწმებლად",
    wallets_check_summary: "📊 ვამოწმებთ {count} მომხმარებლის საფულეს ბოლო წუთიდან",
    check_results: "📊 ბოლო წუთის შემოწმების შედეგები:",
    wallets_checked: "• შემოწმებული საფულეები: {count}",
    fresh_transactions_found: "• ნაპოვნი სიახლე ტრანზაქციები: {count}",
    successfully_processed: "• წარმატებით დამუშავებული: {count}",
    errors_count: "• შეცდომები: {count}",
    
    // ტრანზაქციების დამუშავება
    processing_fresh_transaction: "🔍 სიახლე რეფერალური TX-ის დამუშავება:\n- ჰეში: {hash}\n- მიმღები: {recipient}\n- რაოდენობა: {amount} USDT\n- დრო: {time}",
    transaction_already_processed: "⏭️ ტრანზაქცია {hash} უკვე დამუშავებულია",
    user_not_found_by_wallet: "❌ მომხმარებელი საფულით {wallet} ვერ მოიძებნა",
    user_found: "✅ მომხმარებელი ნაპოვნია: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ სიახლე რეფერალური ჯილდო დამუშავებულია მომხმარებლისთვის {telegramId}",
    
    // შეცდომები
    transaction_processing_error: "❌ სიახლე რეფერალური ტრანზაქციის დამუშავების შეცდომა",
    wallet_check_error: "❌ საფულის შემოწმების შეცდომა {wallet}",
    periodic_check_error: "❌ პერიოდული შემოწმების შეცდომა: {error}",
    force_check_error: "❌ აიძულებული შემოწმების შეცდომა სიახლე ტრანზაქციების: {error}",
    
    // ადმინისტრატორის შეტყობინებები
    bot_not_available: "❌ ბოტი ხელმიუწვდომელია შეტყობინებების გასაგზავნად",
    user_blocked_bot: "🚫 მომხმარებელმა {telegramId} დაბლოკა ბოტი",
    user_marked_blocked: "✅ მომხმარებელი {telegramId} მონიშნულია როგორც დაბლოკილი",
    
    // ჯილდოს პროცესი
    referral_reward_start: "🔔 დაწყება processReferralRewardEnhanced:\n- საფულე: {wallet}\n- რაოდენობა: {amount} USDT\n- TX ჰეში: {hash}\n- მიმართ: {from}\n- დროის შტამპი: {time}",
    transaction_recorded: "✅ ტრანზაქცია ჩაიწერა მონაცემთა ბაზაში",
    balance_updated: "✅ მომხმარებლის ბალანსი განახლდა +{amount} USDT-ით",
    referral_reward_db_success: "✅ რეფერალური ჯილდო წარმატებით დამუშავდა მონაცემთა ბაზაში",
    sending_user_notification: "🔔 შეტყობინების გაგზავნა მომხმარებელთან {telegramId}",
    user_no_telegram_id: "⚠️ მომხმარებელს {userId} არ აქვს telegram_id",
    database_overflow_error: "⚠️ რიცხვითი ველის გადავსების შეცდომა, ვცდილობთ ნაკლები სიზუსტით",
    retry_failed: "❌ ხელახალი მცდელობაც ვერ მოხერხდა",
    referral_reward_end: "✅ დასასრული processReferralRewardEnhanced საფულისთვის {wallet}",
    
    // მარტივი ჯილდოები
    simple_reward_processing: "🔔 რეფერალური ჯილდოს დამუშავება: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ რეფერალური ჯილდო ჩაიწერა მომხმარებლისთვის {telegramId}",
    
    // შეტყობინებები
    notification_sent: "✅ რეფერალური ჯილდოს შეტყობინება გაიგზავნა მომხმარებელთან {telegramId}",
    notification_error: "❌ შეტყობინების გაგზავნის შეცდომა მომხმარებელთან {telegramId}: {error}",
    
    // საფულეების განახლებები
    wallets_updater_started: "✅ მომხმარებლის საფულეების მონიტორინგი დაიწყო",
    
    // მიტოვებული ტრანზაქციები
    orphan_transaction_processing: "🔍 მიტოვებული რეფერალური ტრანზაქციის დამუშავება მომხმარებლისთვის {userId}",
    missed_reward_notification_sent: "⚠️ გაშვებული ჯილდოს შეტყობინება გაიგზავნა დონისთვის {level}",
    orphan_transaction_error: "❌ მიტოვებული ტრანზაქციის დამუშავების შეცდომა",
    
    // ზოგადი
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 კურატორების ბიბლიოთეკა",
    no_curators_data: "ამჟამად არ არის კურატორების მონაცემები {level} დონეზე",
    curators_library_explanation: "აქ ნახავთ თქვენი პარტნიორების სპონსორებს და მათ გუნდებს",
    statistics: "სტატისტიკა",
    total_curators: "სულ კურატორები",
    total_referrals: "სულ პარტნიორები",
    average_per_curator: "საშუალოდ კურატორზე",
    sponsor: "სპონსორი",
    partners: "პარტნიორები",
    more: "სხვა",
    incomplete_registration_title: "თქვენ არ დასრულებულათ რეგისტრაცია ბოტში!",
    incomplete_registration_message: "დაასრულეთ რეგისტრაცია, რომ დაიწყოთ მოგება და არ გამოტოვოთ შესაძლებლობები.",
    complete_registration_to_earn: "დაასრულეთ რეგისტრაცია და დაიწყეთ შოვნა!",
    complete_registration_to_earn_start: "🚀 <b>უბრალოდ გაგზავნეთ ბრძანება</b> <code>/start</code> <b>რეგისტრაციის გასაგრძელებლად!</b>",
    invalid_tx_hash_format:
      "❌ <b>არასწორი TX Hash ფორმატი</b>\n\nგთხოვთ, შეიყვანოთ სწორი ტრანზაქციის ჰეში (64 სიმბოლო, იწყება 0x-ით)",
    checking_transaction_blockchain:
      "🔍 <b>ტრანზაქციის შემოწმება ბლოკჩეინში...</b>\n\nმიღება ინფორმაციის ოდენობისა და ტრანზაქციის თარიღის შესახებ...",
    transaction_check_error:
      "❌ <b>ტრანზაქციის შემოწმების შეცდომა</b>\n\n{error}",
    blockchain_check_error:
      "❌ ტრანზაქციის ბლოკჩეინში შემოწმებისას მოხდა შეცდომა",
    transaction_found_details:
      "✅ <b>ტრანზაქცია ნაპოვნია!</b>\n\n💰 <b>ოდენობა:</b> {amount} USDT\n📅 <b>თარიღი:</b> {date}\n\n⏰ <b>აირჩიეთ პულში გაგზავნის პერიოდი:</b>",
    invalid_period_range:
      "❌ <b>არასწორი პერიოდი</b>\n\nგთხოვთ, შეიყვანოთ რიცხვი 1-დან 28 დღემდე",
    period_processing_error: "❌ პერიოდის დამუშავებისას მოხდა შეცდომა",

    // Периоды
    period_1_day: "1 დღე",
    period_7_days: "7 დღე",
    period_14_days: "14 დღე",
    period_28_days: "28 დღე",
    custom_period: "📅 მორგებული პერიოდი",

    // Админка
    bot_disabled_success: "🔴 ბოტი გამორთულია მომხმარებლებისთვის",
    bot_disable_error: "❌ შეცდომა: {error}",
    admin_panel: "🔧 ადმინ პანელი",
    invalid_prize_amount: "არასწორი პრიზის ოდენობა",
    prize_set_success: "✅ პრიზი დაყენებულია: {amount} USDT",
    prize_sent_success: "✅ TX hash შენახულია. პრიზი გაგზავნილია კონტრაქტზე.",
    prize_send_error: "❌ შეცდომა: {error}",
    winner_prize_notification:
      "🎯 თქვენი მოგება {amount} USDT გაიგზავნა კონტრაქტზე!\n\n⏰ მოგებას მიიღებთ 28 დღეში.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>დომენი არაა დაშვებული</b>\n\n{domain_not_allowed_description}\n\n<b>თქვენი დომენი:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 თქვენი პარტნიორის ბმული წარმატებით დაუკავშირდა!\n\n🏁 თქვენ ფინიშის ხაზთან ხართ! კომუნიკაციის გასაადვილებლად, შეკითხვების დასმისა და გუნდთან გაცნობისთვის, თქვენ უნდა შეუერთდეთ ჩვენს ჩატს.\n\n1. გადადით ამ ჩატში: @BitnestRus\n\n2. დააჭირეთ ღილაკს 'შეუერთდი ჯგუფს'\n\n3. აუცილებლად ჩართეთ შეტყობინებები\n\n4. დააჭირეთ ქვემოთ მოცემულ ღილაკს 'მე ვერექი/ვერექი ჯგუფს'\n\n👇🏼 ან გამოიყენეთ ქვემოთ მოცემული ღილაკი ჩვენს ჩატში ავტომატურად გადასასვლელად",
    chat_link: "📢  შეუერთდი ჯგუფს",
    disclaimer:
      "✅ ძვირფასო მომხმარებელო, ეს სისტემა შექმნილია ახალი მომხმარებლების სასწავლად და ინფორმირებისთვის, რომლებიც ადრე არ ურთიერთქმედებდნენ Bitnest სისტემასთან\n\n🤔 გთხოვთ, გვითხრათ, ხომ არ ყოფილხართ ადრე რეგისტრირებული?\n\n1. დააჭირეთ (არა) - თუ ჯერ არ გაქვთ ანგარიში სისტემაში და გსურთ გაიაროთ სწავლება და გახდეთ ჩვენი გუნდის ნაწილი\n\n2. დააჭირეთ (კი) - თუ უკვე გაქვთ ანგარიში სისტემაში და გაგზავნეთ USDT ცირკულაციაში\n\nამ ბოტის მომსახურება მხოლოდ ახალ მომხმარებლებს ეძლევათ, რომლებიც ადრე არ ყოფილან სისტემაში და დააჭირეს ღილაკს ✅ არა",
    disclaimer_no: "✅ არა, მე ახალი მონაწილე ვარ",
    disclaimer_yes: "⛔️ დიახ, მე სხვა გუნდის წევრი ვარ",
    block_confirmation_title: "დადასტურება",
    block_confirmation_message: "თუ თქვენ სხვა გუნდის წევრი ხართ, დაუკავშირდით თქვენს კურატორს.\n\nდარწმუნებული ხართ, რომ გსურთ თქვენი ანგარიშის დაბლოკვა?",
    back_button: "◀️ უკან",
    confirm_block_button: "✅ დიახ, დაბლოკვა",
    account_blocked_message: "🚫 <b>ანგარიში დაბლოკილია</b>\n\nთქვენი ანგარიში დაბლოკილია თქვენი მოთხოვნით.\n\nთუ ეს შეცდომით მოხდა, დაუკავშირდით მხარდაჭერას @BitnestRusSupport.",
    account_blocked:
      "❌ სამწუხაროდ, ამ ბოტის მომსახურება მხოლოდ ახალ მომხმარებლებს ეძლევათ. თქვენი ანგარიში არ არის აქტიური. ნებისმიერი შეკითხვისთვის @BitnestRusSupport",
    please_try_again: "გთხოვთ სცადოთ კიდევ ერთხელ",
    add_custom_transaction: "➕ ტრანზაქციის დამატება",
    adding_custom_transaction: "🔗 <b>თქვენი ტრანზაქციის დამატება</b>",
    enter_tx_hash_prompt:
      "გთხოვთ, შეიყვანოთ თქვენი ტრანზაქციის <b>TX Hash</b>:",
    transaction_requirements:
      "• უნდა შესრულდეს BSC ქსელში (Binance Smart Chain)\n• უნდა იყოს USDT ტრანზაქცია",
    tx_hash_example:
      `📝 <b>მაგალითი:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nიხილეთ თქვენი ტრანზაქციები პულში <a href="https://bscscan.com/address/{wallet}#tokentxns">გადასვლა</a>`,
    enter_amount_prompt: "💰 <b>შეიყვანეთ ტრანზაქციის თანხა USDT-ში:</b>",
    amount_example: "მაგალითი: <code>100.50</code>",
    select_period_prompt: "⏰ <b>აირჩიეთ ინვესტიციის პერიოდი:</b>",
    verifying_transaction: "🔍 <b>ტრანზაქციის შემოწმება ბლოკჩეინში...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nთანხა: {amount} USDT\nპერიოდი: {period} დღე",
    please_wait: "გთხოვთ დაელოდოთ...",
    transaction_already_exists: "ეს ტრანზაქცია უკვე დამატებულია სისტემაში",
    transaction_not_found: "ტრანზაქცია ვერ მოიძებნა",
    transaction_not_confirmed: "ტრანზაქცია არ არის დადასტურებული ან ჩავარდნილი",
    transaction_wrong_sender:
      "ტრანზაქცია გაიგზავნა არასწორი საფულიდან. თქვენი საფულე: {userWallet}, გამგზავნი ტრანზაქციაში: {txFrom}",
    transaction_wrong_receiver:
      "ტრანზაქცია გაიგზავნა არასწორ სისტემურ საფულეზე. მიმღები უნდა იყოს: {systemWallet}",
    transaction_amount_mismatch:
      "თანხა არ ემთხვევა. ბლოკჩეინში: {blockchainAmount} USDT, თქვენ შეიყვანეთ: {enteredAmount} USDT",
    transaction_not_usdt: "ეს არ არის USDT ტრანზაქცია",
    transaction_decode_error:
      "USDT ტრანზაქციის მონაცემების გაშიფვრა ვერ მოხერხდა",
    blockchain_error: "შეცდომა ბლოკჩეინში შემოწმებისას: {error}",
    transaction_added_success: "✅ <b>ტრანზაქცია წარმატებით დაემატა!</b>",
    investment_details: "📊 <b>ინვესტიციის დეტალები:</b>",
    investment_amount: "• თანხა: {amount} USDT",
    investment_period: "• პერიოდი: {period} დღე",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• მომგებიანობა: {profit}%",
    investment_added_to_portfolio: "💼 ინვესტიცია დაემატა თქვენს პორტფელში.",
    transaction_add_error: "❌ <b>ტრანზაქციის დამატების შეცდომა</b>",
    error_reason: "მიზეზი: {error}",
    your_investment_portfolio_add: "➕ ტრანზაქციის დამატება",
    language_changed_success: "✅ ენა წარმატებით შეიცვალა ქართული!",
    welcome: `👋🏼 <b>{username}</b>-ს მივესალმებით - ეს არის ჩვენი საზოგადოების გუნდური ინსტრუმენტი, ეს ბოტი საშუალებას მოგცემთ ეტაპობრივად გაერკვეთ სისტემაში და გახდეთ ჩვენი გუნდის ნაწილი!\n\n🎥 ჩვენ თქვენთვის მოვამზადეთ ეტაპობრივი ვიდეო ინსტრუქციები, რომლებშიც ახსნილი და ნაჩვენებია მთელი მოქმედების პროცესი\n\n👇🏼 სასწავლად შესაფერისად და თქვენი პირველი შედეგის მისაღებად დააჭირეთ ღილაკს '🎓 სწავლის დაწყება'`,
    welcome_back:
      "👋 თქვენ უკვე დაასრულეთ სწავლა! კეთილი იყოს თქვენი დაბრუნება!",
    education_title: "🎓 საგანმანათლებლო მასალები\nაირჩიეთ თემა:",
    finish: "✅ სწავლა დასრულებულია!",
    wallet_installation:
      "📲 <b>საფულის ინსტალაცია</b>\nჩამოტვირთეთ და დააინსტალირეთ ერთ-ერთი მხარდაჭერილი საფულე.",
    ask_wallet_address:
      "👍🏼 შესანიშნავი არჩევანი! ვიწყებთ სწავლას:\n\n💵 Web3 და DeFi სამყაროში პირველ რიგში საჭიროა საკუთარი პირადი კრიპტო საფულე, ახლავე ვაინსტალირებთ მას:\n\n1. გადადით <b>MetaMask</b>-ის ოფიციალურ ვებსაიტზე\n\n2. დააინსტალირეთ აპლიკაცია თქვენს ტელეფონზე\n\n3. ვქმნით საფულეს და აუცილებლად ვწერთ seed-ფრაზას საიმედო ადგილას\n\n4. ვაკონფიგურირებთ BSC - Binance Smart Chain (BEP20) ქსელს\n\n5. ვკოპირებთ ჩვენი საფულის საჯარო მისამართს 0x.............\n\n6. გამოგვიგზავნეთ ეს მისამართი შეტყობინებით ქვემოთ მოცემულ ველში 👇🏼",
    enter_wallet: `🥳 გილოცავთ, თქვენი საფულე წარმატებით დაკავშირდა!\n\n📝 ამ ეტაპზე თქვენ უნდა გაიაროთ რეგისტრაცია Bitnest-ის ოფიციალურ ვებსაიტზე (იხ. ვიდეო)\n\n1. დააკოპირეთ ეს ბმული \n\n<code>{referral_link_bitnest}</code>\n\n და გახსენით იგი თქვენი საფულის შიდა ბრაუზერში\n\n2. ზედა მარჯვენა კუთხეში დააჭირეთ 'Connect'-ს\n\n3. დაადასტურეთ ავტორიზაცია საიტზე თქვენი საფულის ამომჩნევა ფანჯარაში \n\n<i><b>*თუ საიტი არ იხსნება, ჩართეთ პროგრამა 3 ასოთი (რომელიც საშუალებას მოგცემთ შეხვიდეთ საიტზე)</b></i>\n\n👇🏼 ან გამოიყენეთ ქვემოთ მოცემული ღილაკები საფულეში ავტომატურად გადასასვლელად და საჭირო გვერდის გასახსნელად`,
    your_wallet: "💼 თქვენი კრიპტო საფულე\n\n📌 მისამართი ქსელში (BEP20)",
    install_wallet:
      "👍🏼 შესანიშნავი არჩევანი! ვიწყებთ სწავლას:\n\n💵 Web3 და DeFi სამყაროში პირველ რიგში საჭიროა საკუთარი პირადი კრიპტო საფულე, ახლავე ვაინსტალირებთ მას:\n\n1. გადადით <b>MetaMask</b>-ის ოფიციალურ ვებსაიტზე\n\n2. დააინსტალირეთ აპლიკაცია თქვენს ტელეფონზე\n\n3. ვქმნით საფულეს და აუცილებლად ვწერთ seed-ფრაზას საიმედო ადგილას\n\n4. ვაკონფიგურირებთ BSC - Binance Smart Chain (BEP20) ქსელს\n\n5. ვკოპირებთ ჩვენი საფულის საჯარო მისამართს 0x.............\n\n6. გამოგვიგზავნეთ ეს მისამართი შეტყობინებით ქვემოთ მოცემულ ველში 👇🏼",
    loading_balance: "⏳ ვიღებთ ინფორმაციას ბალანსის შესახებ...",
    refresh: "🔄 განახლება",
    bnb_balance: "ბალანსი:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "ტოკენების ბალანსი",
    wallet_not_configured: "❌ საფულე არ არის კონფიგურირებული",
    send_usdt: "💸 USDT-ის გაგზავნა",
    check_my_investment: "💸 USDT-ის გაგზავნა",
    error_amount_not_selected: "❌ შეცდომა: თანხა არ არის არჩეული",
    error_wallet_not_configured: "❌ შეცდომა: საფულე არ არის კონფიგურირებული",
    back_to_amount_selection: "◀️ უკან თანხის არჩევანზე",
    configure_wallet: "⚙️ საფულის კონფიგურაცია",
    your_mentor: (mentor) => `თქვენი მენტორი: ${mentor}`,
    write_to_mentor: "✉️ მენტორს დაწერა",
    what_is_bitnest:
      "🏗 <b>რა არის BitNest</b>\nგამჭვირვალე ოპერაციები, თქვენი სახსრების კონტროლი.",
    defi_basics:
      "📊 DeFi-ის საფუძვლები.\nშემდეგ - როგორ არის მოწყობილი ინვესტიცია პულებში.",
    liquidity_pool_text:
      "💎 ლიკვიდურობის პული\n\n💵 აქ შეგიძლიათ გაგზავნოთ USDT ლიკვიდურობის პულში და მიიღოთ ბონუსები.\n\nაირჩიეთ მოქმედება:",
    my_investments_empty: "📊 თქვენ ჯერ არ გაქვთ ინვესტიციები.",
    investment_saved: "✅ მონაცემები შენახულია",
    investment_return_received: (amount) =>
      `თქვენ მიიღეთ თქვენი ცირკულაცია <b>${amount}$</b>`,
    congrats_profit: "გილოცავთ მოგების მიღებას!",
    referral_reward_received: "თქვენ მიიღეთ რეფერალური ანაზღაურება!",
    back_to_main_menu: "🏠 მთავარ მენიუში",
    user: "მომხმარებელი",
    amount: "თანხა",
    congrats_referral_earned: "გილოცავთ! თქვენ მიიღეთ რეფერალური ანაზღაურება!",
    balance_replenished: (amount) => `თქვენი ბალანსი შეივსო ${amount} USDT-ით`,
    referral_reward_received_amount: (amount) =>
      `თქვენ მიიღეთ რეფერალური ანაზღაურება ${amount}`,
    you_have_inactive_levels: "თქვენ გაქვთ არააქტივირებული დონეები!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `${amount} USDT-ის გაგზავნისას შეგიძლიათ გაააქტიუროთ დონეები: ${levels}`,
    activate_levels_to_earn:
      "გაააქტიურეთ დონეები რეფერალებისგან შემოსავლის მისაღებად!",
    new_levels_activated: (levels) => `აქტივირებულია ახალი დონეები: ${levels}`,
    now_earn_from_levels:
      "ახლა თქვენ იღებთ შემოსავალს თქვენი გუნდის ამ დონეებიდან!",
    invalid_tx_hash_contact_support:
      "❌ TX Hash არასწორია. გთხოვთ, დაუკავშირდეთ მხარდაჭერას.",
    congrats_liquidity_pool_success:
      "გილოცავთ! თქვენი გაგზავნა ლიკვიდურობის პულში წარმატებით დასრულდა!",
    transaction_details: "ტრანზაქციის დეტალები",
    block: "ბლოკი",
    period: "ტერმინი",
    days: "დღე",
    not_specified: "არ არის მითითებული",
    go_to_portfolio_for_details:
      'გადადით "ჩემი პორტფელი"-ში დეტალების სანახავად',
    level_deactivated_title: "დონე დეაქტივირებულია",
    level: "დონე",
    has_been_deactivated: "დეაქტივირდა",
    liquidity_pool_completed_reason:
      "თქვენი გაგზავნა ლიკვიდურობის პულში წარმატებით დასრულდა!",
    go_to_portfolio_for_details: 'გადადით "ჩემი პორტფელი"-ში დეტალებისთვის',
    total_return: "დაბრუნების მთლიანი თანხა",
    return_date: "დაბრუნების თარიღი",
    error_updating_pool_status:
      "❌ შეცდომა პულში გაგზავნის სტატუსის განახლებისას. მიმართეთ მხარდაჭერას.",

    transaction_not_found_after_attempts: (txHash) =>
      `❌ ტრანზაქცია ვერ მოიძებნა რამდენიმე მცდელობის შემდეგ.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `შესაძლო მიზეზები:\n` +
      `• ტრანზაქცია ქსელის მიერ ჯერ არ არის დადასტურებული\n` +
      `• არასწორი TX Hash\n` +
      `• BSC ქსელთან დაკავშირებული პრობლემები\n\n` +
      `გთხოვთ, შეამოწმოთ TX Hash და სცადოთ ხელახლა ან მიმართოთ მხარდაჭერას.`,
    transaction_wrong_address: (actualTo) =>
      `❌ ტრანზაქცია გაიგზავნა არასწორ მისამართზე!\n\n` +
      `▸ მიღებული მისამართი: ${actualTo}\n` +
      `▸ მოსალოდნელი მისამართი: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `გთხოვთ, დარწმუნდეთ, რომ USDT-ს აგზავნით პულის სწორ მისამართზე.`,
    transaction_not_confirmed: (status) =>
      `❌ ტრანზაქცია არ არის დადასტურებული. სტატუსი: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "გთხოვთ, შეამოწმოთ ტრანზაქციის სტატუსი BscScan-ში და საჭიროების შემთხვევაში მიმართოთ მხარდაჭერას.",
    error_checking_transaction:
      "❌ შეცდომა ტრანზაქციის შემოწმებისას. სცადეთ მოგვიანებით ან მიმართეთ მხარდაჭერას.",
    investment_confirmation:
      `💰 <b>პულში გაგზავნის დადასტურება</b>\n\n` +
      `📊 <b>ტრანზაქციის დეტალები:</b>\n` +
      `▸ თანხა: <b>{amount} USDT</b>\n` +
      `▸ ვადა: <b>{period} დღე</b>\n` +
      `▸ მომგებიანობა: <b>{profitPercent}%</b>\n` +
      `▸ მოსალოდნელი შემოსავალი: <b>{expectedProfit} USDT</b>\n` +
      `▸ დაბრუნების მთლიანი თანხა: <b>{totalReturn} USDT</b>\n` +
      `▸ დაბრუნების თარიღი: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>ინსტრუქცია გაგზავნისთვის:</b>\n\n` +
      `1. გახსენით MetaMask აპლიკაცია\n\n` +
      `2. გადადით Bitnest-ის ოფიციალურ ვებსაიტზე\n\n` +
      `3. ზედა მარჯვენა კუთხეში დააჭირეთ <b>"Connect"</b> - <i>(თუ ხედავთ საფულის ხატულას, გადადით შემდეგ ეტაპზე)</i>\n\n` +
      `4. დააჭირეთ საფულის ხატულას და გადადით Loop (მარყუჟი) განყოფილებაში\n\n` +
      `5. შეიყვანეთ გაგზავნის თანხა\n\n` +
      `6. აირჩიეთ გაგზავნის ვადა\n\n` +
      `7. დააჭირეთ ღილაკს 'Circulation' (ცირკულაცია)\n\n` +
      `8. დაადასტურეთ გაგზავნა საიტზე თქვენი საფულის ამომჩნევა ფანჯარაში\n\n` +
      `👇🏼 ან გამოიყენეთ ქვემოთ მოცემული ღილაკები საფულეში ავტომატურად გადასასვლელად და საჭირო გვერდის გასახსნელად`,
    send_metamask_mobile: "🦊 გაგზავნა - MetaMask 📲",
    transaction_search_timer: `⚠️ ველოდებით თქვენ გაგზავნას, ინსტრუქცია ზემოთ\n\n<b>🔎 გაგზავნის შემდეგ, ვიწყებთ ტრანზაქციის ძიებას ...</b>\n⏰ <b>თქვენი ტრანზაქციის გაგზავნისა და ძიების ვადა:</b> 20:00 წთ...\n\n`,
    cancel_search: "❌ ძიების გაუქმება",
    failed_delete_timer_message:
      "ვერ მოხერხდა ტაიმერი-ის მქონე შეტყობინების წაშლა: {error}",
    investment_details_base:
      `💰 <b>პულში გაგზავნის დადასტურება</b>\n\n` +
      `📊 <b>ტრანზაქციის დეტალები:</b>\n` +
      `▸ თანხა: <b>{amount} USDT</b>\n` +
      `▸ ვადა: <b>{period} დღე</b>\n` +
      `▸ სტატუსი: <b>გაუქმებულია</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>ტრანზაქციის ძიება გაუქმებულია მომხმარებლის მიერ</b>",
    failed_update_message:
      "ვერ მოხერხდა შეტყობინების განახლება, ვუგზავნით ახალს: {error}",
    transaction_search_cancelled_log:
      "✅ ტრანზაქციის ძიება გაუქმდა მომხმარებლისთვის {userId}",
    no_active_transaction_search: "❌ აქტიური ტრანზაქციის ძიება ვერ მოიძებნა",
    error_cancelling_search: "❌ შეცდომა ძიების გაუქმებისას: {error}",
    error_cancelling_search_user: "❌ მოხდა შეცდომა ძიების გაუქმებისას",
    processing_found_transaction:
      "🔄 ნაპოვნი ტრანზაქციის დამუშავება მომხმარებლისთვის {userId}",
    investment_in_process_not_found:
      "ინვესტიცია სტატუსით in_process ვერ მოიძებნა",
    failed_update_investment_status:
      "ვერ მოხერხდა ინვესტიციის სტატუსის განახლება",
    failed_delete_previous_message:
      "ვერ მოხერხდა წინა შეტყობინების წაშლა: {error}",
    transaction_confirmed_message:
      `💰 <b>პულში გაგზავნის დადასტურება</b>\n\n` +
      `📊 <b>ტრანზაქციის დეტალები:</b>\n` +
      `▸ თანხა: <b>{amount} USDT</b>\n` +
      `▸ ვადა: <b>{period} დღე</b>\n` +
      `▸ მოსალოდნელი შემოსავალი: <b>{expectedProfit} USDT</b>\n` +
      `▸ დაბრუნების მთლიანი თანხა: <b>{totalReturn} USDT</b>\n` +
      `▸ დაბრუნების თარიღი: <b>{returnDate}</b>\n\n` +
      `✅ <b>ტრანზაქცია დადასტურებულია!</b>\n` +
      `📊 <b>ტრანზაქციის ჰეში:</b> <code>{hash}</code>\n` +
      `💰 <b>ფაქტობრივი თანხა:</b> {actualAmount} USDT\n` +
      `⏰ <b>დადასტურებულია:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ ვააქტიურებთ მომხმარებლის დონეებს ინვესტიციის თანხის მიხედვით",
    user_prefix: "მომხმარებელი_",
    notification_sent_to_referrer:
      "✅ ნოტიფიკაცია გაიგზავნა რეფერერისთვის {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ რეფერერი ვერ მოიძებნა ან არ აქვს საჭირო მონაცემები",
    user_has_no_referrer: "⚠️ მომხმარებელს არ აქვს რეფერერი",
    error_sending_referral_notification:
      "შეცდომა რეფერალისთვის ნოტიფიკაციის გაგზავნისას: {error}",
    error_sending_missed_rewards:
      "შეცდომა გაცემული ჯილდოების შესახებ ნოტიფიკაციების გაგზავნისას: {error}",
    error_sending_missed_referrals:
      "შეცდომა გაცემული რეფერალების შესახებ ნოტიფიკაციის გაგზავნისას: {error}",
    level_activation_notifications_sent:
      "🎯 დონეების აქტივაციის შეტყობინებები გაიგზავნა დონეებისთვის: {levels}",
    error_sending_level_activation:
      "შეცდომა დონეების აქტივაციის შეტყობინების გაგზავნისას: {error}",
    transaction_processed_successfully:
      "✅ ტრანზაქცია დამუშავდა მომხმარებლისთვის {userId}",
    error_processing_transaction:
      "❌ შეცდომა ტრანზაქციის დამუშავებისას მომხმარებლისთვის {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>ტრანზაქციის დამუშავების შეცდომა</b>\n\n` +
      `TX Hash: {hash}\n` +
      `შეცდომა: {error}\n\n` +
      `გთხოვთ, მიმართოთ მხარდაჭერას.`,
    error_sending_notification: "შეცდომა ნოტიფიკაციის გაგზავნისას: {error}",
    new_levels_activated: "აქტივირებულია ახალი დონეები!",
    activated_levels: "აქტივირებული დონეები",
    levels_activation_benefit:
      "ახლა თქვენ იღებთ შემოსავალს თქვენი გუნდის ამ დონეებიდან!",
    referral_made_transaction: "თქვენმა რეფერალმა განახორციელა გაგზავნა!",
    your_referral: "თქვენი რეფერალი",
    congrats_referral_reward: "გილოცავთ! თქვენ მიიღეთ რეფერალური ანაზღაურება!",
    // =========================
    // პარტნიორის პროგრამა
    // =========================
    affiliate_text: `👥 თქვენი პარტნიორის ქსელი, {username}\n\nთქვენი გუნდის 17 დონე და შემოსავლის მიღება თითოეული დონიდან თქვენი რეფერალების შემოსავლიანობიდან\n\n<b>1 დონე</b> - 20%\n<b>2 დონე</b> - 10%\n<b>3 - 7 დონე</b> - 5%\n<b>8 - 10 დონე</b> - 3%\n<b>11 - 17 დონე</b> - 1%\n\nთითოეული დონის ასაქტიურებლად, თქვენი წილი პულში უნდა შეესაბამებოდეს <b>დონის № * 100$</b>\nყველა დონის ასაქტიურებლად, თქვენი პირადი წილი პულში = <b>1700$</b>\n\n📊 ზოგადი სტატისტიკა დონეების მიხედვით:\n{pools.levels}\n\n💰 სულ: 0 რეფ. | 0.000 USDT`,
    your_referral_sent: "თქვენმა რეფერალმა გაგზავნა შეასრულა!",
    missed_referral_reward: (missedAmount, level) =>
      `თქვენ გაგცემათ რეფ.ანაზღაურება ${missedAmount}$-ი ${level} დონიდან`,
    activate_level_to_earn:
      "გაააქტიურეთ დონე, რომ მიიღოთ შემოსავალი მთელი სტრუქტურიდან!",
    check_subscription: "✅ მე ვუწედი(ვუწედი)",
    website_ref:
      '🎉 გილოცავთ წარმატებული რეგისტრაციისთვის!\n\n🔗 ამ ეტაპზე თქვენ უნდა დაამატოთ თქვენი პარტნიორის ბმული Bitnest-ის პირადი კაბინეტიდან\n\n1. გადადით Bitnest-ის ოფიციალურ ვებსაიტზე\n\n2. ზედა მარჯვენა კუთხეში დააჭირეთ "<b>Connect</b>"<i> - (თუ ხედავთ საფულის ხატულას, გადადით შემდეგ ეტაპზე)</i>\n\n3. დააჭირეთ "<b>მეგობრების მოწვევა</b>"\n\n4. დააჭირეთ "<b>ჩემი ბმულის კოპირება</b>"\n\n5. გამოგვიგზავნეთ იგი ქვემოთ მოცემულ ველში 👇🏼',

    // =========================
    // გათამაშებები და Events
    // =========================
    raffle: "🎁 გათამაშება 🎁",
    daily_raffle: "🎉 ყოველდღიური გათამაშება!",
    current_prize: "🏆 პრიზი",
    participants: "👥 უკვე მონაწილეობენ ",
    end_time: "⏰ შედეგები",
    raffle_text: `✅ <b>მონაწილეობის პირობები:</b>\n• მინიმალური აქტიური წილი პულში: 10 USDT\n• ერთი მცდელობა ერთ ადამიანზე\n\n`,
    raffle_requirement:
      "გათამაშებაში მონაწილეობისთვის საჭიროა გქონდეთ აქტიური წილი პულში",
    raffle_wallet_not_set: "⚠️ ჯერ დააკონფიგურირეთ საფულე",
    raffle_already_registered:
      "✅ თქვენ წარმატებით დარეგისტრირდით მიმდინარე რაუნდში!",
    successfully_registered: "თქვენ წარმატებით დარეგისტრირდით გათამაშებაში!",
    registration_failed: "რეგისტრაცია ვერ მოხერხდა",
    participate_button: "🎟 მონაწილეობა",
    no_active_raffle: "ამჟამად არ არის აქტიური გათამაშება.",
    already_registered_in_raffle:
      "✅ თქვენ უკვე დარეგისტრირდით მიმდინარე გათამაშებაში!",
    new_raffle_started:
      "💰 პრიზი: {prize} USDT\n" + "⏰ დასრულებამდე: {hours} საათი\n\n",
    register_in_raffle: "🤖 გათამაშებაში რეგისტრაცია",
    raffle_error: "❌ შეცდომა: {error}",

    // საფულის განყოფილებიდან
    raffle_min_investment_required:
      "გათამაშებაში მონაწილეობისთვის საჭიროა აქტიური წილი პულში 10$-დან\n\n" +
      "გაგზავნეთ USDT პულში, რომ მიიღოთ მონაწილეობის შესაძლებლობა.",
    raffle_registration_success:
      "თქვენ წარმატებით დარეგისტრირდით!\n\nახლა თქვენ მონაწილეობთ გათამაშებაში!",
    eligible_to_participate:
      "💪 თქვენ გაქვთ უფლება დარეგისტრირდეთ გათამაშებაში",
    raffle_registration_error: "❌ რეგისტრაციის შეცდომა: {error}",

    // მენიუდან და ნავიგაციიდან (რეგისტრაციის შესამოწმებლად)
    not_registered_yet:
      "❌ თქვენ ჯერ არ დარეგისტრირდით. დააჭირეთ თქვენი საფულის ღილაკს რეგისტრაციისთვის.",
    register_button: "📝 რეგისტრაცია",
    registration_check_error: "❌ შეცდომა რეგისტრაციის შემოწმებისას",
    registering_wallet: "🔄 ვრეგისტრირებ თქვენს საფულეს...",
    registration_success:
      "✅ თქვენ წარმატებით დარეგისტრირდით მიმდინარე რაუნდში!",
    registration_error: "❌ რეგისტრაციის შეცდომა",
    try_later_or_contact_admin:
      "სცადეთ მოგვიანებით ან მიმართეთ ადმინისტრატორს.",
    registration_process_error: "❌ შეცდომა რეგისტრაციის პროცესში",
    mentor_not_found: "❌ <b>მენტორი ვერ მოიძებნა</b>",
    mentor_not_found_description:
      "თქვენ არ გაქვთ მინიჭებული მენტორი. გთხოვთ, მიმართოთ მხარდაჭერას.",
    // =========================
    // დანარჩენი
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 თქვენ გაქვთ ახალი რეფერალი @${username}`,
    friend: "მეგობარი",
    welcome_error:
      "👋 კეთილი იყოს თქვენი მობრძანება! მოხდა შეცდომა მენიუს ჩატვირთვისას.",
    link_subscription_pending:
      "⌛ <b>მოლოდინშია გამოწერის გადახდა</b>\n\n" +
      "თქვენი გამოწერა ელოდება გადახდის დადასტურებას. " +
      "თუ უკვე გადაიხადეთ, დააჭირეთ ქვემოთ მოცემულ ღილაკს სტატუსის შესამოწმებლად.",
    check_payment: "🔄 გადახდის შემოწმება",
    create_new_payment: "💳 ახალი გადახდის შექმნა",
    link_subscription_required:
      "❌ <b>ბმულების პარამეტრებთან წვდომა გამოწერით</b>\n\n" +
      "✅ რეფერალური ბმულის კონფიგურაციისა და თქვენი ბოტის ასაქტიურებლად აუცილებელია შეიძინოთ გამოწერა 10$/თვეში.\n\n",
    buy_subscription: "💳 გამოწერის ყიდვა (10$/თვეში)",
    link_settings_error: "❌ შეცდომა ბმულების პარამეტრების ჩატვირთვისას",
    setup_wallet_first: "❌ ჯერ დააკონფიგურირეთ საფულე პარამეტრებში",
    custom_amount_message:
      "💰 <b>შეიყვანეთ თქვენი თანხა პულში გასაგზავნად </b>\n\n" +
      "მინიმალური თანხა: <b>1 USDT</b>\n" +
      "მაქსიმალური თანხა: <b>100000000 USDT</b>\n\n" +
      "📝 <i>გამოგვიგზავნეთ რიცხვი - თანხა USDT-ში ქვემოთ მოცემულ ველში</i>",

    // =========================
    // მენიუ და ნავიგაცია
    // =========================
    menu_title: `🎉 <b>კეთილი იყოს თქვენი მობრძანება, {username}</b>\n\n🚀 <b>BitnestRus Bot - თქვენი საიმედო ასისტენტი და გუნდური ინსტრუმენტი</b>\n\n✨ <b>ბოტის შესაძლებლობები:</b>\n• 🎁 ფულადი პრიზების გათამაშებები\n• 💰 თქვენი საფულის ფინანსური სტატისტიკა\n• 🌊 ინსტრუქციები ლიკვიდურობის პულთან მუშაობის შესახებ\n• 👥 მრავალდონიანი პარტნიორის პროგრამა\n• 📊 ანალიტიკა და ინფორმირება\n\n👇 აირჩიეთ განყოფილება მენიუში:\n`,
    back: "◀️ უკან",
    next: "➡️ შემდეგი",
    nextreg: " ✍🏼 მე გავიარე(გავიარე) რეგისტრაცია",
    my_wallet: "💰 ჩემი საფულე",
    liquidity_pool: "🌊 ლიკვიდურობის პული",
    my_portfolio: "💼 ჩემი პორტფელი",
    presentation: "🎥 პრეზენტაცია",
    video_instructions: "📚 ვიდეო ინსტრუქციები",
    official_website: "🔗 ოფიციალური საიტი",
    oficial_site: "✅ ოფიციალური საიტი",
    affiliate: "👥 პარტნიორის პროგრამა",
    settings: "⚙️ პარამეტრები",
    admin: "🔧 ადმინისტრირება",
    settings_title:
      "⚙️ პარამეტრები\n\nაქ შეგიძლიათ დააკონფიგურიროთ თქვენი ბმულები\n\nაირჩიეთ მოქმედება:",
    start_education: "🎓 სწავლის დაწყება",
    download_metamask: "🦊 ჩამოტვირთვა - MetaMask",
    register_metamask: "🦊 რეგისტრაცია - MetaMask",
    register_metamask_mobile: "🦊 რეგისტრაცია - MetaMask",
    invest_now_message:
      `💰 <b>USDT-ის გაგზავნა ლიკვიდურობის პულში</b>\n\n` +
      `<b>მომგებიანობა ვადების მიხედვით:</b>\n` +
      `• <b>1 დღე</b> - 0.4%\n` +
      `• <b>7 დღე</b> - 4%\n` +
      `• <b>14 დღე</b> - 9.5%\n` +
      `• <b>28 დღე</b> - 24%\n\n` +
      `<i>ყველა სახსარი <b>(USDT თანხა + ბონუსები)</b> ავტომატურად ბრუნდება მითითებული ვადის შემდეგ თქვენს საფულეში</i>\n\n` +
      `📌 <b>თქვენი ბალანსი:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>აირჩიეთ გაგზავნის თანხა პულში:</b>`,
    custom_amount: "🗂 საკუთარი თანხა",
    error_getting_data: "❌ შეცდომა მონაცემების მიღებისას, სცადეთ ხელახლა.",
    choose_period_message:
      `🔄 თქვენ აირჩიეთ თანხა <b>{amount} USDT</b>. აირჩიეთ გაგზავნის ვადა პულში:\n\n` +
      `<b>მომგებიანობა ვადების მიხედვით:</b>\n` +
      `• <b>1 დღე</b> - 0.4%\n` +
      `• <b>7 დღე</b> - 4%\n` +
      `• <b>14 დღე</b> - 9.5%\n` +
      `• <b>28 დღე</b> - 24%\n\n` +
      `<i>ყველა სახსარი <b>(USDT თანხა + ბონუსები)</b> ავტომატურად ბრუნდება მითითებული ვადის შემდეგ თქვენს საფულეში</i>\n\n` +
      `👇 <b>აირჩიეთ გაგზავნის ვადა პულში:</b>`,
    main_menu: "🏠 მთავარ მენიუში",
    timer_message_id_not_found: "❌ timer_message_id ვერ მოიძებნა",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ ველოდებით თქვენ გაგზავნას, ინსტრუქცია ზემოთ\n\n<b>🔎 გაგზავნის შემდეგ, ვიწყებთ ტრანზაქციის ძიებას ...</b>\n\n⏰ <b>თქვენი ტრანზაქციის გაგზავნისა და ძიების ვადა:</b> ${timeString}  წთ...\n\n`,
    timer_error: "❌ შეცდომა ტაიმერი-ში: {error}",
    timer_stopped_message_not_found:
      "⏹️ ტაიმერი შეჩერდა: შეტყობინება ვერ მოიძებნა ან недоступна",
    timer_minor_error_continue: "⚠️ ტაიმერი-ის მცირე შეცდომა, ვაგრძელებთ...",
    transaction_timeout_message:
      "⏰ <b>ტრანზაქციის ძიების დრო ამოიწურა</b>\n\n" +
      "❌ ვერ მოხერხდა ტრანზაქციის დადასტურების პოვნა გამოყოფილ დროში.\n\n" +
      "შესაძლო მიზეზები:\n" +
      "• ტრანზაქცია ქსელის მიერ ჯერ არ არის დადასტურებული\n" +
      "• არასწორი TX Hash\n" +
      "• BSC ქსელთან დაკავშირებული პრობლემები\n\n" +
      "გთხოვთ, შეამოწმოთ ტრანზაქციის სტატუსი BscScan-ში და სცადოთ ხელახლა.",
    transaction_timeout_log:
      "⏰ ტრანზაქციის დროის ამოწურვა მომხმარებლისთვის {userId}",
    transaction_timeout_error:
      "❌ შეცდომა ტრანზაქციის დროის ამოწურვის დამუშავებისას: {error}",
    transaction_not_found_try_again:
      "❌ ტრანზაქცია ვერ მოიძებნა. სცადეთ თავიდან დაწყება.",
    awaiting_transaction_check:
      "🔍 <b>დაელოდეთ ტრანზაქციის შემოწმებას...</b>\n\n" +
      "ბოტი შეამოწმებს ბლოკჩეინს 2-5 წუთის განმავლობაში.\n" +
      "თქვენ მიიღებთ შეტყობინებას შედეგის შესახებ.",
    transaction_not_found_message:
      `❌ <b>ტრანზაქცია ვერ მოიძებნა</b>\n\n` +
      `შესაძლო მიზეზები:\n` +
      `• ტრანზაქცია ქსელის მიერ ჯერ არ არის დადასტურებული\n` +
      `• გაიგზავნა არა პულის მისამართზე\n` +
      `📞 თუ USDT გაგზავნეთ, მიმართეთ მხარდაჭერას\n` +
      `🔍 TX Hash: მიუთითეთ ტრანზაქციის ჰეში`,
    transaction_not_found_notification_sent:
      "✅ ტრანზაქციის არარსებობის შეტყობინება გაიგზავნა მომხმარებელთან {userId}",
    request_tx_hash_message:
      "📝 <b>გთხოვთ, შეიყვანოთ ტრანზაქციის ჰეში (TX Hash):</b>\n\n" +
      "USDT-ის გაგზავნის შემდეგ დააკოპირეთ TX Hash თქვენი საფულიდან და გამოგვიგზავნეთ იგი აქ.",
    error_requesting_tx_hash: "შეცდომა TX Hash-ის მოთხოვნისას: {error}",
    presentation_message:
      `📊 <b>პრეზენტაცია</b>\n\n` +
      `🎥 დეტალური ვიდეო პრეზენტაცია, რომელიც დაგეხმარებათ გაიგოთ პლატფორმის და ამ ინსტრუმენტის უპირატესობები\n\n`,
    presentation_error: "პრეზენტაციის შეცდომა: {error}",
    presentation_load_error: "❌ შეცდომა პრეზენტაციის ჩატვირთვისას",
    user_not_determined: "❌ ვერ მოხერხდა მომხმარებლის განსაზღვრა",
    not_configured: "არ არის კონფიგურირებული",
    from_your_inviter: `\n👤 თქვენი მომმართველისგან: {name}`,
    system_video_instruction: `\n📋 სისტემური ვიდეო ინსტრუქცია`,
    video_instructions_header: "🎥 <b>ვიდეო ინსტრუქციები</b>",
    video_instructions_description:
      "📚 დეტალური ვიდეო კურსი, სადაც თქვენ გაიგებთ სისტემასთან მუშაობის ყველა დეტალს და ისწავლით ლიკვიდურობის პულთან ურთიერთქმედებას",
    video_link_available: `🔗 <b>ვიდეოს ბმული:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>ბმული არ არის ხელმისაწვდომი</b>\n\n`,
    video_instruction_error: "ვიდეო ინსტრუქციის შეცდომა: {error}",
    video_instruction_load_error: "❌ შეცდომა ვიდეო ინსტრუქციების ჩატვირთვისას",
    system_link: "🌐 სისტემური ბმული",
    from_your_mentor: "👤 თქვენი მენტორისგან",
    your_link: "🌐 თქვენი ბმული",
    visit_official_website:
      "ეწვიეთ პლატფორმის ოფიციალურ საიტს და შეისწავლეთ სერვისთან მუშაობის ყველა დეტალი და წესი",
    link: "ბმული",
    open_metamask: "🦊 MetaMask-ის გახსნა",
    open_in_browser: "💻 გახსნა კომპიუტერის ბრაუზერში",
    website_error: "❌ შეცდომა საიტის ინფორმაციის ჩატვირთვისას",
    your_investment_portfolio: "თქვენი აქტიური წილის პორტფელი პულში",
    transaction: "ტრანზაქცია",
    term: "ვადა",
    profitability: "მომგებიანობა",
    time_left: "დასრულებამდე",
    d: "დ",
    h: "ს",
    expected_profit: "მოსალოდნელი შემოსავალი",
    type: "ტიპი",
    incoming_transaction: "შემომავალი ტრანზაქცია",
    refund: "სახსრების დაბრუნება",
    status: "სტატუსი",
    active: "აქტიური",
    archived: "არქივში გაგზავნა",
    returned: "დაბრუნებულია",
    total_statistics: "ზოგადი სტატისტიკა",
    total_active_amount: "აქტიურების მთლიანი თანხა",
    page: "გვერდი",
    of: "დან",
    portfolio_error: "⚠️ შეცდომა პორტფელის ჩატვირთვისას",
    congrats_on_profit: "გილოცავთ მოგების მიღებას!",
    bot_not_available: "ბოტი არ არის ხელმისაწვდომი ნოტიფიკაციის გასაგზავნად",
    investment_notification_sent:
      "ინვესტიციების დაბრუნების შეტყობინება გაიგზავნა მომხმარებელთან",
    investment_notification_error:
      "შეცდომა ინვესტიციების დაბრუნების შეტყობინების გაგზავნისას:",
    check_old_transactions: "🔍 ძველი ტრანზაქციების შემოწმება",
    checking_old_transactions: "ძველ ტრანზაქციებს ვამოწმებთ",
    this_may_take_seconds: "ეს შეიძლება რამდენიმე წამი დასჭირდეს...",
    wallet_not_found: "❌ საფულე ვერ მოიძებნა. დააკავშირეთ იგი პროფილში.",
    check_completed: "შემოწმება დასრულებულია",
    added_to_portfolio: "დაემატა პორტფელს",
    no_transactions_found: "ტრანზაქციები ვერ მოიძებნა",
    target_wallet: "სამიზნე საფულე",
    found_transactions: "ნაპოვნია ტრანზაქციები",
    already_added: "უკვე დამატებულია",
    added: "დაემატა",
    summary: "შეჯამება",
    new_added: "ახალი დამატებული",
    already_exist: "უკვე არსებობს",
    total_checked: "სულ შემოწმებული",
    check_transactions_error: "შეცდომა ტრანზაქციების შემოწმებისას",
    transactions: "ტრანზაქცია",
    your_active_pool: "<b>თქვენი აქტიური წილი პულში</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>თქვენი აქტიური წილი პულში:</b> ${amount}$`,
    your_personal_share: "თქვენი მთლიანი წილი პულში",
    level_activation_title: "პარტნიორის პროგრამის დონეების აქტივაცია",
    affiliate_network_header: (username) =>
      `👥 <b>თქვენი პარტნიორის ქსელი, ${username}</b>`,
    affiliate_network_description:
      "თქვენი გუნდის 17 დონე და შემოსავლის მიღება თითოეული დონიდან თქვენი რეფერალების შემოსავლიანობიდან",
    level_percentages:
      `<b>• 1 დონე</b> - 20%\n` +
      `<b>• 2 დონე</b> - 10%\n` +
      `<b>• 3-7 დონე</b> - 5%\n` +
      `<b>• 8-10 დონე</b> - 3%\n` +
      `<b>• 11-17 დონე</b> - 1%`,
    level_activation_requirements:
      "თითოეული დონის ასაქტიურებლად თქვენი წილი პულში უნდა შეესაბამებოდეს <b>დონის № * 100$</b>",
    all_levels_activation_requirement:
      "ყველა დონის ასაქტიურებლად, თქვენი პირადი წილი პულში = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>თქვენი პირადი წილი პულში:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>აქტივირებული დონეები:</b> ${count}/17`,
    level_statistics: "📊 <b>სტატისტიკა დონეების მიხედვით:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} დონე. ${level}: ${count} კაცი. | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} დონე. ${level}: რეფერალები არაა`,
    no_level_data: "<i>ჯერ არ არის მონაცემები დონეების მიხედვით</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>სულ:</b> ${referrals} რეფ. | ${investments} USDT`,
    my_partners: "📋 ჩემი პარტნიორები",
    my_team: "🧏‍♂️ ჩემი გუნდი",
    ref_link: "🔗 რეფერალური ბმული",
    enable_levels: "🔓 დონეების ჩართვა",
    search: "🔍 ძიება",
    statistics: "📈 სტატისტიკა",
    affiliate_error: "პარტნიორის პროგრამის შეცდომა: {error}",
    affiliate_load_error: "⚠️ შეცდომა პარტნიორის პროგრამის ჩატვირთვისას",
    buy_subscription: "💰 გამოწერის შეძენა",
    subscription_text:
      "გამოწერის შესაძენად მიმართეთ კრიპტობოტს:\n\nგამოწერის გადახდის შემდეგ თქვენ მიიღებთ წვდომას რეფერალურ პროგრამაზე და სხვა ექსკლუზიურ შესაძლებლობებზე.",
    go_to_cryptobot: "📲 კრიპტობოტზე გადასვლა",
    check_subscription_status: "🔄 გამოწერის შემოწმება",
    subscription_active:
      "✅ თქვენი გამოწერა აქტიურია! ახლა თქვენ შეგიძლიათ რეფერალების მოწვევა.",
    subscription_inactive:
      "❌ გამოწერა ჯერ არ არის აქტიური. გთხოვთ, დაასრულოთ გადახდა ან მიმართოთ მხარდაჭერას.",
    subscription_check_error: "❌ შეცდომა გამოწერის სტატუსის შემოწმებისას",
    data_not_found: "მონაცემები ვერ მოიძებნა. განაახლეთ პორტფელი",
    last_page: "ეს ბოლო გვერდია",
    first_page: "ეს პირველი გვერდია",
    page_load_error: "შეცდომა გვერდის ჩატვირთვისას",
    edit_message_error:
      "ვერ მოხერხდა შეტყობინების რედაქტირება, ვუგზავნით ახალს:",
    referral_access_subscription:
      "❌ <b>წვდომა რეფერალურ პროგრამაზე გამოწერით</b>\n\n✅ რეფერალური ბმულის კონფიგურაციისა და თქვენი ბოტის ასაქტიურებლად აუცილებელია შეიძინოთ გამოწერა 10$/თვეში.",
    referral_invite_text:
      "👋🏻 გამარჯობა! თუ გსურთ მიიღოთ პასიური შემოსავალი ტოპ-1 ბირჟიდან, შემოუერთდით ჩემი ბმულით 👆",
    your_referral_link: "თქვენი რეფერალური ბმული",
    referral_invite_description:
      "💡 მოიწვიეთ მეგობრები და მიიღეთ შემოსავალი მათი აქტიური წილებიდან პულში!",
    share_link: "📢 ბმულის გაზიარება",
    referral_link_error: "❌ შეცდომა რეფერალური ბმულის ჩატვირთვისას",
    link_copied: "📋 რეფერალური ბმული დაკოპირდა:",
    share_with_friends: "ახლა თქვენ შეგიძლიათ გააზიაროთ იგი მეგობრებთან!",
    link_settings_title: "⚙️ თქვენი ბმულების პარამეტრები",
    link_settings_description: "ეს ბმულები ჩანს თქვენს რეფერალებს:",
    choose_link_to_change: "💡 აირჩიეთ ბმული შესაცვლელად:",
    change_video: "🎥 ვიდეოს შეცვლა",
    cancel_input: "❌ შეყვანის გაუქმება",
    link_access_subscription: "❌ წვდომა ბმულების პარამეტრებზე გამოწერით",
    subscription_required:
      "✅ რეფერალური ბმულის კონფიგურაციისა და თქვენი ბოტის ასაქტიურებისთვის საჭიროა გამოწერის შეძენა 10$/თვეში.",
    buy_subscription_button: "💳 გამოწერის ყიდვა (10$/თვეში)",
    payment_pending: "⌛ გამოწერის გადახდის მოლოდინში",
    payment_pending_description:
      "თქვენი გამოწერა ელოდება გადახდის დადასტურებას. თუ უკვე გადაიხადეთ, დააჭირეთ ქვემოთ მოცემულ ღილაკს სტატუსის შესამოწმებლად.",
    check_payment: "🔄 გადახდის შემოწმება",
    create_new_payment: "💳 ახალი გადახდის შექმნა",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ ყველა ბმული სისტემურ პარამეტრებამდე აღდგენილა",
    reset_links_error: "❌ ბმულების აღდგენისას მოხდა შეცდომა",
    subscription_payment_title: "💳 ბმულების კონფიგურაციის გამოწერის გადახდა",
    subscription_price: "ღირებულება: ",
    subscription_duration: "მოქმედების ვადა: ",
    pay_via_cryptobot: "🔗 გადახდა კრიპტობოტის მეშვეობით",
    check_payment: "🔄 გადახდის შემოწმება",
    cancel: "❌ გაუქმება",
    subscription_payment_error:
      "⚠️ გამოწერის შექმნისას მოხდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით.",
    subscription_description: "ბმულების კონფიგურაციის გამოწერა (1 თვე)",
    no_data_to_display: "❌ მონაცემები არ მოიძებნა",
    nothing_found_for_query: "მოთხოვნისთვის",
    no_referrals_on_levels: "თქვენ ჯერ არ გაქვთ რეფერალები დონეებზე",
    invested_in_pool: "გაგზავნილია პულში",
    found_referrals: "რეფერალები ნაპოვნია",
    subscription_activated: "✅ გამოწერა წარმატებით გააქტიურდა!",
    subscription_activated_description:
      "🎉 ახლა თქვენთვის ხელმისაწვდომია ბმულების კონფიგურაციისა და პარტნიორის სისტემის ყველა ფუნქცია.",
    payment_processing:
      "⌛ გადახდა დამუშავების პროცესშია. სცადეთ შეამოწმოთ მოგვიანებით.",
    invoice_expired: "❌ ინვოისის მოქმედების ვადა ამოიწურა.",
    payment_not_found: "❌ გადახდა არ მოიძებნა ან გაუქმებულია.",
    payment_check_error: "⚠️ გადახდის შემოწმებისას მოხდა შეცდომა.",
    payment_check_error_description:
      "გთხოვთ, სცადოთ მოგვიანებით ან დაუკავშირდეთ მხარდაჭერის სამსახურს.",
    try_again: "🔄 ხელახლა ცდა",
    new_payment: "💳 ახალი გადახდა",
    enter_presentation_link: "📊 შეიყვანეთ პრეზენტაციის ბმული:",
    enter_video_link: "🎥 შეიყვანეთ ვიდეო ინსტრუქციების ბმული:",
    enter_official_link: "🌐 შეიყვანეთ ოფიციალური საიტის ბმული:",
    referral_stats: "📊 სტატისტიკა დონეების მიხედვით",
    level: "დონე",
    referrals_count: "👥 რეფერალები:",
    total_invested: (amount) => `💰 გაგზავნილია პულში: ${amount} USDT`,
    search_referrals_prompt: "🔍 შეიყვანეთ მომხმარებლის სახელი საძიებლად:",
    no_referrals: "👥 თქვენ ჯერ არ გაქვთ რეფერალები",
    level_not_found: "❌ დონე არ მოიძებნა",
    your_referrals: "👥 თქვენი რეფერალები",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 გვერდი ${current} ${total}-დან`,
    no_referrals_on_level: "ამ დონეზე ჯერ არ არის რეფერალები",
    back_to_affiliate: "◀️ უკან პარტნიორის პროგრამაზე",
    your_personal_partners: "თქვენი პირადი პარტნიორები",
    id: "ID",
    too_many_partners_use_team:
      "ძალიან ბევრი პარტნიორია ჩვენებისთვის. სრული სიისთვის გამოიყენეთ 'ჩემი გუნდი' განყოფილება.",
    total_personal_partners: "📊 სულ პირადი პარტნიორები",
    no_personal_partners_yet: "თქვენ ჯერ არ გაქვთ პირადი პარტნიორები",
    invite_friends_tip:
      "💡 მოიწვიეთ მეგობრები თქვენი რეფერალური ბმულით, რომ ისინი გახდნენ თქვენი პირადი პარტნიორები!",
    my_team: "🧏‍♂️ ჩემი გუნდი",
    personal_partners_error:
      "❌ პირადი პარტნიორების ჩატვირთვისას მოხდა შეცდომა",
    level_activation_title: "პარტნიორის პროგრამის დონეების აქტივაცია",
    your_pool_share: "თქვენი წილი პულში",
    new_activated_levels: "ახალი აქტივირებული დონეები",
    activation_status: "დონეების აქტივაციის სტატუსი",
    how_to_activate: "როგორ გააქტიუროთ",
    levels_activate_automatically:
      "დონეები ავტომატურად ააქტიურებს საჭირო ინვესტიციის ოდენობის მიღწევისას (100$ თითო დონეზე)",
    to_activate_level: "დონის ასაქტიურებლად",
    needs_more: "საჭიროა კიდევ",
    refresh_status: "🔄 სტატუსის განახლება",
    levels_check_error: "❌ დონეების შემოწმებისას მოხდა შეცდომა",
    settings_title:
      "⚙️ პარამეტრები\n\nაქ შეგიძლიათ დააკონფიგურიროთ თქვენი ბმულები\n\nაირჩიეთ მოქმედება:",
    link_settings: "⚙️ ბმულების პარამეტრები",
    contact_mentor: "🙆‍♂️ დაუკავშირდით მენტორს",
    community_chat: "💬 საზოგადოების ჩატი",
    support_service: "⚠️ მხარდაჭერის სერვისი",
    language_settings: "🌐 ენა / Language",
    language_changed_el: "✅ ენა შეიცვალა რუსულად",
    language_changed_ge: "✅ Language changed to Greek",
    language_changed_ka: "✅ ენა შეიცვალა ქართულად",
    language_changed_en: "✅ Language changed to English",
    language_changed_fr: "✅ Language changed to French",
    language_changed_id: "✅ Language changed to Indonesia",
    language_changed_es: "✅ Language changed to Español",
    language_change_error: "❌ ენის შეცვლისას მოხდა შეცდომა",
    not_subscribed:
      '❌ თქვენ არ ხართ გამოწერილი ჩვენს ჩატზე. გთხოვთ, გამოიწეროთ და კვლავ დააჭიროთ "გამოწერის შემოწმება".',
    please_subscribe_to_chat: "გასაგრძელებლად, თქვენ უნდა გამოიწეროთ ჩვენი არხი.",
    subscribe_to_chat: "📢 ჩატის გამოწერა",
    check_subscription_btn: "🔄 გამოწერის შემოწმება",
    subscription_check_error: "გამოწერის შემოწმების შეცდომა",
    wallet_not_configured: "❌ საფულე არ არის კონფიგურირებული",
    wallet_not_configured: "❌ საფულე არ არის კონფიგურირებული",
    transaction: "ტრანზაქცია",
    wallet: "საფულე",
    user_not_found:
      "❌ მომხმარებელი სისტემაში არ მოიძებნა. სცადეთ კიდევ ერთხელ.",
    invalid_url_format: "❌ ბმულის არასწორი ფორმატი",
    subscription_required_for_links:
      "❌ ბმულების კონფიგურაციისთვის საჭიროა აქტიური გამოწერა",
    subscription_required_description:
      "💳 შეიძინეთ გამოწერა 10$/თვეში, რათა დააკონფიგურიროთ თქვენი ბმულები",
    buy_subscription_button: "💳 გამოწერის ყიდვა",
    domain_not_allowed: "❌ ეს ბმული არ მიდის გუნდის კურსზე",
    domain_not_allowed_description:
      "✅ შეიყვანეთ სწორი ფორმატის ბმული ან დაუკავშირდით მხარდაჭერის სამსახურს",
    your_domain: "თქვენი დომენი: {domain}",
    support_service: "⚠️ მხარდაჭერის სერვისი",
    link_saved_success: "✅ ბმული წარმატებით შეინახა!",
    link_save_error: "❌ ბმულის შენახვისას მოხდა შეცდომა",
    invalid_referral_link:
      "❌ ბმულის არასწორი ფორმატი. გთხოვთ, შეიყვანოთ სწორი HTTP/HTTPS ბმული.",
    referral_link_save_error:
      "❌ ბმულის შენახვისას მოხდა შეცდომა. სცადეთ კიდევ ერთხელ.",
    invalid_investment_amount: "❌ <b>არასწორი თანხა!</b>",
    investment_amount_limits:
      "მინიმალური თანხა: <b>1 USDT</b>\nმაქსიმალური თანხა: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>შეიყვანეთ სწორი თანხა რიცხვით</i>",
    investment_chosen_amount: "🔄 თქვენ აირჩიეთ თანხა <b>{amount} USDT</b>.",
    choose_investment_period: "აირჩიეთ პულში გაგზავნის ვადა:",
    investment_yield: "<b>მომგებიანობა ვადების მიხედვით:</b>",
    investment_return_info:
      "<i>ყველა სახსრები <b>(თანხა USDT + ბონუსები)</b> ავტომატურად ბრუნდება მითითებული ვადის შემდეგ თქვენს საფულეში</i>",
    select_period: "👇 <b>აირჩიეთ პულში გაგზავნის ვადა:</b>",
    search_results: '🔍 ძიების შედეგები მოთხოვნისთვის "{query}":',
    levels: "📊 დონეები: {levels}",
    sent_to_pool: "💰 გაგზავნილია პულში: {amount} USDT",
    admin_prize_set: "✅ პრიზი დაყენებულია: {amount} USDT",
    admin_time_set:
      "✅ დრო დაყენებულია: იწყება {startHour}:00-ზე, ხანგრძლივობა {durationHours} საათი",
    admin_funds_returned: "✅ სახსრები დაბრუნებულია რაუნდისთვის #{roundId}",
    invalid_round_id: "❌ რაუნდის არასწორი ID",
    admin_error: "❌ ბრძანების შესრულებისას მოხდა შეცდომა",
    invalid_wallet_format: "❌ საფულის მისამართის არასწორი ფორმატი.",
    wallet_format_details:
      "✅ სწორი ფორმატი: 0x + 40 სიმბოლო (ციფრები და A-F ასოები)",
    wallet_wrong_example: "❌ არასწორი მაგალითი: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ დარწმუნდით, რომ მისამართი ეკუთვნის BSC ქსელს (Binance Smart Chain)",
    wallet_already_used:
      "❌ ეს საფულე უკვე გამოიყენება სხვა მომხმარებლის მიერ. გთხოვთ, გამოიყენოთ სხვა საფულე.",
    invalid_tx_hash: "❌ <b>TX Hash-ის არასწორი ფორმატი!</b>",
    tx_hash_format: "TX Hash უნდა იწყებოდეს 0x-ით და შეიცავდეს 64 სიმბოლოს.",
    checking_transaction: "🔍 ტრანზაქციას ვამოწმებ...",
    transaction_accepted: "✅ <b>ტრანზაქცია მიღებულია შესამოწმებლად!</b>",
    transaction_check_time:
      "ბოტი შეამოწმებს ტრანზაქციის სტატუსს 2-5 წუთის განმავლობაში.",
    transaction_notification:
      "თქვენ მიიღებთ შეტყობინებას, როდესაც ტრანზაქცია დადასტურდება.",
    transaction_save_error:
      "❌ ტრანზაქციის შენახვისას მოხდა შეცდომა. გთხოვთ, დაუკავშირდეთ მხარდაჭერას.",
    use_menu_buttons: "ნავიგაციისთვის გამოიყენეთ მენიუს ღილაკები",
    level_activation_title: "პარტნიორის პროგრამის დონეების აქტივაცია",
    your_pool_share: "თქვენი წილი პულში",
    new_activated_levels: "ახალი აქტივირებული დონეები",
    activation_status: "დონეების აქტივაციის სტატუსი",
    how_to_activate: "როგორ გააქტიუროთ",
    levels_activate_automatically:
      "დონეები ავტომატურად ააქტიურებს საჭირო ინვესტიციის ოდენობის მიღწევისას (100$ თითო დონეზე)",
    to_activate_level: "დონის ასაქტიურებლად",
    needs_more: "საჭიროა კიდევ",
    refresh_status: "🔄 სტატუსის განახლება",
    levels_check_error: "❌ დონეების შემოწმებისას მოხდა შეცდომა",
    referrals_title: `👥 <b>თქვენი რეფერალები</b> | <b>დონე {level}</b>`,
    no_referrals: "ამ დონეზე ჯერ არ არის რეფერალები",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 გვერდი {page} {total}-დან",
    back_btn: "◀️ უკან",
    select_language: "🌐 <b>აირჩიეთ ენა:</b>",
    current_language: "მიმდინარე ენა: {language}",
    russian: "🇷🇺 რუსული",
    english: "🇺🇸 ინგლისური",
    french: "🇫🇷 ფრანგული",
    indonesia: "🇮🇩 ინდონეზიური",
    espaniol: "🇪🇸 ესპანური",
    italy: "🇮🇹 იტალიური",
    german: "🇩🇪 გერმანული",
    georgia: "🇬🇪 ქართული",
    greece: "🇬🇷 ბერძნული",
    swahilli: "🇰🇪 კენიელი",
    turkish: "🇹🇷 თურქული",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ უკან პარამეტრებზე",
    total_invested_level: "პირადი წილი პულში",
    error: "❌ მოხდა შეცდომა, სცადეთ კიდევ ერთხელ.",
    invalid_address: "❌ არასწორი მისამართი.",
    access_denied: "⛔ წვდომა აკრძალულია",
    loading: "⏳ იტვირთება...",
    updated: "განახლებულია",
    enabled: "✅ ჩართულია",
    disabled: "❌ გამორთულია",
    turn_on: "🔔 ჩართვა",
    turn_off: "🔕 გამორთვა",
  },
  ru: {
    curators_library: "📚 Библиотека Кураторов",
    no_curators_data: "На {level} уровне пока нет данных о кураторах",
    curators_library_explanation: "Здесь отображаются спонсоры ваших партнеров и их команды",
    statistics: "Статистика",
    total_curators: "Всего кураторов",
    total_referrals: "Всего партнеров",
    average_per_curator: "В среднем на куратора",
    sponsor: "Спонсор",
    partners: "Партнеры",
    more: "еще",
	incomplete_registration_title: "🚫 Вы не завершили регистрацию в боте!",
    incomplete_registration_message: "Пройдите регистрацию до конца, чтобы начать получать прибыль и не упускать возможности.",
    complete_registration_to_earn: "Завершите регистрацию и начните зарабатывать!",
	complete_registration_to_earn_start: "🚀 <b>Просто отправьте команду</b> <code>/start</code> <b>чтобы продолжить регистрацию!</b>",
    invalid_tx_hash_format:
      "❌ <b>Неверный формат TX Hash</b>\n\nПожалуйста, введите корректный хеш транзакции (64 символа, начинается с 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Проверяем транзакцию в блокчейне...</b>\n\nПолучаем информацию о сумме и дате транзакции...",
    transaction_check_error: "❌ <b>Ошибка проверки транзакции</b>\n\n{error}",
    blockchain_check_error:
      "❌ Произошла ошибка при проверке транзакции в блокчейне",
    transaction_found_details:
      "✅ <b>Транзакция найдена!</b>\n\n💰 <b>Сумма:</b> {amount} USDT\n📅 <b>Дата:</b> {date}\n\n⏰ <b>Выберите на какой период отправляли в пул :</b>",
    invalid_period_range:
      "❌ <b>Неверный период</b>\n\nПожалуйста, введите число от 1 до 28 дней",
    period_processing_error: "❌ Произошла ошибка при обработке периода",

    // Периоды
    period_1_day: "1 день",
    period_7_days: "7 дней",
    period_14_days: "14 дней",
    period_28_days: "28 дней",
    custom_period: "📅 Свой период",

    // Админка
    bot_disabled_success: "🔴 Бот отключен для пользователей",
    bot_disable_error: "❌ Ошибка: {error}",
    admin_panel: "🔧 Админка",
    invalid_prize_amount: "Неверная сумма приза",
    prize_set_success: "✅ Приз установлен: {amount} USDT",
    prize_sent_success: "✅ TX hash сохранен. Приз отправлен на контракт.",
    prize_send_error: "❌ Ошибка: {error}",
    winner_prize_notification:
      "🎯 Ваш выигрыш {amount} USDT отправлен на контракт!\n\n⏰ Через 28 дней вы получите прибыль.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Домен не разрешен</b>\n\n{domain_not_allowed_description}\n\n<b>Ваш домен:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Ваша партнерская ссылка успешно привязана!\n\n🏁 Вы на финишной прямой, для удобства общения, возможности задать возникшие вопросы и знакомства с командой, Вам необходимо вступить в наш чат\n\n1. Перейдите в данный чат @BitnestRus \n\n2. Нажмите кнопку 'Вступить в группу'\n\n3. Обязательно включите уведомления\n\n4. Нажмите кнопку ниже 'Я подписался(-ась)'\n\n👇🏼 Либо воспользуйтесь кнопкой ниже, для автоматического перехода в наш чат",
    chat_link: "📢 Подписаться на чат",
    disclaimer:
      "✅ Уважаемый пользователь, данная система создана для обучения и информирования исключительно нового пользователя нашей команды, который ранее не взаимодействовал с системой Bitnest в рамках других команд\n\n🤔 Скажите пожалуйста, Вы ранее уже были в составе другой команды в рамках Bitnest или нет?\n\n1. Нажмите (НЕТ) - если Вы ранее НЕ БЫЛИ участником другой команды\n\n2. Нажмите (ДА) - если у Вас уже есть аккаунт в другой команде и Вы отправляли USDT в циркуляцию\n\nУслуги данного бота предоставляются только новым пользователям, которые ранее не были в составе другой команды и нажали на кнопку ✅ НЕТ",
    disclaimer_no: "✅ НЕТ, Я НОВЫЙ УЧАСТНИК",
    disclaimer_yes: "⛔️ ДА, Я УЧАСТНИК ДРУГОЙ КОМАНДЫ",
    // Новые тексты для подтверждения
    block_confirmation_title: "Подтверждение",
    block_confirmation_message: "Если вы участник другой команды, обратитесь к своему куратору, и возвращайтесь к нам для завершения.\n\nВы уверены, что хотите диактивировать аккаунт и отказаться от пользования данным инструментом?",
    back_button: "◀️ Назад",
    confirm_block_button: "✅ Да, диактивировать",
    account_blocked_message: "🚫 <b>Аккаунт диактивирован</b>\n\nВаш аккаунт был диактивирован по вашему запросу.\n\nЕсли это произошло по ошибке, свяжитесь с поддержкой @BitnestRusSupport.",
    account_blocked:
      "❌ К сожалению, услуги данного бота предоставляются только новым пользователям. Ваш аккаунт не активен. По всем вопросам @BitnestRusSupport",
    please_try_again: "Пожалуйста, попробуйте еще раз",
    add_custom_transaction: "➕ Добавить транзакцию",
    adding_custom_transaction: "🔗 <b>Добавление своей транзакции</b>",
    enter_tx_hash_prompt:
      "Пожалуйста, введите <b>TX Hash</b> вашей транзакции:",
    transaction_requirements:
      "• Должна быть выполнена в сети BSC (Binance Smart Chain)\n• Должна быть транзакцией USDT",
    tx_hash_example:
      `📝 <b>Пример:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nПосмотреть ваши транзакции в пул <a href="https://bscscan.com/address/{wallet}#tokentxns">Перейти</a>`,
    enter_amount_prompt: "💰 <b>Введите сумму транзакции в USDT:</b>",
    amount_example: "Пример: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Выберите период отправки в пул:</b>",
    verifying_transaction: "🔍 <b>Проверяем транзакцию в блокчейне...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nСумма: {amount} USDT\nПериод: {period} дней",
    please_wait: "Пожалуйста, подождите...",
    transaction_already_exists: "Эта транзакция уже была добавлена в систему",
    transaction_not_found: "Транзакция не найдена",
    transaction_not_confirmed: "Транзакция не подтверждена или неуспешна",
    transaction_wrong_sender:
      "Транзакция отправлена не с вашего кошелька. Ваш кошелек: {userWallet}, отправитель в транзакции: {txFrom}",
    transaction_wrong_receiver:
      "Транзакция отправлена не на системный кошелек. Получатель должен быть: {systemWallet}",
    transaction_amount_mismatch:
      "Сумма не совпадает. В блокчейне: {blockchainAmount} USDT, вы ввели: {enteredAmount} USDT",
    transaction_not_usdt: "Это не USDT транзакция",
    transaction_decode_error: "Не удалось декодировать данные USDT транзакции",
    blockchain_error: "Ошибка при проверке в блокчейне: {error}",
    transaction_added_success: "✅ <b>Транзакция успешно добавлена!</b>",
    investment_details: "📊 <b>Детали инвестиции:</b>",
    investment_amount: "• Сумма:",
    investment_period: "• Период:",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Доходность: {profit}%",
    investment_added_to_portfolio: "💼 Инвестиция добавлена в ваш портфель.",
    transaction_add_error: "❌ <b>Ошибка при добавлении транзакции</b>",
    error_reason: "Причина: {error}",
    language_changed_success: "✅ Язык успешно изменен на русский!",
    welcome: `👋🏼 Добро пожаловать <b>{username}</b> - это командный инструмент нашего комьюнити, данный бот позволит Вам пошагово разобраться в системе и стать частью нашей команды!\n\n🎥 Мы подготовили для Вас пошаговые видео-инструкции, в которых рассказывается и показывается весь процесс действий\n\n👇🏼 Чтобы приступить к обучению и начать получать свой первый результат, нажмите на кнопку "🎓 Начать обучение"`,
    welcome_back: "👋 Вы уже прошли обучение! Добро пожаловать снова!",
    education_title: "🎓 Образовательные материалы\nВыберите тему:",
    finish: "✅ Обучение пройдено!",
    wallet_installation:
      "📲 <b>Установка кошелька</b>\nСкачайте и установите один из поддерживаемых кошельков.",
    ask_wallet_address:
      "👍🏼 Отличный выбор! Приступаем к обучению:\n\n💵 Первым делом в мире Web3 и DeFi необходимо иметь свой личный криптокошелек, прямо сейчас мы его и установим:\n\n1. Переходим на официальный сайт приложения <b>MetaMask</b>\n\n2. Устанавливаем приложение на свой телефон\n\n3. Создаем кошелек и обязательно записываем сид-фразу в надежное место\n\n4. Настраиваем сеть BSC - Binance Smart Chain (BEP20)\n\n5. Копируем публичный адрес своего кошелька 0x.............\n\n6. Отправляем данный адрес сообщением в поле ниже 👇🏼",
    enter_wallet: `🥳 Поздравляем ваш кошелек успешно привязан!\n\n📝 В данном шаге вам необходимо пройти регистрацию на официальном сайте Bitnest (см. видео)\n\n1. Скопируйте данную ссылку \n\n<code>{referral_link_bitnest}</code>\n\nоткройте ее во внутреннем браузере вашего кошелька\n\n2. В правом верхнем углу нажмите "Connect"\n\n3. Подтвердите авторизацию на сайте в всплывающем окне вашего кошелька \n\n<i><b>*Если сайт не открывается, то включите программу из 3х букв (которая позволит Вам зайти на сайт)</b></i>\n\n👇🏼 Либо воспользуйтесь кнопками ниже, для автоматического перехода в кошелек и открытия нужной страницы`,
    your_wallet: "💼 Ваш криптокошелек\n\n📌 Адрес в сети (BEP20)",
    install_wallet:
      "👍🏼 Отличный выбор! Приступаем к обучению:\n\n💵 Первым делом в мире Web3 и DeFi необходимо иметь свой личный криптокошелек, прямо сейчас мы его и установим:\n\n1. Переходим на официальный сайт приложения <b>MetaMask</b>\n\n2. Устанавливаем приложение на свой телефон\n\n3. Создаем кошелек и обязательно записываем сид-фразу в надежное место\n\n4. Настраиваем сеть BSC - Binance Smart Chain (BEP20)\n\n5. Копируем публичный адрес своего кошелька 0x.............\n\n6. Отправляем данный адрес сообщением в поле ниже 👇🏼",
    loading_balance: "⏳ Получаем информацию о балансе...",
    refresh: "🔄 Обновить",
    bnb_balance: "Баланс:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Баланс токенов",
    wallet_not_configured: "❌ Кошелек не настроен",
    send_usdt: "💸 Отправить USDT",
    send_usdc: "💸 Отправить USDC",
    check_my_investment: "💸 Отправить USDT",
    error_amount_not_selected: "❌ Ошибка: сумма не выбрана",
    error_wallet_not_configured: "❌ Ошибка: кошелек не настроен",
    back_to_amount_selection: "◀️ Назад к выбору суммы",
    configure_wallet: "⚙️ Настроить кошелек",
    your_mentor: (mentor) => `Ваш наставник: ${mentor}`,
    write_to_mentor: "✉️ Написать наставнику",
    what_is_bitnest:
      "🏗 <b>Что такое BitNest</b>\nПрозрачные операции, контроль ваших средств.",
    defi_basics: "📊 Основы DeFi.\nДалее — как устроено инвестирование в пулы.",
    liquidity_pool_text:
      "💎 Пул ликвидности\n\n💵 Здесь вы можете отправить USDT в пул ликвидности и получать бонусы.\n\nВыберите действие:",
    my_investments_empty: "📊 У вас пока нет инвестиций.",
    investment_saved: "✅ Данные сохранены",
    investment_return_received: (amount) =>
      `Вам поступила ваша циркуляция <b>${amount}$</b>`,
    congrats_profit: "Поздравляем с получением профита!",
    referral_reward_received: "Вы получили реферальное вознаграждение!",
    back_to_main_menu: "🏠 В главное меню",
    user: "Пользователь",
    amount: "Сумма",
    congrats_referral_earned:
      "Поздравляем! Вы заработали реферальное вознаграждение!",
    balance_replenished: (amount) => `Ваш баланс пополнен на ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Вы получили реф вознаграждение ${amount}`,
    you_have_inactive_levels: "У вас есть неактивированные уровни!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `При отправке ${amount} USDT вы можете активировать уровни: ${levels}`,
    activate_levels_to_earn:
      "Активируйте уровни чтобы получать доход с рефералов!",
    new_levels_activated: (levels) => `Активированы новые уровни: ${levels}`,
    now_earn_from_levels:
      "Теперь вы получаете доход с этих уровней вашей команды!",
    invalid_tx_hash_contact_support:
      "❌ Неверный хэш транзакции. Пожалуйста, свяжитесь с поддержкой.",
    congrats_liquidity_pool_success:
      "Поздравляем! Ваша отправка в пул ликвидности успешно завершена!",
    transaction_details: "Детали транзакции",
    block: "Блок",
    period: "Срок",
    days: "дней",
    not_specified: "не указана",
    go_to_portfolio_for_details:
      'Перейдите в "Мой портфель" чтобы увидеть детали',
    level_deactivated_title: "Уровень деактивирован",
    level: "Уровень",
    has_been_deactivated: "был деактивирован",
    liquidity_pool_completed_reason:
      "Ваша отправка в пул ликвидности успешно завершена!",
    total_return: "Общая сумма возврата",
    return_date: "Дата возврата",
    error_updating_pool_status:
      "❌ Ошибка при обновлении статуса отправки в пул. Обратитесь в поддержку.",

    transaction_not_found_after_attempts: (txHash) =>
      `❌ Транзакция не найдена после нескольких попыток.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Возможные причины:\n` +
      `• Транзакция еще не подтверждена сетью\n` +
      `• Неверный TX Hash\n` +
      `• Проблемы с сетью BSC\n\n` +
      `Пожалуйста, проверьте TX Hash и попробуйте снова или обратитесь в поддержку.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Транзакция отправлена на неправильный адрес!\n\n` +
      `▸ Полученный адрес: ${actualTo}\n` +
      `▸ Ожидаемый адрес: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Пожалуйста, убедитесь что вы отправляете USDT на правильный адрес пула.`,
    transaction_not_confirmed: (status) =>
      `❌ Транзакция не подтверждена. Статус: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Пожалуйста, проверьте статус транзакции в BscScan и обратитесь в поддержку при необходимости.",
    error_checking_transaction:
      "❌ Ошибка при проверке транзакции. Попробуйте позже или обратитесь в поддержку.",
    investment_confirmation:
      `💰 <b>Подтверждение отправки в пул</b>\n\n` +
      `📊 <b>Детали транзакции:</b>\n` +
      `▸ Сумма: <b>{amount} USDT</b>\n` +
      `▸ Срок: <b>{period} дней</b>\n` +
      `▸ Доходность: <b>{profitPercent}%</b>\n` +
      `▸ Ожидаемый доход: <b>{expectedProfit} USDT</b>\n` +
      `▸ Общая сумма возврата: <b>{totalReturn} USDT</b>\n` +
      `▸ Дата возврата: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Инструкция по отправке:</b>\n\n` +
      `1. Откройте приложение MetaMask\n\n` +
      `2. Перейдите на официальный сайт Bitnest\n\n` +
      `3. В правом верхнем углу нажмите <b>"Connect"</b> - <i>(если Вы видите иконку кошелька, то переходите к след. шагу)</i>\n\n` +
      `4. Нажмите на иконку кошелька и перейдите в раздел Loop (Петля)\n\n` +
      `5. Введите сумму отправки\n\n` +
      `6. Выберите срок отправки\n\n` +
      `7. Нажмите на кнопку "Circulation" (Циркуляция)\n\n` +
      `8. Подтвердите отправку на сайте в всплывающем окне вашего кошелька\n\n` +
      `👇🏼 Либо воспользуйтесь кнопками ниже, для автоматического перехода в кошелек и открытия нужной страницы`,
    investment_confirmation2:
      `💰 <b>Подтверждение отправки в пул</b>\n\n` +
      `📊 <b>Детали транзакции:</b>\n` +
      `▸ Сумма: <b>{amount} USDC</b>\n` +
      `▸ Срок: <b>{period} дней</b>\n` +
      `▸ Доходность: <b>{profitPercent}%</b>\n` +
      `▸ Ожидаемый доход: <b>{expectedProfit} USDC</b>\n` +
      `▸ Общая сумма возврата: <b>{totalReturn} USDC</b>\n` +
      `▸ Дата возврата: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Инструкция по отправке:</b>\n\n` +
      `1. Откройте приложение MetaMask\n\n` +
      `2. Перейдите на официальный сайт Bitnest\n\n` +
      `3. В правом верхнем углу нажмите <b>"Connect"</b> - <i>(если Вы видите иконку кошелька, то переходите к след. шагу)</i>\n\n` +
      `4. Нажмите на иконку кошелька и перейдите в раздел Loop (Петля)\n\n` +
      `5. Введите сумму отправки\n\n` +
      `6. Выберите срок отправки\n\n` +
      `7. Нажмите на кнопку "Circulation" (Циркуляция)\n\n` +
      `8. Подтвердите отправку на сайте в всплывающем окне вашего кошелька\n\n` +
      `👇🏼 Либо воспользуйтесь кнопками ниже, для автоматического перехода в кошелек и открытия нужной страницы`,
    send_metamask_mobile: "🦊 Отправить - MetaMask 📲",
    transaction_search_timer: `⚠️ Ожидаем вашей отправки, инструкция выше\n\n<b>🔎 После отправки, начнем поиск транзакции ...</b>\n⏰ <b>Срок на отправку и поиск вашей транзакции:</b> 20:00 мин...\n\n`,
    cancel_search: "❌ Отменить поиск",
    failed_delete_timer_message:
      "Не удалось удалить сообщение с таймером: {error}",
    investment_details_base:
      `💰 <b>Подтверждение отправки в пул</b>\n\n` +
      `📊 <b>Детали транзакции:</b>\n` +
      `▸ Сумма: <b>{amount} USDT</b>\n` +
      `▸ Срок: <b>{period} дней</b>\n` +
      `▸ Статус: <b>Отменено</b>\n\n`,
    investment_details_base2:
      `💰 <b>Подтверждение отправки в пул</b>\n\n` +
      `📊 <b>Детали транзакции:</b>\n` +
      `▸ Сумма: <b>{amount} USDC</b>\n` +
      `▸ Срок: <b>{period} дней</b>\n` +
      `▸ Статус: <b>Отменено</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Поиск транзакции отменен пользователем</b>",
    failed_update_message:
      "Не удалось обновить сообщение, отправляем новое: {error}",
    transaction_search_cancelled_log:
      "✅ Поиск транзакции отменен для пользователя {userId}",
    no_active_transaction_search: "❌ Активный поиск транзакций не найден",
    error_cancelling_search: "❌ Ошибка при отмене поиска: {error}",
    error_cancelling_search_user: "❌ Произошла ошибка при отмене поиска",
    processing_found_transaction:
      "🔄 Обработка найденной транзакции для пользователя {userId}",
    investment_in_process_not_found:
      "Инвестиция со статусом in_process не найдена",
    failed_update_investment_status: "Не удалось обновить статус инвестиции",
    failed_delete_timer_message:
      "Не удалось удалить сообщение с таймером: {error}",
    failed_delete_previous_message:
      "Не удалось удалить предыдущее сообщение: {error}",
    transaction_confirmed_message:
      `💰 <b>Подтверждение отправки в пул</b>\n\n` +
      `📊 <b>Детали транзакции:</b>\n` +
      `▸ Сумма: <b>{amount} USDT</b>\n` +
      `▸ Срок: <b>{period} дней</b>\n` +
      `▸ Ожидаемый доход: <b>{expectedProfit} USDT</b>\n` +
      `▸ Общая сумма возврата: <b>{totalReturn} USDT</b>\n` +
      `▸ Дата возврата: <b>{returnDate}</b>\n\n` +
      `✅ <b>Транзакция подтверждена!</b>\n` +
      `📊 <b>Хэш транзакции:</b> <code>{hash}</code>\n` +
      `💰 <b>Фактическая сумма:</b> {actualAmount} USDT\n` +
      `⏰ <b>Подтверждено:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Активируем уровни пользователя на основе суммы инвестиции",
    user_prefix: "User_",
    notification_sent_to_referrer:
      "✅ Уведомление отправлено рефереру {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Реферер не найден или не имеет необходимых данных",
    user_has_no_referrer: "⚠️ У пользователя нет реферера",
    error_sending_referral_notification:
      "Ошибка отправки уведомления рефералу: {error}",
    error_sending_missed_rewards:
      "Ошибка отправки уведомлений об упущенных наградах: {error}",
    error_sending_missed_referrals:
      "Ошибка отправки уведомления об упущенных рефералах: {error}",
    level_activation_notifications_sent:
      "🎯 Уведомления об активации уровней отправлены для уровней: {levels}",
    error_sending_level_activation:
      "Ошибка отправки уведомления об активации уровней: {error}",
    transaction_processed_successfully:
      "✅ Транзакция обработана для пользователя {userId}",
    error_processing_transaction:
      "❌ Ошибка обработки транзакции для пользователя {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Ошибка обработки транзакции</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Ошибка: {error}\n\n` +
      `Пожалуйста, обратитесь в поддержку.`,
    error_sending_notification: "Ошибка отправки уведомления: {error}",
    new_levels_activated: "Активированы новые уровни!",
    activated_levels: "Активированные уровни",
    levels_activation_benefit:
      "Теперь вы получаете доход с этих уровней вашей команды!",
    referral_made_transaction: "Ваш реферал совершил отправку!",
    your_referral: "Ваш реферал",
    congrats_referral_reward:
      "Поздравляем! Вы заработали реферальное вознаграждение!",
    // =========================
    // Партнерская программа
    // =========================
    affiliate_text: `👥 Ваша партнерская сеть, {username}\n\n17 уровней вашей команды и получение дохода с каждого уровня от доходности ваших рефералов\n\n<b>1 ур</b> - 20%\n<b>2 ур</b> - 10%\n<b>3 - 7 ур</b> - 5%\n<b>8 - 10 ур</b> - 3%\n<b>11 - 17 ур</b> - 1%\n\nДля активации каждого уровня,  ваша доля в пуле должна соответствовать <b>№ уровня * 100$</b>\nДля активации всех уровней, ваша личная доля в пуле = <b>1700$</b>\n\n📊 Общая статистика по уровням:\n{pools.levels}\n\n💰 Итого: 0 реф. | 0.000 USDT`,
    your_referral_sent: "Ваш реферал совершил отправку!",
    missed_referral_reward: (missedAmount, level) =>
      `Вы упустили реф.вознаграждение ${missedAmount}$ с ${level} уровня`,
    activate_level_to_earn:
      "Активируйте уровень, чтобы получать доход со всей структуры!",
    check_subscription: "✅ Я подписался(-ась)",
    website_ref:
      '🎉 Поздравляем с успешной регистрацией!\n\n🔗 В данном шаге Вам необходимо добавить свою партнерскую ссылку из личного кабинета Bitnest\n\n1. Перейдите на официальный сайт Bitnest https://bitnest.ad (если вы с компьютера)\n\n2. В правом верхнем углу нажмите "<b>Connect</b>"<i> - (если Вы видите иконку кошелька, по переходите к след. шагу)</i>\n\n3. Нажмите "<b>Пригласить друзей</b>"\n\n4. Нажмите "<b>Скопировать мою ссылку</b>"\n\n5. Отправьте ее в поле ниже 👇🏼',

    // =========================
    // Розыгрыши и события
    // =========================
    raffle: "🎁 РОЗЫГРЫШ 🎁",
    daily_raffle: "🎉 Ежедневный розыгрыш!",
    current_prize: "🏆 Приз",
    participants: "👥 Уже участвуют ",
    end_time: "⏰ Результаты",
    raffle_text: `✅ <b>Условия участия:</b>\n• Минимальная активная доля в пуле: 10 USDT\n• Одна попытка на человека\n\n`,
    raffle_requirement:
      "Для участия в розыгрыше требуется иметь активную долю в пуле",
    raffle_wallet_not_set: "⚠️ Сначала настройте кошелек",
    raffle_already_registered:
      "✅ Вы успешно зарегистрированы в текущем раунде!",
    successfully_registered: "Вы успешно зарегистрированы в розыгрыше!",
    registration_failed: "Не удалось зарегистрироваться",
    participate_button: "🎟 Участвовать",
    no_active_raffle: "Сейчас нет активного розыгрыша.",
    already_registered_in_raffle:
      "✅ Вы уже зарегистрированы в текущем розыгрыше!",
    new_raffle_started:
      "💰 Приз: {prize} USDT\n" + "⏰ До конца: {hours} часов\n\n",
    register_in_raffle: "🤖 Регистрация в розыгрыше",
    raffle_error: "❌ Ошибка: {error}",

    // Из раздела Кошелек
    raffle_min_investment_required:
      "Для участия в розыгрыше требуется активная доля в пуле от 10$\n\n" +
      "Сделайте отправку USDT в пул, чтобы получить возможность участвовать.",
    raffle_registration_success:
      "Вы успешно зарегистрированы!\n\nТеперь вы участвуете в розыгрыше!",
    eligible_to_participate: "💪 Вы имеете право на регистрацию в розыгрыше",
    raffle_registration_error: "❌ Ошибка регистрации: {error}",

    // Из раздела Меню и навигация (для проверки регистрации)
    not_registered_yet:
      "❌ Вы еще не зарегистрированы. Нажмите на кнопку вашего кошелька для регистрации.",
    register_button: "📝 Зарегистрироваться",
    registration_check_error: "❌ Ошибка при проверке регистрации",
    registering_wallet: "🔄 Регистрирую ваш кошелек...",
    registration_success: "✅ Вы успешно зарегистрированы в текущем раунде!",
    registration_error: "❌ Ошибка регистрации",
    try_later_or_contact_admin:
      "Попробуйте позже или обратитесь к администратору.",
    registration_process_error: "❌ Ошибка при регистрации",
    mentor_not_found: "❌ <b>Наставник не найден</b>",
    mentor_not_found_description:
      "У вас нет назначенного наставника. Пожалуйста, обратитесь в поддержку.",
    // =========================
    // Остальное
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 У вас новый реферал @${username}`,
    friend: "друг",
    welcome_error: "👋 Добро пожаловать! Произошла ошибка при загрузке меню.",
    link_subscription_pending:
      "⌛ <b>Ожидается оплата подписки</b>\n\n" +
      "Ваша подписка ожидает подтверждения оплаты. " +
      "Если вы уже оплатили, нажмите кнопку ниже для проверки статуса.",
    check_payment: "🔄 Проверить оплату",
    create_new_payment: "💳 Создать новый платеж",
    link_subscription_required:
      "❌ <b>Доступ к настройкам ссылок по подписке</b>\n\n" +
      "✅ Для настройки реферальной ссылки и активации вашего бота необходимо приобрести подписку за 10$/мес.\n\n",
    buy_subscription: "💳 Купить подписку (10$/мес)",
    link_settings_error: "❌ Ошибка при загрузке настроек ссылок",
    setup_wallet_first: "❌ Сначала настройте кошелек в настройках",
    custom_amount_message:
      "💰 <b>Введите свою сумму для отправки в пул </b>\n\n" +
      "Минимальная сумма: <b>1 USDT</b>\n" +
      "Максимальная сумма: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Отправьте число - сумму в USDT в поле ниже</i>",

    // =========================
    // Меню и навигация
    // =========================
    menu_title: `🎉 <b>Добро пожаловать, {username}</b>\n\n🚀 <b>BitnestRus Bot - Ваш надежный помощник и командный инструмент</b>\n\n✨ <b>Возможности бота:</b>\n• 🎁 Розыгрыши денежных призов\n• 💰 Финансовая статистика вашего кошелька\n• 🌊 Инструкции по работе с пулом ликвидности\n• 👥 Многоуровневая партнерская программа\n• 📊 Аналитика и информирование\n\n👇 Выберите раздел в меню:\n`,
    back: "◀️ Назад",
    next: "➡️ Далее",
    language_selection_message:
      "🌍 Please choose your language / Выберите ваш язык:\n\nThis will set the language for the entire bot / Это установит язык для всего бота",
    nextreg: " ✍🏼 Я прошел(-ла) регистрацию",
    my_wallet: "💰 Мой Кошелек",
    liquidity_pool: "🌊 Пул ликвидности",
    my_portfolio: "💼 Мой портфель",
    presentation: "🎥 Презентация",
    video_instructions: "📚 Видео-инструкции",
    official_website: "🔗 Официальный сайт",
    oficial_site: "✅ Официальный сайт",
    affiliate: "👥 Партнерская программа",
    settings: "⚙️ Настройки",
    admin: "🔧 Админка",
    admin_webapp: "📱 WebApp",
    settings_title:
      "⚙️ Настройки\n\nЗдесь вы можете настроить свои ссылки\n\nВыберите действие:",
    start_education: "🎓 Начать обучение",
    download_metamask: "🦊 Скачать - MetaMask",
    register_metamask: "🦊 Регистрация - MetaMask",
    register_metamask_mobile: "🦊 Регистрация - MetaMask",
    invest_now_message:
      `💰 <b>Отправка USDT в пул ликвидности</b>\n\n` +
      `<b>Доходность по срокам:</b>\n` +
      `• <b>1 день</b> - 0.4%\n` +
      `• <b>7 дней</b> - 4%\n` +
      `• <b>14 дней</b> - 9.5%\n` +
      `• <b>28 дней</b> - 24%\n\n` +
      `<i>Все средства <b>(сумма USDT + бонусы)</b> возвращаются автоматически через указанный срок на ваш кошелек</i>\n\n` +
      `📌 <b>Ваш баланс:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Выберите сумму отправки в пул:</b>`,
    invest_now_message2:
      `💰 <b>Отправка USDC в пул ликвидности</b>\n\n` +
      `<b>Доходность по срокам:</b>\n` +
      `• <b>1 день</b> - 0.4%\n` +
      `• <b>7 дней</b> - 4%\n` +
      `• <b>14 дней</b> - 9.5%\n` +
      `• <b>28 дней</b> - 24%\n\n` +
      `<i>Все средства <b>(сумма USDC + бонусы)</b> возвращаются автоматически через указанный срок на ваш кошелек</i>\n\n` +
      `📌 <b>Ваш баланс:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `• USDC: {usdc_balance}\n\n` +
      `👇🏼 <b>Выберите сумму отправки в пул:</b>`,
    custom_amount: "🗂 Своя сумма",
    error_getting_data: "❌ Ошибка при получении данных, попробуйте снова.",
    choose_period_message:
      `🔄 Вы выбрали сумму <b>{amount} USDT</b>. Выберите срок отправки в пул:\n\n` +
      `<b>Доходность по срокам:</b>\n` +
      `• <b>1 день</b> - 0.4%\n` +
      `• <b>7 дней</b> - 4%\n` +
      `• <b>14 дней</b> - 9.5%\n` +
      `• <b>28 дней</b> - 24%\n\n` +
      `<i>Все средства <b>(сумма USDT + бонусы)</b> возвращаются автоматически через указанный срок на ваш кошелек</i>\n\n` +
      `👇 <b>Выберите срок отправки в пул:</b>`,
	choose_period_message2:
      `🔄 Вы выбрали сумму <b>{amount} USDC</b>. Выберите срок отправки в пул:\n\n` +
      `<b>Доходность по срокам:</b>\n` +
      `• <b>1 день</b> - 0.4%\n` +
      `• <b>7 дней</b> - 4%\n` +
      `• <b>14 дней</b> - 9.5%\n` +
      `• <b>28 дней</b> - 24%\n\n` +
      `<i>Все средства <b>(сумма USDC + бонусы)</b> возвращаются автоматически через указанный срок на ваш кошелек</i>\n\n` +
      `👇 <b>Выберите срок отправки в пул:</b>`,
    back_to_amount_selection: "◀️ Назад к выбору суммы",
    main_menu: "🏠 В главное меню",
    timer_message_id_not_found: "❌ timer_message_id не найден",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ Ожидаем вашей отправки, инструкция выше\n\n<b>🔎 После отправки, начнем поиск транзакции ...</b>\n\n⏰ <b>Срок на отправку и поиск вашей транзакции:</b> ${timeString}  мин...\n\n`,
    cancel_search: "❌ Отменить поиск",
    timer_error: "❌ Ошибка в таймере: {error}",
    timer_stopped_message_not_found:
      "⏹️ Таймер остановлен: сообщение не найдено или недоступно",
    timer_minor_error_continue:
      "⚠️ Незначительная ошибка таймера, продолжаем...",
    transaction_timeout_message:
      "⏰ <b>Время поиска транзакции истекло</b>\n\n" +
      "❌ Не удалось найти подтверждение транзакции в течение отведенного времени.\n\n" +
      "Возможные причины:\n" +
      "• Транзакция еще не подтверждена сетью\n" +
      "• Неверный TX Hash\n" +
      "• Проблемы с сетью BSC\n\n" +
      "Пожалуйста, проверьте статус транзакции в BscScan и попробуйте снова.",
    transaction_timeout_log: "⏰ Таймаут транзакции для пользователя {userId}",
    transaction_timeout_error:
      "❌ Ошибка при обработке таймаута транзакции: {error}",
    transaction_not_found_try_again:
      "❌ Транзакция не найдена. Попробуйте начать заново.",
    awaiting_transaction_check:
      "🔍 <b>Ожидайте проверки транзакции...</b>\n\n" +
      "Бот проверит блокчейн в течение 2-5 минут.\n" +
      "Вы получите уведомление о результате.",
    transaction_not_found_message:
      `❌ <b>Транзакция не найдена</b>\n\n` +
      `Возможные причины:\n` +
      `• Транзакция еще не подтверждена сетью\n` +
      `• Отправлено не на адрес пула\n` +
      `📞 Если вы отправили USDT, обратитесь в поддержку\n` +
      `🔍 TX Hash: предоставьте хэш транзакции`,
    transaction_not_found_notification_sent:
      "✅ Уведомление об отсутствии транзакции отправлено пользователю {userId}",
    error_sending_notification: "Ошибка отправки уведомления: {error}",
    request_tx_hash_message:
      "📝 <b>Пожалуйста, введите хэш транзакции (TX Hash):</b>\n\n" +
      "После отправки USDT скопируйте TX Hash из вашего кошелька и отправьте его сюда.",
    error_requesting_tx_hash: "Ошибка запроса TX Hash: {error}",
    presentation_message:
      `📊 <b>Презентация</b>\n\n` +
      `🎥 Подробная видео презентация, которая поможет вам понять преимущества платформы и данного инструмента\n\n`,
    presentation_error: "Presentation error: {error}",
    presentation_load_error: "❌ Ошибка при загрузке презентации",
    user_not_determined: "❌ Не удалось определить пользователя",
    not_configured: "Не настроена",
    from_your_inviter: `\n👤 От вашего пригласителя: {name}`,
    user: "Пользователь",
    system_video_instruction: `\n📋 Системная видео-инструкция`,
    video_instructions_header: "🎥 <b>Видео-инструкции</b>",
    video_instructions_description:
      "📚 Детальный видео курс, в котором вы узнаете все тонкости работы с системой и научитесь взаимодействовать с пулом",
    video_link_available: `🔗 <b>Ссылка на видео:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Ссылка не доступна</b>\n\n`,
    video_instruction_error: "Video instruction error: {error}",
    video_instruction_load_error: "❌ Ошибка при загрузке видео-инструкций",
    system_link: "🌐 Системная ссылка",
    from_your_mentor: "👤 От вашего Наставника",
    user: "Пользователь",
    your_link: "🌐 Ваша ссылка",
    visit_official_website:
      "Посетите официальный сайт платформы и изучите все подробности и правила работы с сервисом",
    link: "Ссылка",
    open_metamask: "🦊 Открыть MetaMask",
    open_in_browser: "💻 Открыть в браузере ПК",
    website_error: "❌ Ошибка при загрузке информации о сайте",
    your_investment_portfolio: "Ваш портфель активной доли в пуле",
    your_investment_portfolio_add: "➕ Добавить транзакцию",
    transaction: "Транзакция",
    amount: "Сумма",
    term: "Срок",
    days: "дней",
    profitability: "Доходность",
    time_left: "До завершения",
    d: "д",
    h: "ч",
    expected_profit: "Ожидаемый доход",
    type: "Тип",
    incoming_transaction: "Входящая транзакция",
    refund: "Возврат средств",
    status: "Статус",
    active: "Активный",
    archived: "Архивная отправка",
    returned: "Возвращено",
    total_statistics: "Общая статистика",
    total_active_amount: "Общая сумма активных",
    page: "Страница",
    of: "из",
    portfolio_error: "⚠️ Ошибка при загрузке портфеля",
    congrats_on_profit: "Поздравляем с получением профита!",
    bot_not_available: "Бот не доступен для отправки уведомления",
    investment_notification_sent:
      "Уведомление о возврате инвестиций отправлено пользователю",
    investment_notification_error:
      "Ошибка отправки уведомления о возврате инвестиций:",
    check_old_transactions: "🔍 Проверить старые транзакции",
    checking_old_transactions: "Проверяем старые транзакции",
    this_may_take_seconds: "Это может занять несколько секунд...",
    wallet_not_found: "❌ Кошелек не найден. Подключите его в профиле.",
    check_completed: "Проверка завершена",
    added_to_portfolio: "Добавлено в портфель",
    no_transactions_found: "Транзакции не найдены",
    target_wallet: "Целевой кошелек",
    checking_old_transactions: "Проверка старых транзакций",
    wallet_not_found: "Кошелек не найден",
    check_completed: "Проверка завершена",
    found_transactions: "Найдены транзакции",
    already_added: "уже добавлена",
    added: "добавлена",
    summary: "Итог",
    new_added: "Новых добавлено",
    already_exist: "Уже существует",
    total_checked: "Всего проверено",
    check_transactions_error: "Ошибка проверки транзакций",
    transactions: "транзакций",
    my_portfolio: "💼 Мой портфель",
    your_active_pool: "<b>Ваша активная доля в пуле</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>Ваша активная доля в пуле:</b> ${amount}$`,
    your_personal_share: "Ваша общая доля в пуле",
    level_activation_title: "Активация уровней партнерской программы",
    check_transactions_error:
      "⚠️ Ошибка при проверке транзакций. Попробуйте позже.",
    affiliate_network_header: (username) =>
      `👥 <b>Ваша партнерская сеть, ${username}</b>`,
    affiliate_network_description:
      "17 уровней вашей команды и получение дохода с каждого уровня от доходности ваших рефералов",
    level_percentages:
      `<b>• 1 ур</b> - 20%\n` +
      `<b>• 2 ур</b> - 10%\n` +
      `<b>• 3-7 ур</b> - 5%\n` +
      `<b>• 8-10 ур</b> - 3%\n` +
      `<b>• 11-17 ур</b> - 1%`,
    level_activation_requirements:
      "Для активации каждого уровня ваша доля в пуле должна соответствовать <b>№ уровня * 100$</b>",
    all_levels_activation_requirement:
      "Для активации всех уровней, ваша личная доля в пуле = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>Ваша личная доля в пуле:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Активировано уровней:</b> ${count}/17`,
    level_statistics: "📊 <b>Статистика по уровням:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Ур. ${level}: ${count} чел. | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Ур. ${level}: Нет рефералов`,
    no_level_data: "<i>Пока нет данных по уровням</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Итого:</b> ${referrals} реф. | ${investments} USDT`,
    my_partners: "📋 Мои партнёры",
    my_team: "🧏‍♂️ Моя команда",
    ref_link: "🔗 Реф ссылка",
    enable_levels: "🔓 Вкл уровни",
    search: "🔍 Поиск",
    statistics: "📈 Статистика",
    affiliate_error: "Affiliate error: {error}",
    affiliate_load_error: "⚠️ Ошибка при загрузке партнерской программы",
    buy_subscription: "💰 Приобретение подписки",
    subscription_text:
      "Для приобретения подписки обратитесь к криптоботу:\n\nПосле оплаты подписки вы получите доступ к реферальной программе и другим эксклюзивным возможностям.",
    go_to_cryptobot: "📲 Перейти к криптоботу",
    check_subscription_status: "🔄 Проверить подписку",
    subscription_active:
      "✅ Ваша подписка активна! Теперь вы можете приглашать рефералов.",
    subscription_inactive:
      "❌ Подписка еще не активна. Пожалуйста, завершите оплату или обратитесь в поддержку.",
    subscription_check_error: "❌ Ошибка при проверке статуса подписки",
    data_not_found: "Данные не найдены. Обновите портфель",
    last_page: "Это последняя страница",
    first_page: "Это первая страница",
    page_load_error: "Ошибка при загрузке страницы",
    edit_message_error:
      "Не удалось отредактировать сообщение, отправляем новое:",
    refresh: "🔄 Обновить",
    referral_access_subscription:
      "❌ <b>Доступ к реферальной программе по подписке</b>\n\n✅ Для настройки реферальной ссылки и активации вашего бота необходимо приобрести подписку за 10$/мес.",
    referral_invite_text:
      "👋🏻 Привет! Если хочешь получать пассивный доход с ТОП-1 биржи, присоединяйся по моей ссылке 👆",
    your_referral_link: "Ваша реферальная ссылка",
    referral_invite_description:
      "💡 Приглашайте друзей и получайте доход с их активных долей в пуле!",
    share_link: "📢 Поделиться ссылкой",
    buy_subscription: "💳 Купить подписку (10$/мес)",
    referral_link_error: "❌ Ошибка при загрузке реферальной ссылки",
    link_copied: "📋 Реферальная ссылка скопирована:",
    share_with_friends: "Теперь вы можете поделиться ею с друзьями!",
    link_settings_title: "⚙️ Настройки ваших ссылок",
	subscription_active: "Подписка активна",
    subscription_not_active: "Подписка не активна",
    link_settings_description: "Эти ссылки будут видны вашим рефералам:",
    choose_link_to_change: "💡 Выберите ссылку для изменения:",
    change_video: "🎥 Изменить видео",
    cancel_input: "❌ Отменить ввод",
    user_not_found: "❌ Пользователь не найден",
    link_access_subscription: "❌ Доступ к настройкам ссылок по подписке",
    subscription_required:
      "✅ Для настройки реферальной ссылки и активации вашего бота необходимо приобрести подписку за 10$/мес.",
    buy_subscription_button: "💳 Купить подписку (10$/мес)",
    payment_pending: "⌛ Ожидается оплата подписки",
    payment_pending_description:
      "Ваша подписка ожидает подтверждения оплаты. Если вы уже оплатили, нажмите кнопку ниже для проверки статуса.",
    check_payment: "🔄 Проверить оплату",
    create_new_payment: "💳 Создать новый платеж",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ Все ссылки сброшены к системным настройкам",
    reset_links_error: "❌ Ошибка при сбросе ссылок",
    subscription_payment_title: "💳 Оплата подписки для настройки ссылок",
    subscription_price: "Стоимость: ",
    subscription_duration: "Срок действия: ",
    pay_via_cryptobot: "🔗 Оплатить через криптобота",
    check_payment: "🔄 Проверить оплату",
    cancel: "❌ Отменить",
    subscription_payment_error:
      "⚠️ Произошла ошибка при создании подписки. Пожалуйста, попробуйте позже.",
    subscription_description: "Подписка на настройки ссылок (1 месяц)",
    no_data_to_display: "❌ Нет данных для отображения",
    nothing_found_for_query: "По запросу",
    no_referrals_on_levels: "У вас пока нет рефералов на уровнях",
    invested_in_pool: "Отправленно в пул",
    found_referrals: "Найдены рефералы",
    subscription_activated: "✅ Подписка успешно активирована!",
    subscription_activated_description:
      "🎉 Теперь вам доступны все функции настройки ссылок и партнерской системы.",
    payment_processing: "⌛ Платеж в обработке. Попробуйте проверить позже.",
    invoice_expired: "❌ Срок действия инвойса истек.",
    payment_not_found: "❌ Платеж не найден или отменен.",
    payment_check_error: "⚠️ Ошибка при проверке платежа.",
    payment_check_error_description:
      "Пожалуйста, попробуйте позже или обратитесь в поддержку.",
    try_again: "🔄 Попробовать снова",
    new_payment: "💳 Новый платеж",
    enter_presentation_link: "📊 Введите ссылку на презентацию:",
    enter_video_link: "🎥 Введите ссылку на видео-инструкции:",
    enter_official_link: "🌐 Введите ссылку на официальный сайт:",
    referral_stats: "📊 Статистика по уровням",
    level: "Уровень",
    referrals_count: "👥 Рефералов:",
    total_invested: (amount) => `💰 Отправлено в пул: ${amount} USDT`,
    search_referrals_prompt: "🔍 Введите имя пользователя для поиска:",
    no_referrals: "👥 У вас пока нет рефералов",
    level_not_found: "❌ Уровень не найден",
    your_referrals: "👥 Ваши рефералы",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Страница ${current} из ${total}`,
    no_referrals_on_level: "На этом уровне пока нет рефералов",
    back_to_affiliate: "◀️ Назад к партнерской программе",
    your_personal_partners: "Ваши личные партнеры",
    id: "ID",
    too_many_partners_use_team:
      "Слишком много партнеров для отображения. Используйте раздел 'Моя команда' для полного списка.",
    total_personal_partners: "Всего личных партнеров",
    no_personal_partners_yet: "У вас пока нет личных партнеров",
    invite_friends_tip:
      "💡 Приглашайте друзей по своей реферальной ссылке, чтобы они стали вашими личными партнерами!",
    my_team: "🧏‍♂️ Моя команда",
    personal_partners_error: "❌ Ошибка при загрузке личных партнеров",
    level_activation_title: "Активация уровней партнерской программы",
    your_pool_share: "Ваша доля в пуле",
    new_activated_levels: "Новые активированные уровни",
    activation_status: "Статус активации уровней",
    how_to_activate: "Как активировать",
    levels_activate_automatically:
      "Уровни активируются автоматически при достижении необходимой суммы инвестиций (100$ за уровень)",
    to_activate_level: "Для активации уровня",
    needs_more: "нужно еще",
    refresh_status: "🔄 Обновить статус",
    levels_check_error: "❌ Ошибка при проверке уровней",
    settings_title:
      "⚙️ Настройки\n\nЗдесь вы можете настроить свои ссылки\n\nВыберите действие:",
    link_settings: "⚙️ Настройки ссылок",
    contact_mentor: "🙆‍♂️ Связаться с наставником",
    community_chat: "💬 Чат комьюнити",
    support_service: "⚠️ Служба поддержки",
    language_settings: "🌐 Язык / Language",
    language_changed_el: "✅ Язык изменен на Русский",
    language_changed_ge: "✅ Language changed to Greek",
    language_changed_ka: "✅ ენა შეიცვალა ქართულად",
    language_changed_en: "✅ Language changed to English",
    language_changed_fr: "✅ Language changed to French",
    language_changed_id: "✅ Language changed to Indonesia",
    language_changed_es: "✅ Language changed to Español",
    language_change_error: "❌ Ошибка при изменении языка",
    not_subscribed:
      '❌ Вы не подписались на наш чат. Пожалуйста, подпишитесь и нажмите "Проверить подписку" снова.',
    please_subscribe_to_chat: "Для продолжения необходимо подписаться на наш канал.",
    subscribe_to_chat: "📢 Подписаться на чат",
    check_subscription_btn: "🔄 Проверить подписку",
    subscription_check_error: "Ошибка проверки подписки",
    wallet_not_configured: "❌ Кошелек не настроен",
    wallet_not_configured: "❌ Кошелек не настроен",
    transaction: "Транзакция",
    wallet: "Кошелек",
    user_not_found: "❌ Пользователь не найден в системе. Попробуйте еще раз.",
    invalid_url_format: "❌ Неверный формат ссылки",
    subscription_required_for_links:
      "❌ Для настройки ссылок требуется активная подписка",
    subscription_required_description:
      "💳 Приобретите подписку за 10$/мес. чтобы настроить свои ссылки",
    buy_subscription_button: "💳 Купить подписку",
    domain_not_allowed: "❌ Данная ссылка не ведет на командный курс",
    domain_not_allowed_description:
      "✅ Введите ссылку правильного формата или обратитесь в службу поддержки",
    your_domain: "Ваш домен: {domain}",
    support_service: "⚠️ Служба поддержки",
    link_saved_success: "✅ Ссылка успешно сохранена!",
    link_save_error: "❌ Ошибка при сохранении ссылки",
    invalid_referral_link:
      "❌ Неверный формат ссылки. Пожалуйста, введите корректную HTTP/HTTPS ссылку.",
    referral_link_save_error:
      "❌ Ошибка при сохранении ссылки. Попробуйте еще раз.",
    invalid_investment_amount: "❌ <b>Неверная сумма!</b>",
    investment_amount_limits:
      "Минимальная сумма: <b>1 USDT</b>\nМаксимальная сумма: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Введите корректную сумму числом</i>",
    investment_chosen_amount: "🔄 Вы выбрали сумму <b>{amount} USDT</b>.",
    choose_investment_period: "Выберите срок отправки в пул:",
    investment_yield: "<b>Доходность по срокам:</b>",
    investment_return_info:
      "<i>Все средства <b>(сумма USDT + бонусы)</b> возвращаются автоматически через указанный срок на ваш кошелек</i>",
    select_period: "👇 <b>Выберите срок отправки в пул:</b>",
    search_results: '🔍 Результаты поиска по запросу "{query}":',
    levels: "📊 Уровни: {levels}",
    sent_to_pool: "💰 Отправлено в пул: {amount} USDT",
    admin_prize_set: "✅ Приз установлен: {amount} USDT",
    admin_time_set:
      "✅ Время установлено: начало в {startHour}:00, длительность {durationHours} часов",
    admin_funds_returned: "✅ Средства возвращены для раунда #{roundId}",
    invalid_round_id: "❌ Неверный ID раунда",
    admin_error: "❌ Ошибка при выполнении команды",
    invalid_wallet_format: "❌ Неверный формат адреса кошелька.",
    wallet_format_details:
      "✅ Правильный формат: 0x + 40 символов (цифры и буквы A-F)",
    wallet_wrong_example: "❌ Пример неправильного: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Убедитесь, что адрес принадлежит сети BSC (Binance Smart Chain)",
    wallet_already_used:
      "❌ Этот кошелек уже используется другим пользователем. Пожалуйста, используйте другой кошелек.",
    invalid_tx_hash: "❌ <b>Неверный формат TX Hash!</b>",
    tx_hash_format: "TX Hash должен начинаться с 0x и содержать 64 символов.",
    checking_transaction: "🔍 Проверяю транзакцию...",
    transaction_accepted: "✅ <b>Транзакция принята к проверке!</b>",
    transaction_check_time:
      "Бот проверит статус транзакции в течение 2-5 минут.",
    transaction_notification:
      "Вы получите уведомление, когда транзакция будет подтверждена.",
    transaction_save_error:
      "❌ Ошибка при сохранении транзакции. Пожалуйста, обратитесь в поддержку.",
    use_menu_buttons: "Используйте кнопки меню для навигации",
    level_activation_title: "Активация уровней партнерской программы",
    your_pool_share: "Ваша доля в пуле",
    new_activated_levels: "Новые активированные уровни",
    activation_status: "Статус активации уровней",
    how_to_activate: "Как активировать",
    levels_activate_automatically:
      "Уровни активируются автоматически при достижении необходимой суммы инвестиций (100$ за уровень)",
    to_activate_level: "Для активации уровня",
    needs_more: "нужно еще",
    refresh_status: "🔄 Обновить статус",
    levels_check_error: "❌ Ошибка при проверке уровней",
    referrals_title: (level) => `👥 <b>Ваши рефералы</b> | <b>Уровень ${level}</b>`,
    no_referrals: "На этом уровне пока нет рефералов",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Страница {page} из {total}",
    back_btn: "◀️ Назад",
    select_language: "🌐 <b>Выберите язык:</b>",
    current_language: "Текущий язык: {language}",
    russian: "🇷🇺 Русский",
    english: "🇺🇸 Английский",
    french: "🇫🇷 Французкий",
    indonesia: "🇮🇩 Индонезийский",
    espaniol: "🇪🇸 Испанский",
    italy: "🇮🇹 Итальянский",
    german: "🇩🇪 Немецкий",
    georgia: "🇬🇪 Грузинский",
    greece: "🇬🇷 Греческий",
    swahilli: "🇰🇪 Кенийский",
    turkish: "🇹🇷 Туреций",
    czech: "🇨🇿 Чешский",
    back_to_settings: "◀️ Назад к настройкам",
    total_invested_level: "Личная доля в пуле",
    prev_page: "◀️ Пред.",
    prev: "◀️ Пред.",
    // =========================
    // Ошибки и уведомления
    // =========================
    error: "❌ Произошла ошибка, попробуйте снова.",
    invalid_address: "❌ Неверный адрес.",
    access_denied: "⛔ Нет доступа",
    loading: "⏳ Загрузка...",
    updated: "Обновлено",
    enabled: "✅ Включены",
    disabled: "❌ Выключены",
    turn_on: "🔔 Включить",
    turn_off: "🔕 Выключить",
    description: "Описание",
	// 🔥 ДОБАВЛЯЕМ НОВЫЕ ПЕРЕВОДЫ ДЛЯ РЕФЕРАЛЬНОЙ СИСТЕМЫ
    referral_reward_notification: "🎉 <b>Получено реферальное вознаграждение!</b>\n\n💰 <b>Сумма:</b> {amount} USDT\n\n💼 Средства уже на вашем балансе и доступны для вывода или реинвестирования.",
    referral_reward_my_portfolio: "💼 Мой портфель",
    
    activate_levels_button: "💼 Активировать уровни",
    
    // Мониторинг и проверка
    starting_periodic_check: "🔄 Запуск периодической проверки реферальных транзакций (каждую минуту)...",
    periodic_check_started: "✅ Мониторинг кошельков пользователей запущен",
    checking_recent_transactions: "⏰ Проверка транзакций за последнюю минуту: с {time}",
    wallet_check_progress: "🔍 Проверка свежих транзакций для кошелька: {wallet}",
    fresh_transaction_found: "🕐 Найдена свежая транзакция: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Для кошелька {wallet} найдено {count} свежих реферальных транзакций за последнюю минуту",
    
    // Результаты проверки
    force_check_started: "🔍 Принудительная проверка СВЕЖИХ реферальных транзакций (последняя минута)...",
    no_wallets_for_check: "❌ Нет кошельков пользователей для проверки",
    wallets_check_summary: "📊 Проверяем {count} кошельков пользователей за последнюю минуту",
    check_results: "📊 Итоги проверки за последнюю минуту:",
    wallets_checked: "• Проверено кошельков: {count}",
    fresh_transactions_found: "• Найдено свежих транзакций: {count}",
    successfully_processed: "• Успешно обработано: {count}",
    errors_count: "• Ошибок: {count}",
    
    // Обработка транзакций
    processing_fresh_transaction: "🔍 Обработка СВЕЖЕЙ реферальной TX:\n- Хэш: {hash}\n- Получатель: {recipient}\n- Сумма: {amount} USDT\n- Время: {time}",
    transaction_already_processed: "⏭️ Транзакция {hash} уже обработана ранее",
    user_not_found_by_wallet: "❌ Пользователь с кошельком {wallet} не найден",
    user_found: "✅ Найден пользователь: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ СВЕЖАЯ реферальная награда обработана для пользователя {telegramId}",
    
    // Ошибки
    transaction_processing_error: "❌ Ошибка обработки СВЕЖЕЙ реферальной транзакции",
    wallet_check_error: "❌ Ошибка проверки кошелька {wallet}",
    periodic_check_error: "❌ Ошибка в периодической проверке: {error}",
    force_check_error: "❌ Ошибка принудительной проверки свежих транзакций: {error}",
    
    // Уведомления для администратора
    bot_not_available: "❌ Бот не доступен для отправки уведомления",
    user_blocked_bot: "🚫 Пользователь {telegramId} заблокировал бота",
    user_marked_blocked: "✅ Пользователь {telegramId} помечен как заблокированный",
    
    // Процесс начисления
    referral_reward_start: "🔔 START processReferralRewardEnhanced:\n- Wallet: {wallet}\n- Amount: {amount} USDT\n- TX Hash: {hash}\n- From: {from}\n- Timestamp: {time}",
    transaction_recorded: "✅ Транзакция записана в базу",
    balance_updated: "✅ Баланс пользователя обновлен на +{amount} USDT",
    referral_reward_db_success: "✅ Реферальное вознаграждение успешно обработано в базе данных",
    sending_user_notification: "🔔 Отправка уведомления пользователю {telegramId}",
    user_no_telegram_id: "⚠️ У пользователя {userId} не указан telegram_id",
    database_overflow_error: "⚠️ Ошибка переполнения числового поля, пробуем уменьшить точность",
    retry_failed: "❌ Повторная попытка также не удалась",
    referral_reward_end: "✅ END processReferralRewardEnhanced для кошелька {wallet}",
    
    // Простые начисления
    simple_reward_processing: "🔔 Обработка реферального начисления: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Реферальное начисление записано для пользователя {telegramId}",
    
    // Уведомления
    notification_sent: "✅ Уведомление о реферальной награде отправлено пользователю {telegramId}",
    notification_error: "❌ Ошибка отправки уведомления пользователю {telegramId}: {error}",
    
    // Обновление кошельков
    wallets_updater_started: "✅ Мониторинг кошельков пользователей запущен",
    
    // Сиротские транзакции
    orphan_transaction_processing: "🔍 Обработка сиротской реферальной транзакции для пользователя {userId}",
    missed_reward_notification_sent: "⚠️ Уведомление об упущенной награде отправлено для уровня {level}",
    orphan_transaction_error: "❌ Ошибка обработки сиротской транзакции",
    
    // Общие
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
  },
  en: {
	  subscription_active: "Subscription active",
subscription_not_active: "Subscription not active",
	  referral_reward_notification: "🎉 <b>Referral reward received!</b>\n\n💰 <b>Amount:</b> {amount} USDT\n\n💼 Funds are already in your balance and available for withdrawal or reinvestment.",
    referral_reward_my_portfolio: "💼 My Portfolio",
    
    missed_referral_reward: "😡 <b>Missed referral reward!</b>\n\n💰 <b>Amount:</b> {amount} USDT\n📊 <b>Level:</b> {level}\n\n🔐 Activate level {level} to receive referral rewards!",
    activate_levels_button: "💼 Activate Levels",
    
    // Monitoring and checking
    starting_periodic_check: "🔄 Starting periodic referral transactions check (every minute)...",
    periodic_check_started: "✅ User wallets monitoring started",
    checking_recent_transactions: "⏰ Checking transactions from the last minute: since {time}",
    wallet_check_progress: "🔍 Checking fresh transactions for wallet: {wallet}",
    fresh_transaction_found: "🕐 Fresh transaction found: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 For wallet {wallet} found {count} fresh referral transactions in the last minute",
    
    // Check results
    force_check_started: "🔍 Forced check of FRESH referral transactions (last minute)...",
    no_wallets_for_check: "❌ No user wallets to check",
    wallets_check_summary: "📊 Checking {count} user wallets from the last minute",
    check_results: "📊 Last minute check results:",
    wallets_checked: "• Wallets checked: {count}",
    fresh_transactions_found: "• Fresh transactions found: {count}",
    successfully_processed: "• Successfully processed: {count}",
    errors_count: "• Errors: {count}",
    
    // Transaction processing
    processing_fresh_transaction: "🔍 Processing FRESH referral TX:\n- Hash: {hash}\n- Recipient: {recipient}\n- Amount: {amount} USDT\n- Time: {time}",
    transaction_already_processed: "⏭️ Transaction {hash} already processed",
    user_not_found_by_wallet: "❌ User with wallet {wallet} not found",
    user_found: "✅ User found: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ FRESH referral reward processed for user {telegramId}",
    
    // Errors
    transaction_processing_error: "❌ FRESH referral transaction processing error",
    wallet_check_error: "❌ Wallet check error {wallet}",
    periodic_check_error: "❌ Periodic check error: {error}",
    force_check_error: "❌ Forced check of fresh transactions error: {error}",
    
    // Admin notifications
    bot_not_available: "❌ Bot not available for sending notifications",
    user_blocked_bot: "🚫 User {telegramId} blocked the bot",
    user_marked_blocked: "✅ User {telegramId} marked as blocked",
    
    // Reward process
    referral_reward_start: "🔔 START processReferralRewardEnhanced:\n- Wallet: {wallet}\n- Amount: {amount} USDT\n- TX Hash: {hash}\n- From: {from}\n- Timestamp: {time}",
    transaction_recorded: "✅ Transaction recorded in database",
    balance_updated: "✅ User balance updated by +{amount} USDT",
    referral_reward_db_success: "✅ Referral reward successfully processed in database",
    sending_user_notification: "🔔 Sending notification to user {telegramId}",
    user_no_telegram_id: "⚠️ User {userId} has no telegram_id",
    database_overflow_error: "⚠️ Numeric field overflow error, trying with less precision",
    retry_failed: "❌ Retry also failed",
    referral_reward_end: "✅ END processReferralRewardEnhanced for wallet {wallet}",
    
    // Simple rewards
    simple_reward_processing: "🔔 Processing referral reward: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Referral reward recorded for user {telegramId}",
    
    // Notifications
    notification_sent: "✅ Referral reward notification sent to user {telegramId}",
    notification_error: "❌ Error sending notification to user {telegramId}: {error}",
    
    // Wallet updates
    wallets_updater_started: "✅ User wallets monitoring started",
    
    // Orphan transactions
    orphan_transaction_processing: "🔍 Processing orphan referral transaction for user {userId}",
    missed_reward_notification_sent: "⚠️ Missed reward notification sent for level {level}",
    orphan_transaction_error: "❌ Orphan transaction processing error",
    
    // General
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
	curators_library: "📚 Curators Library",
    no_curators_data: "No curator data available for level {level}",
    curators_library_explanation: "Here you can see sponsors of your partners and their teams",
    statistics: "Statistics",
    total_curators: "Total curators",
    total_referrals: "Total partners",
    average_per_curator: "Average per curator",
    sponsor: "Sponsor",
    partners: "Partners",
    more: "more",    
    incomplete_registration_title: "You haven't completed registration in the bot!",
    incomplete_registration_message: "Complete the registration to start earning profit and not miss opportunities.",
    complete_registration_to_earn: "Complete registration and start earning!",
    complete_registration_to_earn_start: "🚀 <b>Just send the command</b> <code>/start</code> <b>to continue registration!</b>",
    // Новые ключи для обработки транзакций
    invalid_tx_hash_format:
      "❌ <b>Invalid TX Hash format</b>\n\nPlease enter a valid transaction hash (64 characters, starts with 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Checking transaction in blockchain...</b>\n\nGetting information about amount and transaction date...",
    transaction_check_error: "❌ <b>Transaction check error</b>\n\n{error}",
    blockchain_check_error:
      "❌ An error occurred while checking the transaction in the blockchain",
    transaction_found_details:
      "✅ <b>Transaction found!</b>\n\n💰 <b>Amount:</b> {amount} USDT\n📅 <b>Date:</b> {date}\n\n⏰ <b>Choose pool sending period:</b>",
    invalid_period_range:
      "❌ <b>Invalid period</b>\n\nPlease enter a number from 1 to 28 days",
    period_processing_error: "❌ An error occurred while processing the period",

    // Периоды
    period_1_day: "1 day",
    period_7_days: "7 days",
    period_14_days: "14 days",
    period_28_days: "28 days",
    custom_period: "📅 Custom period",

    // Админка
    bot_disabled_success: "🔴 Bot disabled for users",
    bot_disable_error: "❌ Error: {error}",
    admin_panel: "🔧 Admin panel",
    invalid_prize_amount: "Invalid prize amount",
    prize_set_success: "✅ Prize set: {amount} USDT",
    prize_sent_success: "✅ TX hash saved. Prize sent to contract.",
    prize_send_error: "❌ Error: {error}",
    winner_prize_notification:
      "🎯 Your winnings {amount} USDT have been sent to the contract!\n\n⏰ You will receive profit in 28 days.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Domain not allowed</b>\n\n{domain_not_allowed_description}\n\n<b>Your domain:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Your affiliate link has been successfully attached!\n\n🏁 You're on the home stretch! To make communication easier, ask any questions you may have, and get to know the team, you need to join our chat.\n\n1. Go to this chat: @BitnestRus\n\n2. Click the 'Join Group' button\n\n3. Be sure to turn on notifications\n\n4. Click the 'I have joined' button below\n\n👇🏼 Or use the button below to automatically go to our chat",
    chat_link: "📢  Join Group",
    disclaimer:
      "✅ Dear user, this system is designed for training and informing new users who have not previously interacted with the Bitnest system\n\n🤔 Please tell us, have you been registered before?\n\n1. Click (NO) - if you don't have an account in the system yet and want to complete training and become part of our team\n\n2. Click (YES) - if you already have an account in the system and have sent USDT to circulation\n\nThe services of this bot are provided only to new users who have not been in the system before and clicked the ✅ NO button",
    disclaimer_no: "✅ NO, I'M A NEW PARTICIPANT",
    disclaimer_yes: "⛔️ YES, I'M A MEMBER OF ANOTHER TEAM",
    block_confirmation_title: "Confirmation",
    block_confirmation_message: "If you are a member of another team, contact your curator.\n\nAre you sure you want to block your account?",
    back_button: "◀️ Back",
    confirm_block_button: "✅ Yes, block",
    account_blocked_message: "🚫 <b>Account blocked</b>\n\nYour account has been blocked at your request.\n\nIf this happened by mistake, contact support @BitnestRusSupport.",
    account_blocked:
      "❌ Unfortunately, the services of this bot are provided only to new users. Your account is not active. For any questions @BitnestRusSupport",
    please_try_again: "Please try again",
    add_custom_transaction: "➕ Add transaction",
    your_investment_portfolio_add: "➕ Add transaction",
    adding_custom_transaction: "🔗 <b>Adding your transaction</b>",
    enter_tx_hash_prompt: "Please enter <b>TX Hash</b> of your transaction:",
    transaction_requirements:
      "• Must be executed on BSC network (Binance Smart Chain)\n• Must be a USDT transaction",
    tx_hash_example:
      `📝 <b>Example:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nView your transactions to the pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Go to</a>`,
    enter_amount_prompt: "💰 <b>Enter transaction amount in USDT:</b>",
    amount_example: "Example: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Select investment period:</b>",
    verifying_transaction: "🔍 <b>Verifying transaction in blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nAmount: {amount} USDT\nPeriod: {period} days",
    please_wait: "Please wait...",
    transaction_already_exists:
      "This transaction has already been added to the system",
    transaction_not_found: "Transaction not found",
    transaction_not_confirmed: "Transaction not confirmed or failed",
    transaction_wrong_sender:
      "Transaction sent from wrong wallet. Your wallet: {userWallet}, sender in transaction: {txFrom}",
    transaction_wrong_receiver:
      "Transaction sent to wrong system wallet. Recipient should be: {systemWallet}",
    transaction_amount_mismatch:
      "Amount doesn't match. In blockchain: {blockchainAmount} USDT, you entered: {enteredAmount} USDT",
    transaction_not_usdt: "This is not a USDT transaction",
    transaction_decode_error: "Failed to decode USDT transaction data",
    blockchain_error: "Error checking in blockchain: {error}",
    transaction_added_success: "✅ <b>Transaction successfully added!</b>",
    investment_details: "📊 <b>Investment details:</b>",
    investment_amount: "• Amount: {amount} USDT",
    investment_period: "• Period: {period} days",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Profitability: {profit}%",
    investment_added_to_portfolio: "💼 Investment added to your portfolio.",
    transaction_add_error: "❌ <b>Error adding transaction</b>",
    error_reason: "Reason: {error}",
    language_changed_success: "✅ Language successfully changed to English!",
    description: "Description",
    welcome: `👋🏼 Welcome <b>{username}</b> - this is our community's team tool. This bot will guide you step-by-step through the system and help you become part of our team!\n\n🎥 We have prepared step-by-step video instructions explaining and showing the entire process\n\n👇🏼 To start learning and begin getting your first results, click the "🎓 Start Learning" button`,
    welcome_back: "👋 You have already completed the training! Welcome back!",
    education_title: "🎓 Educational Materials\nChoose a topic:",
    finish: "✅ Training completed!",

    // =========================
    // Wallet
    // =========================
    wallet_installation:
      "📲 <b>Wallet Installation</b>\nDownload and install one of the supported wallets.",
    ask_wallet_address:
      "👍🏼 Excellent choice! Let's start learning:\n\n💵 First things first in the Web3 and DeFi world, you need to have your own personal crypto wallet. We will install it right now:\n\n1. Go to the official <b>MetaMask</b> application website\n\n2. Install the app on your phone\n\n3. Create a wallet and be sure to write down the seed phrase in a secure place\n\n4. Configure the BSC network - Binance Smart Chain (BEP20)\n\n5. Copy your public wallet address 0x.............\n\n6. Send this address as a message in the field below 👇🏼",
    enter_wallet: `🥳 Congratulations, your wallet has been successfully linked!\n\n📝 In this step, you need to register on the official Bitnest website (see video)\n\n1. Copy this link \n\n<code>{referral_link_bitnest}</code>\n\n and open it in the internal browser of your wallet\n\n2. Click "Connect" in the top right corner\n\n3. Confirm authorization on the site in the pop-up window of your wallet \n\n<i><b>*If the site does not open, enable the 3-letter program (which will allow you to access the site)</b></i>\n\n👇🏼 Or use the buttons below to automatically go to your wallet and open the required page`,
    your_wallet: "💼 Your Crypto Wallet\n\n📌 Address (BEP20)",
    install_wallet:
      "👍🏼 Excellent choice! Let's start learning:\n\n💵 First things first in the Web3 and DeFi world, you need to have your own personal crypto wallet. We will install it right now:\n\n1. Go to the official <b>MetaMask</b> application website\n\n2. Install the app on your phone\n\n3. Create a wallet and be sure to write down the seed phrase in a secure place\n\n4. Configure the BSC network - Binance Smart Chain (BEP20)\n\n5. Copy your public wallet address 0x.............\n\n6. Send this address as a message in the field below 👇🏼",
    loading_balance: "⏳ Getting balance information...",
    refresh: "🔄 Refresh",
    bnb_balance: "Balance:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Token Balance",
    wallet_not_configured: "❌ Wallet not configured",
    send_usdt: "💸 Send USDT",
    send_usdc: "💸 Send USDC",
    check_my_investment: "💸 Send USDT", // Duplicate key, same translation
    error_amount_not_selected: "❌ Error: amount not selected",
    error_wallet_not_configured: "❌ Error: wallet not configured",
    back_to_amount_selection: "◀️ Back to amount selection",
    configure_wallet: "⚙️ Configure Wallet",

    // =========================
    // DeFi and BitNest
    // =========================
    your_mentor: (mentor) => `Your mentor: ${mentor}`,
    write_to_mentor: "✉️ Write to mentor",
    what_is_bitnest:
      "🏗 <b>What is BitNest</b>\nTransparent operations, control of your funds.",
    defi_basics: "📊 DeFi Basics.\nNext — how investing in pools works.",
    liquidity_pool_text:
      "💎 Liquidity Pool\n\n💵 Here you can send USDT to the liquidity pool and receive bonuses.\n\nChoose an action:",
    my_investments_empty: "📊 You have no investments yet.",
    investment_saved: "✅ Data saved",
    investment_return_received: (amount) =>
      `Your circulation of <b>${amount} $</b> has been received`,
    congrats_profit: "Congratulations on receiving profit!",
    referral_reward_received: "You received a referral reward!",
    back_to_main_menu: "🏠 To main menu",
    user: "User",
    amount: "Amount",
    congrats_referral_earned: "Congratulations! You earned a referral reward!",
    balance_replenished: (amount) =>
      `Your balance has been replenished by ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `You received a referral reward ${amount}`,
    you_have_inactive_levels: "You have inactive levels!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `By sending ${amount} USDT you can activate levels: ${levels}`,
    activate_levels_to_earn: "Activate levels to earn income from referrals!",
    new_levels_activated: (levels) => `New levels activated: ${levels}`,
    now_earn_from_levels: "Now you earn income from these levels of your team!",
    invalid_tx_hash_contact_support:
      "❌ Invalid transaction hash. Please contact support.",
    congrats_liquidity_pool_success:
      "Congratulations! Your send to the liquidity pool was successful!",
    transaction_details: "Transaction Details",
    block: "Block",
    period: "Term",
    days: "days",
    total_return: "Total return amount",
    return_date: "Return date",
    error_updating_pool_status:
      "❌ Error updating pool send status. Contact support.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transaction not found after several attempts.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Possible reasons:\n` +
      `• Transaction not yet confirmed by the network\n` +
      `• Invalid TX Hash\n` +
      `• BSC network issues\n\n` +
      `Please check the TX Hash and try again or contact support.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Transaction sent to the wrong address!\n\n` +
      `▸ Received address: ${actualTo}\n` +
      `▸ Expected address: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Please make sure you are sending USDT to the correct pool address.`,
    transaction_not_confirmed: (status) =>
      `❌ Transaction not confirmed. Status: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Please check the transaction status on BscScan and contact support if necessary.",
    error_checking_transaction:
      "❌ Error checking transaction. Try again later or contact support.",
    investment_confirmation:
      `💰 <b>Confirm Send to Pool</b>\n\n` +
      `📊 <b>Transaction Details:</b>\n` +
      `▸ Amount: <b>{amount} USDT</b>\n` +
      `▸ Term: <b>{period} days</b>\n` +
      `▸ Yield: <b>{profitPercent}%</b>\n` +
      `▸ Expected profit: <b>{expectedProfit} USDT</b>\n` +
      `▸ Total return amount: <b>{totalReturn} USDT</b>\n` +
      `▸ Return date: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Send Instructions:</b>\n\n` +
      `1. Open the MetaMask app\n\n` +
      `2. Go to the official Bitnest website\n\n` +
      `3. Click <b>"Connect"</b> in the top right corner - <i>(if you see the wallet icon, proceed to the next step)</i>\n\n` +
      `4. Click on the wallet icon and go to the Loop section\n\n` +
      `5. Enter the send amount\n\n` +
      `6. Select the send term\n\n` +
      `7. Click the "Circulation" button\n\n` +
      `8. Confirm the send on the site in your wallet's pop-up window\n\n` +
      `👇🏼 Or use the buttons below to automatically go to your wallet and open the required page`,
    send_metamask_mobile: "🦊 Send - MetaMask 📲",
    transaction_search_timer: `⚠️ Awaiting your send, instructions above\n\n<b>🔎 After sending, we will start searching for the transaction ...</b>\n⏰ <b>Time allotted for sending and searching your transaction:</b> 20:00 min...\n\n`,
    cancel_search: "❌ Cancel search",
    failed_delete_timer_message: "Failed to delete timer message: {error}",
    investment_details_base:
      `💰 <b>Confirm Send to Pool</b>\n\n` +
      `📊 <b>Transaction Details:</b>\n` +
      `▸ Amount: <b>{amount} USDT</b>\n` +
      `▸ Term: <b>{period} days</b>\n` +
      `▸ Status: <b>Cancelled</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Transaction search cancelled by user</b>",
    failed_update_message: "Failed to update message, sending new one: {error}",
    transaction_search_cancelled_log:
      "✅ Transaction search cancelled for user {userId}",
    no_active_transaction_search: "❌ No active transaction search found",
    error_cancelling_search: "❌ Error cancelling search: {error}",
    error_cancelling_search_user:
      "❌ An error occurred while cancelling the search",
    processing_found_transaction:
      "🔄 Processing found transaction for user {userId}",
    investment_in_process_not_found:
      "Investment with status in_process not found",
    failed_update_investment_status: "Failed to update investment status",
    failed_delete_previous_message:
      "Failed to delete previous message: {error}",
    transaction_confirmed_message:
      `💰 <b>Confirm Send to Pool</b>\n\n` +
      `📊 <b>Transaction Details:</b>\n` +
      `▸ Amount: <b>{amount} USDT</b>\n` +
      `▸ Term: <b>{period} days</b>\n` +
      `▸ Expected profit: <b>{expectedProfit} USDT</b>\n` +
      `▸ Total return amount: <b>{totalReturn} USDT</b>\n` +
      `▸ Return date: <b>{returnDate}</b>\n\n` +
      `✅ <b>Transaction confirmed!</b>\n` +
      `📊 <b>Transaction Hash:</b> <code>{hash}</code>\n` +
      `💰 <b>Actual amount:</b> {actualAmount} USDT\n` +
      `⏰ <b>Confirmed:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Activating user levels based on investment amount",
    user_prefix: "User_",
    notification_sent_to_referrer:
      "✅ Notification sent to referrer {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Referrer not found or missing necessary data",
    user_has_no_referrer: "⚠️ User has no referrer",
    error_sending_referral_notification:
      "Error sending referral notification: {error}",
    error_sending_missed_rewards:
      "Error sending missed rewards notifications: {error}",
    error_sending_missed_referrals:
      "Error sending missed referrals notification: {error}",
    level_activation_notifications_sent:
      "🎯 Level activation notifications sent for levels: {levels}",
    error_sending_level_activation:
      "Error sending level activation notification: {error}",
    transaction_processed_successfully:
      "✅ Transaction processed for user {userId}",
    error_processing_transaction:
      "❌ Error processing transaction for user {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Transaction processing error</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Error: {error}\n\n` +
      `Please contact support.`,
    // error_sending_notification: "Error sending notification: {error}", // Duplicate key, appears later
    // new_levels_activated: "New levels activated!", // Duplicate key, already translated above
    activated_levels: "Activated Levels",
    levels_activation_benefit:
      "Now you earn income from these levels of your team!",
    referral_made_transaction: "Your referral made a transaction!",
    your_referral: "Your referral",
    congrats_referral_reward: "Congratulations! You earned a referral reward!",
    transaction_check_started: "Starting transaction check...",
    checking_for: "Checking will be performed for",
    minutes: "minutes",
    // transaction_not_found_after_attempts: "Transaction {txHash} not found after {attempts} check attempts. Please check manually on BscScan or contact support.", // Duplicate key, already translated above (functional difference? Check usage)

    // =========================
    // Affiliate Program
    // =========================
    affiliate_text: `👥 Your affiliate network, {username}\n\n17 levels of your team and earning income from each level based on your referrals' yield\n\n<b>Level 1</b> - 20%\n<b>Level 2</b> - 10%\n<b>Level 3 - 7</b> - 5%\n<b>Level 8 - 10</b> - 3%\n<b>Level 11 - 17</b> - 1%\n\nTo activate each level, your share in the pool must correspond to <b>Level № * 100$</b>\nTo activate all levels, your personal share in the pool = <b>1700$</b>\n\n📊 Overall level statistics:\n{pools.levels}\n\n💰 Total: 0 ref. | 0.000 USDT`,
    your_referral_sent: "Your referral made a send!",
    missed_referral_reward: (missedAmount, level) =>
      `You missed a referral reward ${missedAmount}$ from level ${level}`,
    activate_level_to_earn:
      "Activate the level to earn income from the entire structure!",
    check_subscription: "✅ I subscribed",
    website_ref:
      '🎉 Congratulations on successful registration!\n\n🔗 In this step, you need to add your affiliate link from your Bitnest personal account\n\n1. Go to the official Bitnest website\n\n2. Click "<b>Connect</b>" in the top right corner<i> - (if you see the wallet icon, proceed to the next step)</i>\n\n3. Click "<b>Invite Friends</b>"\n\n4. Click "<b>Copy my link</b>"\n\n5. Send it in the field below 👇🏼',

    // =========================
    // Raffles and Events
    // =========================
    raffle: "🎁 RAFFLE 🎁",
    daily_raffle: "🎉 Daily Raffle!",
    current_prize: "🏆 Prize",
    participants: "👥 Already participating ",
    end_time: "⏰ Results",
    raffle_text: `✅ <b>Participation conditions:</b>\n• Minimum active share in the pool: 10 USDT\n• One attempt per person\n\n`,
    raffle_requirement:
      "An active share in the pool is required to participate in the raffle",
    raffle_wallet_not_set: "⚠️ Set up your wallet first",
    raffle_already_registered:
      "✅ You are successfully registered in the current round!",
    successfully_registered: "You are successfully registered for the raffle!",
    registration_failed: "Registration failed",
    participate_button: "🎟 Participate",
    no_active_raffle: "There is no active raffle at the moment.",
    already_registered_in_raffle:
      "✅ You are already registered in the current raffle!",
    new_raffle_started:
      "💰 Prize: {prize} USDT\n" + "⏰ Time left: {hours} hours\n\n",
    register_in_raffle: "🤖 Raffle Registration",
    raffle_error: "❌ Error: {error}",

    // From Wallet section
    raffle_min_investment_required:
      "An active share in the pool from 10$ is required to participate in the raffle\n\n" +
      "Send USDT to the pool to gain the ability to participate.",
    raffle_registration_success:
      "You are successfully registered!\n\nNow you are participating in the raffle!",
    eligible_to_participate: "💪 You are eligible to register for the raffle",
    raffle_registration_error: "❌ Registration error: {error}",

    // From Menu and Navigation (for registration check)
    not_registered_yet:
      "❌ You are not registered yet. Click your wallet button to register.",
    register_button: "📝 Register",
    registration_check_error: "❌ Error checking registration",
    registering_wallet: "🔄 Registering your wallet...",
    registration_success:
      "✅ You are successfully registered in the current round!",
    registration_error: "❌ Registration error",
    try_later_or_contact_admin: "Try later or contact the administrator.",
    registration_process_error: "❌ Registration process error",
    mentor_not_found: "❌ <b>Mentor not found</b>",
    mentor_not_found_description:
      "You do not have an assigned mentor. Please contact support.",
    // =========================
    // Other
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 You have a new referral @${username}`,
    friend: "friend",
    welcome_error: "👋 Welcome! An error occurred while loading the menu.",
    link_subscription_pending:
      "⌛ <b>Subscription payment pending</b>\n\n" +
      "Your subscription is awaiting payment confirmation. " +
      "If you have already paid, click the button below to check the status.",
    check_payment: "🔄 Check Payment",
    create_new_payment: "💳 Create New Payment",
    link_subscription_required:
      "❌ <b>Link settings access by subscription</b>\n\n" +
      "✅ To configure your referral link and activate your bot, you need to purchase a subscription for 10$/month.\n\n",
    buy_subscription: "💳 Buy Subscription (10$/month)", // Duplicate key, appears later
    link_settings_error: "❌ Error loading link settings",
    setup_wallet_first: "❌ First, set up your wallet in settings",
    custom_amount_message:
      "💰 <b>Enter your amount to send to the pool </b>\n\n" +
      "Minimum amount: <b>1 USDT</b>\n" +
      "Maximum amount: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Send a number - the amount in USDT in the field below</i>",

    // =========================
    // Menu and Navigation
    // =========================
    menu_title: `🎉 <b>Welcome, {username}</b>\n\n🚀 <b>BitnestRus Bot - Your reliable assistant and team tool</b>\n\n✨ <b>Bot capabilities:</b>\n• 🎁 Money prize raffles\n• 💰 Your wallet financial statistics\n• 🌊 Instructions for working with the liquidity pool\n• 👥 Multi-level affiliate program\n• 📊 Analytics and notifications\n\n👇 Select a section in the menu:\n`,
    back: "◀️ Back",
    next: "➡️ Next",
    nextreg: " ✍🏼 I have registered",
    my_wallet: "💰 My Wallet",
    liquidity_pool: "🌊 Liquidity Pool",
    my_portfolio: "💼 My Portfolio",
    presentation: "🎥 Presentation",
    video_instructions: "📚 Video Instructions",
    official_website: "🔗 Official Website",
    oficial_site: "✅ Official Website",
    affiliate: "👥 Affiliate Program",
    settings: "⚙️ Settings",
    admin: "🔧 Admin Panel",
    settings_title:
      "⚙️ Settings\n\nHere you can configure your links\n\nChoose an action:",
    start_education: "🎓 Start Learning",
    download_metamask: "🦊 Download - MetaMask",
    register_metamask: "🦊 Registration - MetaMask",
    register_metamask_mobile: "🦊 Registration - MetaMask",
    invest_now_message:
      `💰 <b>Send USDT to Liquidity Pool</b>\n\n` +
      `<b>Yield by term:</b>\n` +
      `• <b>1 day</b> - 0.4%\n` +
      `• <b>7 days</b> - 4%\n` +
      `• <b>14 days</b> - 9.5%\n` +
      `• <b>28 days</b> - 24%\n\n` +
      `<i>All funds <b>(USDT amount + bonuses)</b> are returned automatically after the specified term to your wallet</i>\n\n` +
      `📌 <b>Your balance:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Select the amount to send to the pool:</b>`,
    custom_amount: "🗂 Custom Amount",
    error_getting_data: "❌ Error getting data, try again.",
    choose_period_message:
      `🔄 You selected the amount <b>{amount} USDT</b>. Select the send term to the pool:\n\n` +
      `<b>Yield by term:</b>\n` +
      `• <b>1 day</b> - 0.4%\n` +
      `• <b>7 days</b> - 4%\n` +
      `• <b>14 days</b> - 9.5%\n` +
      `• <b>28 days</b> - 24%\n\n` +
      `<i>All funds <b>(USDT amount + bonuses)</b> are returned automatically after the specified term to your wallet</i>\n\n` +
      `👇 <b>Select the send term to the pool:</b>`,
    back_to_amount_selection: "◀️ Back to amount selection", // Duplicate key, already translated above
    main_menu: "🏠 To Main Menu",
    timer_message_id_not_found: "❌ timer_message_id not found",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ Awaiting your send, instructions above\n\n<b>🔎 After sending, we will start searching for the transaction ...</b>\n\n⏰ <b>Time allotted for sending and searching your transaction:</b> ${timeString}  min...\n\n`,
    cancel_search: "❌ Cancel search", // Duplicate key, already translated above
    timer_error: "❌ Timer error: {error}",
    timer_stopped_message_not_found:
      "⏹️ Timer stopped: message not found or unavailable",
    timer_minor_error_continue: "⚠️ Minor timer error, continuing...",
    transaction_timeout_message:
      "⏰ <b>Transaction search time expired</b>\n\n" +
      "❌ Could not find transaction confirmation within the allotted time.\n\n" +
      "Possible reasons:\n" +
      "• Transaction not yet confirmed by the network\n" +
      "• Invalid TX Hash\n" +
      "• BSC network issues\n\n" +
      "Please check the transaction status on BscScan and try again.",
    transaction_timeout_log: "⏰ Transaction timeout for user {userId}",
    transaction_timeout_error:
      "❌ Error processing transaction timeout: {error}",
    transaction_not_found_try_again:
      "❌ Transaction not found. Try starting over.",
    awaiting_transaction_check:
      "🔍 <b>Awaiting transaction check...</b>\n\n" +
      "The bot will check the blockchain within 2-5 minutes.\n" +
      "You will receive a notification about the result.",
    transaction_not_found_message:
      `❌ <b>Transaction not found</b>\n\n` +
      `Possible reasons:\n` +
      `• Transaction not yet confirmed by the network\n` +
      `• Sent not to the pool address\n` +
      `📞 If you sent USDT, contact support\n` +
      `🔍 TX Hash: provide the transaction hash`,
    transaction_not_found_notification_sent:
      "✅ Transaction not found notification sent to user {userId}",
    error_sending_notification: "Error sending notification: {error}", // Duplicate key, appears earlier
    request_tx_hash_message:
      "📝 <b>Please enter the transaction hash (TX Hash):</b>\n\n" +
      "After sending USDT, copy the TX Hash from your wallet and send it here.",
    error_requesting_tx_hash: "Error requesting TX Hash: {error}",
    presentation_message:
      `📊 <b>Presentation</b>\n\n` +
      `🎥 Detailed video presentation that will help you understand the platform's advantages and this tool\n\n`,
    presentation_error: "Presentation error: {error}",
    presentation_load_error: "❌ Error loading presentation",
    user_not_determined: "❌ Could not determine user",
    not_configured: "Not configured",
    from_your_inviter: `\n👤 From your inviter: {name}`,
    // user: "User", // Duplicate key, already translated above
    system_video_instruction: `\n📋 System video instruction`,
    video_instructions_header: "🎥 <b>Video Instructions</b>",
    video_instructions_description:
      "📚 Detailed video course where you will learn all the intricacies of working with the system and learn how to interact with the pool",
    video_link_available: `🔗 <b>Video link:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Link not available</b>\n\n`,
    video_instruction_error: "Video instruction error: {error}",
    video_instruction_load_error: "❌ Error loading video instructions",
    system_link: "🌐 System Link",
    from_your_mentor: "👤 From Your Mentor",
    // user: "User", // Duplicate key
    your_link: "🌐 Your Link",
    visit_official_website:
      "Visit the official platform website and learn all the details and rules of working with the service",
    link: "Link",
    open_metamask: "🦊 Open MetaMask",
    open_in_browser: "💻 Open in PC Browser",
    website_error: "❌ Error loading website information",
    your_investment_portfolio: "Your active share portfolio in the pool",
    // transaction: "Transaction", // Duplicate key, appears later
    // amount: "Amount", // Duplicate key
    term: "Term",
    // days: "days", // Duplicate key
    profitability: "Yield",
    time_left: "Time left",
    d: "d",
    h: "h",
    expected_profit: "Expected profit",
    type: "Type",
    incoming_transaction: "Incoming transaction",
    refund: "Refund",
    status: "Status",
    active: "Active",
    archived: "Archived send",
    returned: "Returned",
    total_statistics: "Total statistics",
    total_active_amount: "Total active amount",
    page: "Page",
    of: "of",
    portfolio_error: "⚠️ Error loading portfolio",
    congrats_on_profit: "Congratulations on receiving profit!", // Similar to congrats_profit?
    bot_not_available: "Bot not available for sending notification",
    investment_notification_sent: "Investment return notification sent to user",
    investment_notification_error:
      "Error sending investment return notification:",
    check_old_transactions: "🔍 Check Old Transactions",
    checking_old_transactions: "Checking old transactions",
    this_may_take_seconds: "This may take a few seconds...",
    wallet_not_found: "❌ Wallet not found. Connect it in your profile.",
    check_completed: "Check completed",
    added_to_portfolio: "Added to portfolio",
    no_transactions_found: "No transactions found",
    target_wallet: "Target Wallet",
    // checking_old_transactions: "Checking old transactions", // Duplicate key
    // this_may_take_seconds: "This may take a few seconds...", // Duplicate key
    // wallet_not_found: "Wallet not found", // Duplicate key
    // check_completed: "Check completed", // Duplicate key
    found_transactions: "Found transactions",
    already_added: "already added",
    added: "added",
    summary: "Summary",
    new_added: "New added",
    already_exist: "Already exist",
    total_checked: "Total checked",
    check_transactions_error: "Error checking transactions",
    transactions: "transactions",
    // my_portfolio: "💼 My Portfolio", // Duplicate key, already translated above
    your_active_pool: "<b>Your active share in the pool</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>Your active share in the pool:</b> ${amount}$`,
    your_personal_share: "Your total share in the pool",
    level_activation_title: "Affiliate Program Level Activation",
    // check_transactions_error: "⚠️ Error checking transactions. Try again later.", // Duplicate key
    affiliate_network_header: (username) =>
      `👥 <b>Your affiliate network, ${username}</b>`,
    affiliate_network_description:
      "17 levels of your team and earning income from each level based on your referrals' yield",
    level_percentages:
      `<b>• Level 1</b> - 20%\n` +
      `<b>• Level 2</b> - 10%\n` +
      `<b>• Level 3-7</b> - 5%\n` +
      `<b>• Level 8-10</b> - 3%\n` +
      `<b>• Level 11-17</b> - 1%`,
    level_activation_requirements:
      "To activate each level, your share in the pool must correspond to <b>Level № * 100$</b>",
    all_levels_activation_requirement:
      "To activate all levels, your personal share in the pool = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>Your personal share in the pool:</b> ${amount}$`, // Duplicate key? Check usage
    activated_levels: (count) => `🎯 <b>Levels activated:</b> ${count}/17`,
    level_statistics: "📊 <b>Level statistics:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Lvl. ${level}: ${count} pers. | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Lvl. ${level}: No referrals`,
    no_level_data: "<i>No level data yet</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Total:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 My Partners",
    my_team: "🧏‍♂️ My Team",
    ref_link: "🔗 Ref Link",
    enable_levels: "🔓 Enable Levels",
    search: "🔍 Search",
    statistics: "📈 Statistics",
    affiliate_error: "Affiliate error: {error}",
    affiliate_load_error: "⚠️ Error loading affiliate program",
    // buy_subscription: "💰 Purchase subscription", // Duplicate key, appears later
    subscription_text:
      "To purchase a subscription, contact the cryptobot:\n\nAfter paying for the subscription, you will get access to the referral program and other exclusive features.",
    go_to_cryptobot: "📲 Go to Cryptobot",
    check_subscription_status: "🔄 Check Subscription",
    subscription_active:
      "✅ Your subscription is active! Now you can invite referrals.",
    subscription_inactive:
      "❌ Subscription is not active yet. Please complete the payment or contact support.",
    subscription_check_error: "❌ Error checking subscription status",
    data_not_found: "Data not found. Refresh portfolio",
    last_page: "This is the last page",
    first_page: "This is the first page",
    page_load_error: "Error loading page",
    edit_message_error: "Could not edit message, sending new one:",
    // refresh: "🔄 Refresh", // Duplicate key, already translated above
    referral_access_subscription:
      "❌ <b>Access to referral program by subscription</b>\n\n✅ To configure your referral link and activate your bot, you need to purchase a subscription for 10$/month.",
    referral_invite_text:
      "👋🏻 Hi! If you want to get passive income from the TOP-1 exchange, join using my link 👆",
    your_referral_link: "Your Referral Link",
    referral_invite_description:
      "💡 Invite friends and earn income from their active shares in the pool!",
    share_link: "📢 Share Link",
    // buy_subscription: "💳 Buy Subscription (10$/month)", // Duplicate key, already translated above
    referral_link_error: "❌ Error loading referral link",
    link_copied: "📋 Referral link copied:",
    share_with_friends: "Now you can share it with friends!",
    link_settings_title: "⚙️ Your Link Settings",
    link_settings_description: "These links will be visible to your referrals:",
    choose_link_to_change: "💡 Select link to change:",
    change_video: "🎥 Change Video",
    cancel_input: "❌ Cancel Input",
    // user_not_found: "❌ User not found", // Duplicate key, appears later
    link_access_subscription: "❌ Access to link settings by subscription",
    subscription_required:
      "✅ To configure your referral link and activate your bot, you need to purchase a subscription for 10$/month.",
    // buy_subscription_button: "💳 Buy Subscription (10$/month)", // Duplicate key, appears later
    payment_pending: "⌛ Subscription payment pending",
    payment_pending_description:
      "Your subscription is awaiting payment confirmation. If you have already paid, click the button below to check the status.",
    // check_payment: "🔄 Check Payment", // Duplicate key, already translated above
    // create_new_payment: "💳 Create New Payment", // Duplicate key, already translated above
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ All links reset to system settings",
    reset_links_error: "❌ Error resetting links",
    subscription_payment_title: "💳 Subscription payment for link settings",
    subscription_price: "Cost: <b>10 USDT</b>",
    subscription_duration: "Validity period: <b>1 month</b>",
    pay_via_cryptobot: "🔗 Pay via Cryptobot",
    // check_payment: "🔄 Check Payment", // Duplicate key
    cancel: "❌ Cancel",
    subscription_payment_error:
      "⚠️ An error occurred while creating the subscription. Please try again later.",
    subscription_description: "Subscription for link settings (1 month)",
    no_data_to_display: "❌ No data to display",
    nothing_found_for_query: "For query",
    no_referrals_on_levels: "You have no referrals on levels yet",
    invested_in_pool: "Sent to pool",
    found_referrals: "Found referrals",
    subscription_activated: "✅ Subscription successfully activated!",
    subscription_activated_description:
      "🎉 Now you have access to all link settings and partner system functions.",
    payment_processing: "⌛ Payment processing. Try checking later.",
    invoice_expired: "❌ Invoice expired.",
    payment_not_found: "❌ Payment not found or cancelled.",
    payment_check_error: "⚠️ Error checking payment.",
    payment_check_error_description:
      "Please try again later or contact support.",
    try_again: "🔄 Try Again",
    new_payment: "💳 New Payment",
    enter_presentation_link: "📊 Enter presentation link:",
    enter_video_link: "🎥 Enter video instructions link:",
    enter_official_link: "🌐 Enter official website link:",
    referral_stats: "📊 Level Statistics",
    level: "Level",
    referrals_count: "👥 Referrals:",
    total_invested: (amount) => `💰 Sent to pool: ${amount} USDT`,
    search_referrals_prompt: "🔍 Enter username to search:",
    no_referrals: "👥 You have no referrals yet",
    level_not_found: "❌ Level not found",
    your_referrals: "👥 Your Referrals",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Page ${current} of ${total}`,
    no_referrals_on_level: "No referrals on this level yet",
    back_to_affiliate: "◀️ Back to Affiliate Program",
    your_personal_partners: "Your Personal Partners",
    id: "ID",
    total_personal_partners: "📊 Total Personal Partners",
    no_personal_partners_yet: "You have no personal partners yet",
    invite_friends_tip:
      "💡 Invite friends using your referral link to become your personal partners!",
    // my_team: "🧏‍♂️ My Team", // Duplicate key, already translated above
    personal_partners_error: "❌ Error loading personal partners",
    // level_activation_title: "Affiliate Program Level Activation", // Duplicate key, already translated above
    your_pool_share: "Your share in the pool",
    new_activated_levels: "New Activated Levels",
    activation_status: "Level Activation Status",
    how_to_activate: "How to activate",
    levels_activate_automatically:
      "Levels are activated automatically upon reaching the required investment amount (100$ per level)",
    to_activate_level: "To activate level",
    needs_more: "needs more",
    refresh_status: "🔄 Refresh Status",
    levels_check_error: "❌ Error checking levels",
    // settings_title: "⚙️ Settings\n\nHere you can configure your links\n\nChoose an action:", // Duplicate key, already translated above
    link_settings: "⚙️ Link Settings",
    contact_mentor: "🙆‍♂️ Contact Mentor",
    community_chat: "💬 Community Chat",
    support_service: "⚠️ Support Service",
    language_settings: "🌐 Language / Language",
    language_changed_ru: "✅ Language changed to Russian",
    language_changed_en: "✅ Language changed to English",
    language_changed_fr: "✅ Language changed to French",
    language_changed_id: "✅ Language changed to Indonesian",
    language_changed_es: "✅ Language changed to Spanish",
    language_change_error: "❌ Error changing language",
    not_subscribed:
      '❌ You are not subscribed to our chat. Please subscribe and press "Check Subscription" again.',
	please_subscribe_to_chat: "To continue, you need to subscribe to our channel.",
    subscribe_to_chat: "📢 Subscribe to Chat",
    check_subscription_btn: "🔄 Check Subscription",
    subscription_check_error: "Subscription check error",
    transaction: "Transaction",
    wallet: "Wallet",
    // user_not_found: "❌ User not found in the system. Try again.", // Duplicate key, already translated above
    invalid_url_format: "❌ Invalid link format",
    subscription_required_for_links:
      "❌ Active subscription required for link settings",
    subscription_required_description:
      "💳 Purchase a subscription for 10$/month to configure your links",
    // buy_subscription_button: "💳 Buy Subscription", // Duplicate key, appears later
    domain_not_allowed: "❌ This link does not lead to the team course",
    domain_not_allowed_description:
      "✅ Enter a link of the correct format or contact support service",
    your_domain: "Your domain: {domain}",
    // support_service: "⚠️ Support Service", // Duplicate key, already translated above
    link_saved_success: "✅ Link successfully saved!",
    link_save_error: "❌ Error saving link",
    invalid_referral_link:
      "❌ Invalid link format. Please enter a valid HTTP/HTTPS link.",
    referral_link_save_error: "❌ Error saving link. Try again.",
    invalid_investment_amount: "❌ <b>Invalid amount!</b>",
    investment_amount_limits:
      "Minimum amount: <b>1 USDT</b>\nMaximum amount: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Enter the correct amount as a number</i>",
    investment_chosen_amount:
      "🔄 You selected the amount <b>{amount} USDT</b>.",
    choose_investment_period: "Select the send term to the pool:",
    investment_yield: "<b>Yield by term:</b>",
    investment_return_info:
      "<i>All funds <b>(USDT amount + bonuses)</b> are returned automatically after the specified term to your wallet</i>",
    select_period: "👇 <b>Select the send term to the pool:</b>",
    search_results: '🔍 Search results for "{query}":',
    levels: "📊 Levels: {levels}",
    sent_to_pool: "💰 Sent to pool: {amount} USDT",
    admin_prize_set: "✅ Prize set: {amount} USDT",
    admin_time_set:
      "✅ Time set: start at {startHour}:00, duration {durationHours} hours",
    admin_funds_returned: "✅ Funds returned for round #{roundId}",
    invalid_round_id: "❌ Invalid Round ID",
    admin_error: "❌ Error executing command",
    invalid_wallet_format: "❌ Invalid wallet address format.",
    wallet_format_details:
      "✅ Correct format: 0x + 40 characters (digits and letters A-F)",
    wallet_wrong_example: "❌ Wrong example: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Make sure the address belongs to the BSC network (Binance Smart Chain)",
    wallet_already_used:
      "❌ This wallet is already used by another user. Please use a different wallet.",
    invalid_tx_hash: "❌ <b>Invalid TX Hash format!</b>",
    tx_hash_format: "TX Hash must start with 0x and contain 64 characters.",
    checking_transaction: "🔍 Checking transaction...",
    transaction_accepted: "✅ <b>Transaction accepted for verification!</b>",
    transaction_check_time:
      "The bot will check the transaction status within 2-5 minutes.",
    transaction_notification:
      "You will receive a notification when the transaction is confirmed.",
    transaction_save_error:
      "❌ Error saving transaction. Please contact support.",
    use_menu_buttons: "Use menu buttons for navigation",
    referrals_title: `👥 <b>Your Referrals</b> | <b>Level {level}</b>`,
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Page {page} of {total}",
    back_btn: "◀️ Back",
    select_language: "🌐 <b>Select language:</b>",
    current_language: "Current language: {language}",
    russian: "🇷🇺 Russian",
    english: "🇺🇸 English",
    french: "🇫🇷 French",
    indonesia: "🇮🇩 Indonesian",
    espaniol: "🇪🇸 Spanish",
    italy: "🇮🇹 Italian",
    german: "🇩🇪 German",
    georgia: "🇬🇪 Georgian",
    greece: "🇬🇷 Greek",
    swahilli: "🇰🇪 Kenyan",
    turkish: "🇹🇷 Turkish",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Back to Settings",
    total_invested_level: "Personal share in the pool",
    error: "❌ An error occurred, please try again.",
    invalid_address: "❌ Invalid address.",
    access_denied: "⛔ Access denied",
    loading: "⏳ Loading...",
    updated: "Updated",
    enabled: "✅ Enabled",
    disabled: "❌ Disabled",
    turn_on: "🔔 Turn On",
    turn_off: "🔕 Turn Off",
  },
  it: {
    // 🔥 SISTEMA DI REFERRAL - ITALIANO
    referral_reward_notification: "🎉 <b>Ricompensa referral ricevuta!</b>\n\n💰 <b>Importo:</b> {amount} USDT\n\n💼 I fondi sono già sul tuo saldo e disponibili per prelievo o reinvestimento.",
    referral_reward_my_portfolio: "💼 Il Mio Portafoglio",
    
    missed_referral_reward: "😡 <b>Ricompensa referral persa!</b>\n\n💰 <b>Importo:</b> {amount} USDT\n📊 <b>Livello:</b> {level}\n\n🔐 Attiva il livello {level} per ricevere ricompense referral!",
    activate_levels_button: "💼 Attiva Livelli",
    
    // Monitoraggio e verifica
    starting_periodic_check: "🔄 Avvio verifica periodica transazioni referral (ogni minuto)...",
    periodic_check_started: "✅ Monitoraggio portafogli utenti avviato",
    checking_recent_transactions: "⏰ Verifica transazioni dell'ultimo minuto: da {time}",
    wallet_check_progress: "🔍 Verifica transazioni recenti per portafoglio: {wallet}",
    fresh_transaction_found: "🕐 Transazione recente trovata: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Per portafoglio {wallet} trovate {count} transazioni referral recenti nell'ultimo minuto",
    
    // Risultati verifica
    force_check_started: "🔍 Verifica forzata transazioni referral RECENTI (ultimo minuto)...",
    no_wallets_for_check: "❌ Nessun portafoglio utente da verificare",
    wallets_check_summary: "📊 Verifica di {count} portafogli utenti dell'ultimo minuto",
    check_results: "📊 Risultati verifica ultimo minuto:",
    wallets_checked: "• Portafogli verificati: {count}",
    fresh_transactions_found: "• Transazioni recenti trovate: {count}",
    successfully_processed: "• Elaborati con successo: {count}",
    errors_count: "• Errori: {count}",
    
    // Elaborazione transazioni
    processing_fresh_transaction: "🔍 Elaborazione TX referral RECENTE:\n- Hash: {hash}\n- Destinatario: {recipient}\n- Importo: {amount} USDT\n- Ora: {time}",
    transaction_already_processed: "⏭️ Transazione {hash} già elaborata",
    user_not_found_by_wallet: "❌ Utente con portafoglio {wallet} non trovato",
    user_found: "✅ Utente trovato: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ Ricompensa referral RECENTE elaborata per utente {telegramId}",
    
    // Errori
    transaction_processing_error: "❌ Errore elaborazione transazione referral RECENTE",
    wallet_check_error: "❌ Errore verifica portafoglio {wallet}",
    periodic_check_error: "❌ Errore verifica periodica: {error}",
    force_check_error: "❌ Errore verifica forzata transazioni recenti: {error}",
    
    // Notifiche amministratore
    bot_not_available: "❌ Bot non disponibile per invio notifiche",
    user_blocked_bot: "🚫 Utente {telegramId} ha bloccato il bot",
    user_marked_blocked: "✅ Utente {telegramId} segnato come bloccato",
    
    // Processo ricompensa
    referral_reward_start: "🔔 INIZIO processReferralRewardEnhanced:\n- Portafoglio: {wallet}\n- Importo: {amount} USDT\n- TX Hash: {hash}\n- Da: {from}\n- Timestamp: {time}",
    transaction_recorded: "✅ Transazione registrata nel database",
    balance_updated: "✅ Saldo utente aggiornato +{amount} USDT",
    referral_reward_db_success: "✅ Ricompensa referral elaborata con successo nel database",
    sending_user_notification: "🔔 Invio notifica all'utente {telegramId}",
    user_no_telegram_id: "⚠️ Utente {userId} non ha telegram_id",
    database_overflow_error: "⚠️ Errore overflow campo numerico, tentativo con meno precisione",
    retry_failed: "❌ Tentativo anche fallito",
    referral_reward_end: "✅ FINE processReferralRewardEnhanced per portafoglio {wallet}",
    
    // Ricompense semplici
    simple_reward_processing: "🔔 Elaborazione ricompensa referral: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Ricompensa referral registrata per utente {telegramId}",
    
    // Notifiche
    notification_sent: "✅ Notifica ricompensa referral inviata all'utente {telegramId}",
    notification_error: "❌ Errore invio notifica all'utente {telegramId}: {error}",
    
    // Aggiornamenti portafogli
    wallets_updater_started: "✅ Monitoraggio portafogli utenti avviato",
    
    // Transazioni orfane
    orphan_transaction_processing: "🔍 Elaborazione transazione referral orfana per utente {userId}",
    missed_reward_notification_sent: "⚠️ Notifica ricompensa persa inviata per livello {level}",
    orphan_transaction_error: "❌ Errore elaborazione transazione orfana",
    
    // Generale
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Biblioteca dei Curatori",
    no_curators_data: "Nessun dato del curatore disponibile per il livello {level}",
    curators_library_explanation: "Qui puoi vedere gli sponsor dei tuoi partner e i loro team",
    statistics: "Statistiche",
    total_curators: "Totale curatori",
    total_referrals: "Totale partner",
    average_per_curator: "Media per curatore",
    sponsor: "Sponsor",
    partners: "Partner",
    more: "altro",
    incomplete_registration_title: "Non hai completato la registrazione nel bot!",
    incomplete_registration_message: "Completa la registrazione per iniziare a guadagnare profitti e non perdere opportunità.",
    complete_registration_to_earn: "Completa la registrazione e inizia a guadagnare!",
    complete_registration_to_earn_start: "🚀 <b>Invia semplicemente il comando</b> <code>/start</code> <b>per continuare la registrazione!</b>",
    invalid_tx_hash_format:
      "❌ <b>Formato TX Hash non valido</b>\n\nInserisci un hash di transazione valido (64 caratteri, inizia con 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Verifica transazione in blockchain...</b>\n\nRecupero informazioni su importo e data transazione...",
    transaction_check_error: "❌ <b>Errore verifica transazione</b>\n\n{error}",
    blockchain_check_error:
      "❌ Si è verificato un errore durante la verifica della transazione in blockchain",
    transaction_found_details:
      "✅ <b>Transazione trovata!</b>\n\n💰 <b>Importo:</b> {amount} USDT\n📅 <b>Data:</b> {date}\n\n⏰ <b>Scegli il periodo di invio al pool:</b>",
    invalid_period_range:
      "❌ <b>Periodo non valido</b>\n\nInserisci un numero da 1 a 28 giorni",
    period_processing_error:
      "❌ Si è verificato un errore durante l'elaborazione del periodo",

    // Периоды
    period_1_day: "1 giorno",
    period_7_days: "7 giorni",
    period_14_days: "14 giorni",
    period_28_days: "28 giorni",
    custom_period: "📅 Periodo personalizzato",

    // Админка
    bot_disabled_success: "🔴 Bot disattivato per gli utenti",
    bot_disable_error: "❌ Errore: {error}",
    admin_panel: "🔧 Pannello amministrativo",
    invalid_prize_amount: "Importo premio non valido",
    prize_set_success: "✅ Premio impostato: {amount} USDT",
    prize_sent_success: "✅ TX hash salvato. Premio inviato al contratto.",
    prize_send_error: "❌ Errore: {error}",
    winner_prize_notification:
      "🎯 La tua vincita {amount} USDT è stata inviata al contratto!\n\n⏰ Riceverai il profitto tra 28 giorni.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
     `❌ <b>Dominio non consentito</b>\n\n{domain_not_allowed_description}\n\n<b>Il tuo dominio:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Il tuo link di affiliazione è stato collegato con successo!\n\n🏁 Sei sul rettilineo finale! Per una comunicazione più facile, la possibilità di fare domande e conoscere il team, devi entrare nella nostra chat.\n\n1. Vai in questa chat: @BitnestRus\n\n2. Clicca sul pulsante 'Unisciti al gruppo'\n\n3. Assicurati di attivare le notifiche\n\n4. Clicca sul pulsante in basso 'Mi sono iscritto/a'\n\n👇🏼 Oppure usa il pulsante in basso per andare automaticamente alla nostra chat",
    chat_link: "📢  Unisciti al gruppo",
    disclaimer:
      "✅ Gentile utente, questo sistema è progettato per formare e informare i nuovi utenti che non hanno precedentemente interagito con il sistema Bitnest\n\n🤔 Per favore dicci, sei stato registrato prima?\n\n1. Clicca (NO) - se non hai ancora un account nel sistema e vuoi completare la formazione e far parte della nostra squadra\n\n2. Clicca (SÌ) - se hai già un account nel sistema e hai inviato USDT in circolazione\n\nI servizi di questo bot sono forniti solo ai nuovi utenti che non sono stati nel sistema prima e hanno cliccato il pulsante ✅ NO",
    disclaimer_no: "✅ NO, SONO UN NUOVO PARTECIPANTE",
    disclaimer_yes: "⛔️ SÌ, SONO MEMBRO DI UN'ALTRA SQUADRA",
    block_confirmation_title: "Conferma",
    block_confirmation_message: "Se sei membro di un'altra squadra, contatta il tuo curatore.\n\nSei sicuro di voler bloccare il tuo account?",
    back_button: "◀️ Indietro",
    confirm_block_button: "✅ Sì, blocca",
    account_blocked_message: "🚫 <b>Account bloccato</b>\n\nIl tuo account è stato bloccato su tua richiesta.\n\nSe questo è accaduto per errore, contatta il supporto @BitnestRusSupport.",
    account_blocked:
      "❌ Sfortunatamente, i servizi di questo bot sono forniti solo ai nuovi utenti. Il tuo account non è attivo. Per qualsiasi domanda @BitnestRusSupport",
    please_try_again: "Per Favore Riprova",
    add_custom_transaction: "➕ Aggiungi transazione",
    adding_custom_transaction: "🔗 <b>Aggiunta della tua transazione</b>",
    enter_tx_hash_prompt:
      "Per favore inserisci il <b>TX Hash</b> della tua transazione:",
    transaction_requirements:
      "• Deve essere eseguita sulla rete BSC (Binance Smart Chain)\n• Deve essere una transazione USDT",
    tx_hash_example:
      `📝 <b>Esempio:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nVisualizza le tue transazioni al pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Vai a</a>`,
    enter_amount_prompt:
      "💰 <b>Inserisci l'importo della transazione in USDT:</b>",
    amount_example: "Esempio: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Seleziona il periodo di investimento:</b>",
    verifying_transaction:
      "🔍 <b>Verifica della transazione in blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nImporto: {amount} USDT\nPeriodo: {period} giorni",
    please_wait: "Attendere prego...",
    transaction_already_exists:
      "Questa transazione è già stata aggiunta al sistema",
    transaction_not_found: "Transazione non trovata",
    transaction_not_confirmed: "Transazione non confermata o fallita",
    transaction_wrong_sender:
      "Transazione inviata dal portafoglio sbagliato. Il tuo portafoglio: {userWallet}, mittente nella transazione: {txFrom}",
    transaction_wrong_receiver:
      "Transazione inviata al portafoglio di sistema sbagliato. Il destinatario deve essere: {systemWallet}",
    transaction_amount_mismatch:
      "L'importo non corrisponde. In blockchain: {blockchainAmount} USDT, hai inserito: {enteredAmount} USDT",
    transaction_not_usdt: "Questa non è una transazione USDT",
    transaction_decode_error:
      "Impossibile decodificare i dati della transazione USDT",
    blockchain_error: "Errore durante la verifica in blockchain: {error}",
    transaction_added_success: "✅ <b>Transazione aggiunta con successo!</b>",
    investment_details: "📊 <b>Dettagli dell'investimento:</b>",
    investment_amount: "• Importo: {amount} USDT",
    investment_period: "• Periodo: {period} giorni",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Redditività: {profit}%",
    investment_added_to_portfolio:
      "💼 Investimento aggiunto al tuo portafoglio.",
    transaction_add_error:
      "❌ <b>Errore durante l'aggiunta della transazione</b>",
    error_reason: "Motivo: {error}",
    your_investment_portfolio_add: "➕ Aggiungi transazione",
    language_changed_success: `✅ Lingua modificata correttamente in Italiano!`,
    welcome: `👋🏼 Benvenuto <b>{username}</b> - questo è lo strumento di squadra della nostra community, questo bot ti permetterà di comprendere il sistema passo dopo passo e diventare parte del nostro team!\n\n🎥 Abbiamo preparato per te video istruzioni passo-passo che spiegano e mostrano l'intero processo\n\n👇🏼 Per iniziare la formazione e cominciare a ottenere i tuoi primi risultati, clicca sul pulsante "🎓 Inizia Formazione"`,
    welcome_back: "👋 Hai già completato la formazione! Bentornato!",
    education_title: "🎓 Materiali Formativi\nSeleziona un argomento:",
    finish: "✅ Formazione completata!",
    wallet_installation:
      "📲 <b>Installazione Portafoglio</b>\nScarica e installa uno dei portafogli supportati.",
    ask_wallet_address:
      "👍🏼 Ottima scelta! Iniziamo la formazione:\n\n💵 La prima cosa nel mondo Web3 e DeFi è avere un portafoglio crypto personale, ora lo installeremo:\n\n1. Vai sul sito ufficiale dell'applicazione <b>MetaMask</b>\n\n2. Installa l'app sul tuo telefono\n\n3. Crea un portafoglio e assicurati di scrivere la seed phrase in un posto sicuro\n\n4. Configura la rete BSC - Binance Smart Chain (BEP20)\n\n5. Copia l'indirizzo pubblico del tuo portafoglio 0x.............\n\n6. Invia questo indirizzo come messaggio nel campo qui sotto 👇🏼",
    enter_wallet: `🥳 Congratulazioni, il tuo portafoglio è stato collegato con successo!\n\n📝 In questo passaggio devi registrarti sul sito ufficiale di Bitnest (vedi video)\n\n1. Copia questo link \n\n<code>{referral_link_bitnest}</code>\n\n e aprilo nel browser interno del tuo portafoglio\n\n2. In alto a destra clicca "Connect"\n\n3. Conferma l\'autorizzazione sul sito nella finestra pop-up del tuo portafoglio \n\n<i><b>*Se il sito non si apre, attiva il programma di 3 lettere (che ti permetterà di accedere al sito)</b></i>\n\n👇🏼 Oppure utilizza i pulsanti qui sotto per passare automaticamente al portafoglio e aprire la pagina necessaria`,
    your_wallet: "💼 Il tuo Portafoglio Crypto\n\n📌 Indirizzo in rete (BEP20)",
    install_wallet:
      "👍🏼 Ottima scelta! Iniziamo la formazione:\n\n💵 La prima cosa nel mondo Web3 e DeFi è avere un portafoglio crypto personale, ora lo installeremo:\n\n1. Vai sul sito ufficiale dell'applicazione <b>MetaMask</b>\n\n2. Installa l'app sul tuo telefono\n\n3. Crea un portafoglio e assicurati di scrivere la seed phrase in un posto sicuro\n\n4. Configura la rete BSC - Binance Smart Chain (BEP20)\n\n5. Copia l'indirizzo pubblico del tuo portafoglio 0x.............\n\n6. Invia questo indirizzo come messaggio nel campo qui sotto 👇🏼",
    loading_balance: "⏳ Recupero informazioni sul saldo...",
    refresh: "🔄 Aggiorna",
    bnb_balance: "Saldo:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Saldo Token",
    wallet_not_configured: "❌ Portafoglio non configurato",
    send_usdt: "💸 Invia USDT",
    check_my_investment: "💸 Invia USDT",
    error_amount_not_selected: "❌ Errore: importo non selezionato",
    error_wallet_not_configured: "❌ Errore: portafoglio non configurato",
    back_to_amount_selection: "◀️ Torna alla selezione importo",
    configure_wallet: "⚙️ Configura Portafoglio",

    // =========================
    // DeFi e BitNest
    // =========================
    your_mentor: (mentor) => `Il tuo mentore: ${mentor}`,

    write_to_mentor: "✉️ Scrivi al mentore",
    what_is_bitnest:
      "🏗 <b>Cos'è BitNest</b>\nOperazioni trasparenti, controllo dei tuoi fondi.",
    defi_basics:
      "📊 Basi del DeFi.\nProssimo - come funziona l'investimento nei pool.",
    liquidity_pool_text:
      "💎 Pool di Liquidità\n\n💵 Qui puoi inviare USDT nel pool di liquidità e ricevere bonus.\n\nSeleziona un'azione:",
    my_investments_empty: "📊 Non hai ancora investimenti.",
    investment_saved: "✅ Dati salvati",
    investment_return_received: (amount) =>
      `Hai ricevuto la tua circolazione <b>${amount} $</b>`,
    congrats_profit: "Congratulazioni per il profitto ottenuto!",
    referral_reward_received: "Hai ricevuto una ricompensa di referral!",
    back_to_main_menu: "🏠 Torna al Menu Principale",
    user: "Utente",
    amount: "Importo",
    congrats_referral_earned:
      "Congratulazioni! Hai guadagnato una ricompensa di referral!",
    balance_replenished: (amount) =>
      `Il tuo saldo è stato ricaricato di ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Hai ricevuto la ricompensa referral ${amount}`,
    you_have_inactive_levels: "Hai livelli non attivati!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Inviando ${amount} USDT puoi attivare i livelli: ${levels}`,
    activate_levels_to_earn:
      "Attiva i livelli per guadagnare dai tuoi referral!",
    new_levels_activated: (levels) => `Nuovi livelli attivati: ${levels}`,
    now_earn_from_levels: "Ora guadagni da questi livelli del tuo team!",
    invalid_tx_hash_contact_support:
      "❌ Hash transazione non valido. Contatta l'assistenza.",
    congrats_liquidity_pool_success:
      "Congratulazioni! Il tuo invio al pool di liquidità è stato completato con successo!",
    transaction_details: "Dettagli Transazione",
    block: "Blocco",
    period: "Periodo",
    days: "giorni",
    not_specified: "non specificato",
    go_to_portfolio_for_details:
      'Vai in "Il Mio Portafoglio" per vedere i dettagli',
    level_deactivated_title: "Livello disattivato",
    level: "Livello",
    has_been_deactivated: "è stato disattivato",
    liquidity_pool_completed_reason:
      "Il tuo invio al pool di liquidità è stato completato con successo!",
    total_return: "Importo totale di ritorno",
    return_date: "Data di ritorno",
    error_updating_pool_status:
      "❌ Errore durante l'aggiornamento dello stato dell'invio al pool. Contatta l'assistenza.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transazione non trovata dopo diversi tentativi.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Possibili cause:\n` +
      `• La transazione non è ancora confermata dalla rete\n` +
      `• TX Hash non valido\n` +
      `• Problemi con la rete BSC\n\n` +
      `Controlla il TX Hash e riprova o contatta l\'assistenza.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Transazione inviata all\'indirizzo sbagliato!\n\n` +
      `▸ Indirizzo ricevuto: ${actualTo}\n` +
      `Assicurati di inviare USDT all\'indirizzo corretto del pool.`,
    transaction_not_confirmed: (status) =>
      `❌ Transazione non confermata. Stato: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Controlla lo stato della transazione su BscScan e contatta l'assistenza se necessario.",
    error_checking_transaction:
      "❌ Errore durante il controllo della transazione. Riprova più tardi o contatta l'assistenza.",
    investment_confirmation:
      `💰 <b>Conferma Invio al Pool</b>\n\n` +
      `📊 <b>Dettagli Transazione:</b>\n` +
      `▸ Importo: <b>{amount} USDT</b>\n` +
      `▸ Durata: <b>{period} giorni</b>\n` +
      `▸ Redditività: <b>{profitPercent}%</b>\n` +
      `▸ Profitto atteso: <b>{expectedProfit} USDT</b>\n` +
      `▸ Importo totale di ritorno: <b>{totalReturn} USDT</b>\n` +
      `▸ Data di ritorno: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Istruzioni per l\'invio:</b>\n\n` +
      `1. Apri l\'app MetaMask\n\n` +
      `2. Vai sul sito ufficiale di Bitnest\n\n` +
      `3. In alto a destra clicca <b>"Connect"</b> - <i>(se vedi l\'icona del portafoglio, vai al passaggio successivo)</i>\n\n` +
      `4. Clicca sull\'icona del portafoglio e vai alla sezione Loop (Ciclo)\n\n` +
      `5. Inserisci l\'importo da inviare\n\n` +
      `6. Seleziona la durata dell\'invio\n\n` +
      `7. Clicca sul pulsante "Circulation" (Circolazione)\n\n` +
      `8. Conferma l\'invio sul sito nella finestra pop-up del tuo portafoglio\n\n` +
      `👇🏼 Oppure utilizza i pulsanti qui sotto per passare automaticamente al portafoglio e aprire la pagina necessaria`,
    send_metamask_mobile: "🦊 Invia - MetaMask 📲",
    transaction_search_timer: `⚠️ In attesa del tuo invio, istruzioni sopra\n\n<b>🔎 Dopo l'invio, inizieremo la ricerca della transazione ...</b>\n⏰ <b>Tempo per l'invio e la ricerca della tua transazione:</b> 20:00 min...\n\n`,
    cancel_search: "❌ Annulla Ricerca",
    failed_delete_timer_message:
      "Impossibile eliminare il messaggio del timer: {error}",
    investment_details_base:
      `💰 <b>Conferma Invio al Pool</b>\n\n` +
      `📊 <b>Dettagli Transazione:</b>\n` +
      `▸ Importo: <b>{amount} USDT</b>\n` +
      `▸ Durata: <b>{period} giorni</b>\n` +
      `▸ Stato: <b>Annullato</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Ricerca transazione annullata dall'utente</b>",
    failed_update_message:
      "Impossibile aggiornare il messaggio, invio nuovo: {error}",
    transaction_search_cancelled_log:
      "✅ Ricerca transazione annullata per l'utente {userId}",
    no_active_transaction_search:
      "❌ Nessuna ricerca transazione attiva trovata",
    error_cancelling_search:
      "❌ Errore durante l'annullamento della ricerca: {error}",
    error_cancelling_search_user:
      "❌ Si è verificato un errore durante l'annullamento della ricerca",
    processing_found_transaction:
      "🔄 Elaborazione transazione trovata per l'utente {userId}",
    investment_in_process_not_found:
      "Investimento con stato in_process non trovato",
    failed_update_investment_status:
      "Impossibile aggiornare lo stato dell'investimento",
    failed_delete_timer_message:
      "Impossibile eliminare il messaggio del timer: {error}",
    failed_delete_previous_message:
      "Impossibile eliminare il messaggio precedente: {error}",
    transaction_confirmed_message:
      `💰 <b>Conferma Invio al Pool</b>\n\n` +
      `📊 <b>Dettagli Transazione:</b>\n` +
      `▸ Importo: <b>{amount} USDT</b>\n` +
      `▸ Durata: <b>{period} giorni</b>\n` +
      `▸ Profitto atteso: <b>{expectedProfit} USDT</b>\n` +
      `▸ Importo totale di ritorno: <b>{totalReturn} USDT</b>\n` +
      `▸ Data di ritorno: <b>{returnDate}</b>\n\n` +
      `✅ <b>Transazione confermata!</b>\n` +
      `📊 <b>Hash Transazione:</b> <code>{hash}</code>\n` +
      `💰 <b>Importo effettivo:</b> {actualAmount} USDT\n` +
      `⏰ <b>Confermato:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Attivazione dei livelli utente in base all'importo dell'investimento",
    user_prefix: "User_",
    notification_sent_to_referrer:
      "✅ Notifica inviata al referrer {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Referrer non trovato o dati mancanti",
    user_has_no_referrer: "⚠️ L'utente non ha un referrer",
    error_sending_referral_notification:
      "Errore nell'invio della notifica al referral: {error}",
    error_sending_missed_rewards:
      "Errore nell'invio delle notifiche per ricompense perse: {error}",
    error_sending_missed_referrals:
      "Errore nell'invio della notifica per referral persi: {error}",
    level_activation_notifications_sent:
      "🎯 Notifiche di attivazione livello inviate per i livelli: {levels}",
    error_sending_level_activation:
      "Errore nell'invio della notifica di attivazione livello: {error}",
    transaction_processed_successfully:
      "✅ Transazione elaborata per l'utente {userId}",
    error_processing_transaction:
      "❌ Errore nell'elaborazione della transazione per l'utente {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Errore nell'elaborazione della transazione</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Errore: {error}\n\n` +
      `Contatta l'assistenza.`,
    error_sending_notification: "Errore nell'invio della notifica: {error}",
    new_levels_activated: "Nuovi livelli attivati!",
    activated_levels: "Livelli Attivati",
    levels_activation_benefit: "Ora guadagni da questi livelli del tuo team!",
    referral_made_transaction: "Il tuo referral ha effettuato un invio!",
    your_referral: "Il tuo referral",
    congrats_referral_reward:
      "Congratulazioni! Hai guadagnato una ricompensa di referral!",
    // =========================
    // Programma di Affiliazione
    // =========================
    affiliate_text: `👥 La tua rete di affiliazione, {username}\n\n17 livelli del tuo team e guadagni da ogni livello dalla redditività dei tuoi referral\n\n<b>1 liv</b> - 20%\n<b>2 liv</b> - 10%\n<b>3 - 7 liv</b> - 5%\n<b>8 - 10 liv</b> - 3%\n<b>11 - 17 liv</b> - 1%\n\nPer attivare ogni livello, la tua quota nel pool deve corrispondere a <b>N° livello * 100$</b>\nPer attivare tutti i livelli, la tua quota personale nel pool = <b>1700$</b>\n\n📊 Statistiche generali per livelli:\n{pools.levels}\n\n💰 Totale: 0 ref. | 0.000 USDT`,
    your_referral_sent: "Il tuo referral ha effettuato un invio!",
    missed_referral_reward: (missedAmount, level) =>
      `Hai perso la ricompensa referral ${missedAmount}$ dal livello ${level}`,
    activate_level_to_earn:
      "Attiva il livello per guadagnare da tutta la struttura!",
    check_subscription: "✅ Mi sono iscritto(-a)",
    website_ref:
      '🎉 Congratulazioni per la registrazione avvenuta con successo!\n\n🔗 In questo passaggio devi aggiungere il tuo link di affiliazione dall\'area personale di Bitnest\n\n1. Vai sul sito ufficiale di Bitnest\n\n2. In alto a destra clicca "<b>Connect</b>"<i> - (se vedi l\'icona del portafoglio, vai al passaggio successivo)</i>\n\n3. Clicca su "<b>Invita amici</b>"\n\n4. Clicca su "<b>Copia il mio link</b>"\n\n5. Inviacelo nel campo qui sotto 👇🏼',

    // =========================
    // Concorsi ed Eventi
    // =========================
    raffle: "🎁 CONCORSO 🎁",
    daily_raffle: "🎉 Concorso Giornaliero!",
    current_prize: "🏆 Premio",
    participants: "👥 Già partecipano ",
    end_time: "⏰ Risultati",
    raffle_text: `✅ <b>Condizioni di partecipazione:</b>\n• Quota attiva minima nel pool: 10 USDT\n• Un tentativo per persona\n\n`,
    raffle_requirement:
      "Per partecipare al concorso è richiesta una quota attiva nel pool",
    raffle_wallet_not_set: "⚠️ Prima configura il portafoglio",
    raffle_already_registered:
      "✅ Sei registrato con successo nel round corrente!",
    successfully_registered: "Sei registrato con successo nel concorso!",
    registration_failed: "Registrazione fallita",
    participate_button: "🎟 Partecipa",
    no_active_raffle: "Al momento non ci sono concorsi attivi.",
    already_registered_in_raffle:
      "✅ Sei già registrato nel concorso corrente!",
    new_raffle_started:
      "💰 Premio: {prize} USDT\n" + "⏰ Alla fine: {hours} ore\n\n",
    register_in_raffle: "🤖 Registrazione al Concorso",
    raffle_error: "❌ Errore: {error}",

    // Dalla sezione Portafoglio
    raffle_min_investment_required:
      "Per partecipare al concorso è richiesta una quota attiva nel pool da 10$\n\n" +
      "Effettua un invio di USDT nel pool per poter partecipare.",
    raffle_registration_success:
      "Registrazione avvenuta con successo!\n\nOra partecipi al concorso!",
    eligible_to_participate: "💪 Sei idoneo a registrarti al concorso",
    raffle_registration_error: "❌ Errore di registrazione: {error}",

    // Dalla sezione Menu e Navigazione (per controllo registrazione)
    not_registered_yet:
      "❌ Non sei ancora registrato. Clicca sul pulsante del tuo portafoglio per registrarti.",
    register_button: "📝 Registrati",
    registration_check_error:
      "❌ Errore durante il controllo della registrazione",
    registering_wallet: "🔄 Registrazione del tuo portafoglio in corso...",
    registration_success: "✅ Sei registrato con successo nel round corrente!",
    registration_error: "❌ Errore di registrazione",
    try_later_or_contact_admin:
      "Riprova più tardi o contatta l'amministratore.",
    registration_process_error: "❌ Errore durante la registrazione",
    mentor_not_found: "❌ <b>Mentore non trovato</b>",
    mentor_not_found_description:
      "Non hai un mentore assegnato. Contatta l'assistenza.",
    // =========================
    // Altro
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 Hai un nuovo referral @${username}`,
    friend: "amico",
    welcome_error:
      "👋 Benvenuto! Si è verificato un errore durante il caricamento del menu.",
    link_subscription_pending:
      "⌛ <b>Pagamento abbonamento in attesa</b>\n\n" +
      "Il tuo abbonamento è in attesa di conferma pagamento. " +
      "Se hai già pagato, clicca il pulsante sotto per verificare lo stato.",
    check_payment: "🔄 Verifica Pagamento",
    create_new_payment: "💳 Crea Nuovo Pagamento",
    link_subscription_required:
      "❌ <b>Accesso alle impostazioni link tramite abbonamento</b>\n\n" +
      "✅ Per configurare il link di referral e attivare il tuo bot è necessario acquistare un abbonamento di 10$/mese.\n\n",
    buy_subscription: "💳 Acquista Abbonamento (10$/mese)",
    link_settings_error:
      "❌ Errore durante il caricamento delle impostazioni link",
    setup_wallet_first: "❌ Prima configura il portafoglio nelle impostazioni",
    custom_amount_message:
      "💰 <b>Inserisci il tuo importo per l'invio al pool </b>\n\n" +
      "Importo minimo: <b>1 USDT</b>\n" +
      "Importo massimo: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Invia un numero - l'importo in USDT nel campo sotto</i>",

    // =========================
    // Menu e Navigazione
    // =========================
    menu_title: `🎉 <b>Benvenuto, {username}</b>\n\n🚀 <b>BitnestRus Bot - Il tuo assistente affidabile e strumento di squadra</b>\n\n✨ <b>Funzionalità del bot:</b>\n• 🎁 Concorsi a premi in denaro\n• 💰 Statistiche finanziarie del tuo portafoglio\n• 🌊 Istruzioni per lavorare con il pool di liquidità\n• 👥 Programma di affiliazione multilivello\n• 📊 Analisi e informazione\n\n👇 Seleziona una sezione nel menu:\n`,
    back: "◀️ Indietro",
    next: "➡️ Avanti",
    nextreg: " ✍🏼 Ho completato la registrazione",
    my_wallet: "💰 Il Mio Portafoglio",
    liquidity_pool: "🌊 Pool di Liquidità",
    my_portfolio: "💼 Il Mio Portafoglio",
    presentation: "🎥 Presentazione",
    video_instructions: "📚 Video Istruzioni",
    official_website: "🔗 Sito Ufficiale",
    oficial_site: "✅ Sito Ufficiale",
    affiliate: "👥 Programma di Affiliazione",
    settings: "⚙️ Impostazioni",
    admin: "🔧 Admin",
    settings_title:
      "⚙️ Impostazioni\n\nQui puoi configurare i tuoi link\n\nSeleziona un'azione:",
    start_education: "🎓 Inizia Formazione",
    download_metamask: "🦊 Scarica - MetaMask",
    register_metamask: "🦊 Registrazione - MetaMask",
    register_metamask_mobile: "🦊 Registrazione - MetaMask",
    invest_now_message:
      `💰 <b>Invio USDT al pool di liquidità</b>\n\n` +
      `<b>Redditività per durata:</b>\n` +
      `• <b>1 giorno</b> - 0.4%\n` +
      `• <b>7 giorni</b> - 4%\n` +
      `• <b>14 giorni</b> - 9.5%\n` +
      `• <b>28 giorni</b> - 24%\n\n` +
      `<i>Tutti i fondi <b>(importo USDT + bonus)</b> vengono restituiti automaticamente alla scadenza sul tuo portafoglio</i>\n\n` +
      `📌 <b>Il tuo saldo:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Seleziona l'importo da inviare al pool:</b>`,
    custom_amount: "🗂 Importo Personalizzato",
    error_getting_data: "❌ Errore nel recupero dei dati, riprova.",
    choose_period_message:
      `🔄 Hai selezionato l'importo <b>{amount} USDT</b>. Seleziona la durata dell'invio al pool:\n\n` +
      `<b>Redditività per durata:</b>\n` +
      `• <b>1 giorno</b> - 0.4%\n` +
      `• <b>7 giorni</b> - 4%\n` +
      `• <b>14 giorni</b> - 9.5%\n` +
      `• <b>28 giorni</b> - 24%\n\n` +
      `<i>Tutti i fondi <b>(importo USDT + bonus)</b> vengono restituiti automaticamente alla scadenza sul tuo portafoglio</i>\n\n` +
      `👇 <b>Seleziona la durata dell'invio al pool:</b>`,
    back_to_amount_selection: "◀️ Torna alla selezione importo",
    main_menu: "🏠 Torna al Menu Principale",
    timer_message_id_not_found: "❌ timer_message_id non trovato",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ In attesa del tuo invio, istruzioni sopra\n\n<b>🔎 Dopo l'invio, inizieremo la ricerca della transazione ...</b>\n\n⏰ <b>Tempo per l'invio e la ricerca della tua transazione:</b> ${timeString}  min...\n\n`,
    cancel_search: "❌ Annulla Ricerca",
    timer_error: "❌ Errore nel timer: {error}",
    timer_stopped_message_not_found:
      "⏹️ Timer fermato: messaggio non trovato o non accessibile",
    timer_minor_error_continue: "⚠️ Errore minore del timer, continuiamo...",
    transaction_timeout_message:
      "⏰ <b>Tempo di ricerca transazione scaduto</b>\n\n" +
      "❌ Impossibile trovare la conferma della transazione nel tempo assegnato.\n\n" +
      "Possibili cause:\n" +
      "• La transazione non è ancora confermata dalla rete\n" +
      "• TX Hash non valido\n" +
      "• Problemi con la rete BSC\n\n" +
      "Controlla lo stato della transazione su BscScan e riprova.",
    transaction_timeout_log: "⏰ Timeout transazione per l'utente {userId}",
    transaction_timeout_error:
      "❌ Errore durante l'elaborazione del timeout transazione: {error}",
    transaction_not_found_try_again:
      "❌ Transazione non trovata. Riprova da capo.",
    awaiting_transaction_check:
      "🔍 <b>In attesa del controllo della transazione...</b>\n\n" +
      "Il bot controllerà la blockchain entro 2-5 minuti.\n" +
      "Riceverai una notifica sul risultato.",
    transaction_not_found_message:
      `❌ <b>Transazione non trovata</b>\n\n` +
      `Possibili cause:\n` +
      `• La transazione non è ancora confermata dalla rete\n` +
      `• Invio non all'indirizzo del pool\n` +
      `📞 Se hai inviato USDT, contatta l'assistenza\n` +
      `🔍 TX Hash: fornisci l'hash della transazione`,
    transaction_not_found_notification_sent:
      "✅ Notifica di transazione non trovata inviata all'utente {userId}",
    error_sending_notification: "Errore nell'invio della notifica: {error}",
    request_tx_hash_message:
      "📝 <b>Inserisci l'hash della transazione (TX Hash):</b>\n\n" +
      "Dopo l'invio di USDT, copia il TX Hash dal tuo portafoglio e invialo qui.",
    error_requesting_tx_hash: "Errore nella richiesta del TX Hash: {error}",
    presentation_message:
      `📊 <b>Presentazione</b>\n\n` +
      `🎥 Video presentazione dettagliata che ti aiuterà a comprendere i vantaggi della piattaforma e di questo strumento\n\n`,
    presentation_error: "Errore presentazione: {error}",
    presentation_load_error:
      "❌ Errore durante il caricamento della presentazione",
    user_not_determined: "❌ Impossibile determinare l'utente",
    not_configured: "Non configurato",
    from_your_inviter: `\n👤 Dal tuo invitante: {name}`,
    user: "Utente",
    system_video_instruction: `\n📋 Video istruzione di sistema`,
    video_instructions_header: "🎥 <b>Video Istruzioni</b>",
    video_instructions_description:
      "📚 Corso video dettagliato in cui imparerai tutte le sottigliezze del lavoro con il sistema e come interagire con il pool",
    video_link_available: `🔗 <b>Link al video:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Link non disponibile</b>\n\n`,
    video_instruction_error: "Errore video istruzione: {error}",
    video_instruction_load_error:
      "❌ Errore durante il caricamento delle video istruzioni",
    system_link: "🌐 Link di sistema",
    from_your_mentor: "👤 Dal tuo Mentore",
    user: "Utente",
    your_link: "🌐 Il Tuo Link",
    visit_official_website:
      "Visita il sito ufficiale della piattaforma e scopri tutti i dettagli e le regole per lavorare con il servizio",
    link: "Link",
    open_metamask: "🦊 Apri MetaMask",
    open_in_browser: "💻 Apri nel browser PC",
    website_error:
      "❌ Errore durante il caricamento delle informazioni sul sito",
    your_investment_portfolio: "Il tuo portafoglio di quote attive nel pool",
    transaction: "Transazione",
    amount: "Importo",
    term: "Durata",
    days: "giorni",
    profitability: "Redditività",
    time_left: "Alla scadenza",
    d: "g",
    h: "o",
    expected_profit: "Profitto atteso",
    type: "Tipo",
    incoming_transaction: "Transazione in entrata",
    refund: "Rimborso fondi",
    status: "Stato",
    active: "Attivo",
    archived: "Invio archiviato",
    returned: "Restituito",
    total_statistics: "Statistiche totali",
    total_active_amount: "Importo totale attivo",
    page: "Pagina",
    of: "di",
    portfolio_error: "⚠️ Errore durante il caricamento del portafoglio",
    congrats_on_profit: "Congratulazioni per il profitto ottenuto!",
    bot_not_available: "Bot non disponibile per l'invio di notifiche",
    investment_notification_sent:
      "Notifica di rimborso investimenti inviata all'utente",
    investment_notification_error:
      "Errore nell'invio della notifica di rimborso investimenti:",
    check_old_transactions: "🔍 Controlla Transazioni Precedenti",
    checking_old_transactions: "Controllo transazioni precedenti",
    this_may_take_seconds: "Potrebbe richiedere alcuni secondi...",
    wallet_not_found: "❌ Portafoglio non trovato. Collecalo nel profilo.",
    check_completed: "Controllo completato",
    added_to_portfolio: "Aggiunto al portafoglio",
    no_transactions_found: "Nessuna transazione trovata",
    target_wallet: "Portafoglio di destinazione",
    checking_old_transactions: "Controllo transazioni precedenti",
    wallet_not_found: "Portafoglio non trovato",
    check_completed: "Controllo completato",
    found_transactions: "Transazioni trovate",
    already_added: "già aggiunta",
    added: "aggiunta",
    summary: "Riepilogo",
    new_added: "Nuove aggiunte",
    already_exist: "Già esistenti",
    total_checked: "Totali controllate",
    check_transactions_error: "Errore nel controllo delle transazioni",
    transactions: "transazioni",
    my_portfolio: "💼 Il Mio Portafoglio",
    your_active_pool: "<b>La tua quota attiva nel pool</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>La tua quota attiva nel pool:</b> ${amount}$`,
    your_personal_share: "La tua quota totale nel pool",
    level_activation_title: "Attivazione livelli programma di affiliazione",
    check_transactions_error:
      "⚠️ Errore durante il controllo delle transazioni. Riprova più tardi.",
    affiliate_network_header: (username) =>
      `👥 <b>La tua rete di affiliazione, ${username}</b>`,
    affiliate_network_description:
      "17 livelli del tuo team e guadagni da ogni livello dalla redditività dei tuoi referral",
    level_percentages:
      `<b>• 1 liv</b> - 20%\n` +
      `<b>• 2 liv</b> - 10%\n` +
      `<b>• 3-7 liv</b> - 5%\n` +
      `<b>• 8-10 liv</b> - 3%\n` +
      `<b>• 11-17 liv</b> - 1%`,
    level_activation_requirements:
      "Per attivare ogni livello la tua quota nel pool deve corrispondere a <b>N° livello * 100$</b>",
    all_levels_activation_requirement:
      "Per attivare tutti i livelli, la tua quota personale nel pool = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>La tua quota personale nel pool:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Livelli attivati:</b> ${count}/17`,
    level_statistics: "📊 <b>Statistiche per livelli:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Liv. ${level}: ${count} pers. | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Liv. ${level}: Nessun referral`,
    no_level_data: "<i>Nessun dato sui livelli al momento</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Totale:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 I Miei Partner",
    my_team: "🧏‍♂️ La Mia Squadra",
    ref_link: "🔗 Link Ref",
    enable_levels: "🔓 Attiva Livelli",
    search: "🔍 Cerca",
    statistics: "📈 Statistiche",
    affiliate_error: "Errore affiliazione: {error}",
    affiliate_load_error:
      "⚠️ Errore durante il caricamento del programma di affiliazione",
    buy_subscription: "💰 Acquisto Abbonamento",
    subscription_text:
      "Per acquistare un abbonamento, contatta il cryptobot:\n\nDopo il pagamento dell'abbonamento avrai accesso al programma di referral e ad altre funzionalità esclusive.",
    go_to_cryptobot: "📲 Vai al Cryptobot",
    check_subscription_status: "🔄 Verifica Abbonamento",
    subscription_active:
      "✅ Il tuo abbonamento è attivo! Ora puoi invitare referral.",
    subscription_inactive:
      "❌ Abbonamento non ancora attivo. Completa il pagamento o contatta l'assistenza.",
    subscription_check_error:
      "❌ Errore durante il controllo dello stato dell'abbonamento",
    data_not_found: "Dati non trovati. Aggiorna il portafoglio",
    last_page: "Questa è l'ultima pagina",
    first_page: "Questa è la prima pagina",
    page_load_error: "Errore durante il caricamento della pagina",
    edit_message_error: "Impossibile modificare il messaggio, invio nuovo:",
    refresh: "🔄 Aggiorna",
    referral_access_subscription:
      "❌ <b>Accesso al programma di referral tramite abbonamento</b>\n\n✅ Per configurare il link di referral e attivare il tuo bot è necessario acquistare un abbonamento di 10$/mese.",
    referral_invite_text:
      "👋🏻 Ciao! Se vuoi ottenere un reddito passivo dal TOP-1 exchange, unisciti tramite il mio link 👆",
    your_referral_link: "Il tuo link di referral",
    referral_invite_description:
      "💡 Invita amici e guadagna dalle loro quote attive nel pool!",
    share_link: "📢 Condividi Link",
    buy_subscription: "💳 Acquista Abbonamento (10$/mese)",
    referral_link_error:
      "❌ Errore durante il caricamento del link di referral",
    link_copied: "📋 Link di referral copiato:",
    share_with_friends: "Ora puoi condividerlo con gli amici!",
    link_settings_title: "⚙️ Impostazioni dei tuoi link",
    link_settings_description: "Questi link saranno visibili ai tuoi referral:",
    choose_link_to_change: "💡 Seleziona un link da modificare:",
    change_video: "🎥 Modifica Video",
    cancel_input: "❌ Annulla Inserimento",
    user_not_found: "❌ Utente non trovato",
    link_access_subscription:
      "❌ Accesso alle impostazioni link tramite abbonamento",
    subscription_required:
      "✅ Per configurare il link di referral e attivare il tuo bot è necessario acquistare un abbonamento di 10$/mese.",
    buy_subscription_button: "💳 Acquista Abbonamento (10$/mese)",
    payment_pending: "⌛ Pagamento abbonamento in attesa",
    payment_pending_description:
      "Il tuo abbonamento è in attesa di conferma pagamento. Se hai già pagato, clicca il pulsante sotto per verificare lo stato.",
    check_payment: "🔄 Verifica Pagamento",
    create_new_payment: "💳 Crea Nuovo Pagamento",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success:
      "✅ Tutti i link reimpostati alle configurazioni di sistema",
    reset_links_error: "❌ Errore durante il reset dei link",
    subscription_payment_title:
      "💳 Pagamento abbonamento per impostazioni link",
    subscription_price: "Costo: ",
    subscription_duration: "Durata: ",
    pay_via_cryptobot: "🔗 Paga tramite cryptobot",
    check_payment: "🔄 Verifica Pagamento",
    cancel: "❌ Annulla",
    subscription_payment_error:
      "⚠️ Si è verificato un errore durante la creazione dell'abbonamento. Riprova più tardi.",
    subscription_description: "Abbonamento per impostazioni link (1 mese)",
    no_data_to_display: "❌ Nessun dato da visualizzare",
    nothing_found_for_query: "Per la ricerca",
    no_referrals_on_levels: "Non hai ancora referral sui livelli",
    invested_in_pool: "Inviato al pool",
    found_referrals: "Referral trovati",
    subscription_activated: "✅ Abbonamento attivato con successo!",
    subscription_activated_description:
      "🎉 Ora hai accesso a tutte le funzioni di configurazione link e sistema di affiliazione.",
    payment_processing:
      "⌛ Pagamento in elaborazione. Riprova a verificare più tardi.",
    invoice_expired: "❌ Fattura scaduta.",
    payment_not_found: "❌ Pagamento non trovato o annullato.",
    payment_check_error: "⚠️ Errore durante il controllo del pagamento.",
    payment_check_error_description:
      "Riprova più tardi o contatta l'assistenza.",
    try_again: "🔄 Riprova",
    new_payment: "💳 Nuovo Pagamento",
    enter_presentation_link: "📊 Inserisci il link alla presentazione:",
    enter_video_link: "🎥 Inserisci il link alle video istruzioni:",
    enter_official_link: "🌐 Inserisci il link al sito ufficiale:",
    referral_stats: "📊 Statistiche per livelli",
    level: "Livello",
    referrals_count: "👥 Referral:",
    total_invested: (amount) => `💰 Inviato al pool: ${amount} USDT`,
    search_referrals_prompt: "🔍 Inserisci un nome utente da cercare:",
    no_referrals: "👥 Non hai ancora referral",
    level_not_found: "❌ Livello non trovato",
    your_referrals: "👥 I tuoi Referral",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Pagina ${current} di ${total}`,
    no_referrals_on_level: "Nessun referral su questo livello al momento",
    back_to_affiliate: "◀️ Torna al Programma di Affiliazione",
    your_personal_partners: "I tuoi partner personali",
    id: "ID",
    too_many_partners_use_team:
      "Troppi partner per la visualizzazione. Usa la sezione 'La Mia Squadra' per la lista completa.",
    total_personal_partners: "📊 Totale partner personali",
    no_personal_partners_yet: "Non hai ancora partner personali",
    invite_friends_tip:
      "💡 Invita amici tramite il tuo link di referral per farli diventare tuoi partner personali!",
    my_team: "🧏‍♂️ La Mia Squadra",
    personal_partners_error:
      "❌ Errore durante il caricamento dei partner personali",
    level_activation_title: "Attivazione livelli programma di affiliazione",
    your_pool_share: "La tua quota nel pool",
    new_activated_levels: "Nuovi livelli attivati",
    activation_status: "Stato attivazione livelli",
    how_to_activate: "Come attivare",
    levels_activate_automatically:
      "I livelli si attivano automaticamente al raggiungimento dell'importo di investimento necessario (100$ per livello)",
    to_activate_level: "Per attivare il livello",
    needs_more: "serve ancora",
    refresh_status: "🔄 Aggiorna Stato",
    levels_check_error: "❌ Errore durante il controllo dei livelli",
    settings_title:
      "⚙️ Impostazioni\n\nQui puoi configurare i tuoi link\n\nSeleziona un'azione:",
    link_settings: "⚙️ Impostazioni Link",
    contact_mentor: "🙆‍♂️ Contatta il Mentore",
    community_chat: "💬 Chat Community",
    support_service: "⚠️ Servizio Assistenza",
    language_settings: "🌐 Lingua / Language",
    language_changed_ru: "✅ Lingua cambiata in Russo",
    language_changed_en: "✅ Lingua cambiata in Inglese",
    language_changed_fr: "✅ Lingua cambiata in Francese",
    language_changed_id: "✅ Lingua cambiata in Indonesiano",
    language_changed_es: "✅ Lingua cambiata in Spagnolo",
    language_change_error: "❌ Errore durante la modifica della lingua",
    not_subscribed:
      '❌ Non sei iscritto alla nostra chat. Iscriviti e clicca "Verifica Iscrizione" di nuovo.',
	please_subscribe_to_chat: "Per continuare, devi iscriverti al nostro canale.",
    subscribe_to_chat: "📢 Iscriviti alla Chat",
    check_subscription_btn: "🔄 Verifica Iscrizione",
    subscription_check_error: "Errore verifica iscrizione",
    wallet_not_configured: "❌ Portafoglio non configurato",
    wallet_not_configured: "❌ Portafoglio non configurato",
    transaction: "Transazione",
    wallet: "Portafoglio",
    user_not_found: "❌ Utente non trovato nel sistema. Riprova.",
    invalid_url_format: "❌ Formato link non valido",
    subscription_required_for_links:
      "❌ Per configurare i link è richiesto un abbonamento attivo",
    subscription_required_description:
      "💳 Acquista un abbonamento di 10$/mese per configurare i tuoi link",
    buy_subscription_button: "💳 Acquista Abbonamento",
    domain_not_allowed: "❌ Questo link non porta al corso di squadra",
    domain_not_allowed_description:
      "✅ Inserisci un link nel formato corretto o contatta il servizio assistenza",
    your_domain: "Il tuo dominio: {domain}",
    support_service: "⚠️ Servizio Assistenza",
    link_saved_success: "✅ Link salvato con successo!",
    link_save_error: "❌ Errore durante il salvataggio del link",
    invalid_referral_link:
      "❌ Formato link non valido. Inserisci un link HTTP/HTTPS corretto.",
    referral_link_save_error:
      "❌ Errore durante il salvataggio del link. Riprova.",
    invalid_investment_amount: "❌ <b>Importo non valido!</b>",
    investment_amount_limits:
      "Importo minimo: <b>1 USDT</b>\nImporto massimo: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Inserisci un importo corretto come numero</i>",
    investment_chosen_amount:
      "🔄 Hai selezionato l'importo <b>{amount} USDT</b>.",
    choose_investment_period: "Seleziona la durata dell'invio al pool:",
    investment_yield: "<b>Redditività per durata:</b>",
    investment_return_info:
      "<i>Tutti i fondi <b>(importo USDT + bonus)</b> vengono restituiti automaticamente alla scadenza sul tuo portafoglio</i>",
    select_period: "👇 <b>Seleziona la durata dell'invio al pool:</b>",
    search_results: '🔍 Risultati ricerca per "{query}":',
    levels: "📊 Livelli: {levels}",
    sent_to_pool: "💰 Inviato al pool: {amount} USDT",
    admin_prize_set: "✅ Premio impostato: {amount} USDT",
    admin_time_set:
      "✅ Orario impostato: inizio alle {startHour}:00, durata {durationHours} ore",
    admin_funds_returned: "✅ Fondi restituiti per il round #{roundId}",
    invalid_round_id: "❌ ID round non valido",
    admin_error: "❌ Errore durante l'esecuzione del comando",
    invalid_wallet_format: "❌ Formato indirizzo portafoglio non valido.",
    wallet_format_details:
      "✅ Formato corretto: 0x + 40 caratteri (cifre e lettere A-F)",
    wallet_wrong_example: "❌ Esempio errato: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Assicurati che l'indirizzo appartenga alla rete BSC (Binance Smart Chain)",
    wallet_already_used:
      "❌ Questo portafoglio è già utilizzato da un altro utente. Usa un portafoglio diverso.",
    invalid_tx_hash: "❌ <b>Formato TX Hash non valido!</b>",
    tx_hash_format: "TX Hash deve iniziare con 0x e contenere 64 caratteri.",
    checking_transaction: "🔍 Controllo transazione...",
    transaction_accepted: "✅ <b>Transazione accettata per il controllo!</b>",
    transaction_check_time:
      "Il bot controllerà lo stato della transazione entro 2-5 minuti.",
    transaction_notification:
      "Riceverai una notifica quando la transazione sarà confermata.",
    transaction_save_error:
      "❌ Errore durante il salvataggio della transazione. Contatta l'assistenza.",
    use_menu_buttons: "Usa i pulsanti del menu per navigare",
    level_activation_title: "Attivazione livelli programma di affiliazione",
    your_pool_share: "La tua quota nel pool",
    new_activated_levels: "Nuovi livelli attivati",
    activation_status: "Stato attivazione livelli",
    how_to_activate: "Come attivare",
    levels_activate_automatically:
      "I livelli si attivano automaticamente al raggiungimento dell'importo di investimento necessario (100$ per livello)",
    to_activate_level: "Per attivare il livello",
    needs_more: "serve ancora",
    refresh_status: "🔄 Aggiorna Stato",
    levels_check_error: "❌ Errore durante il controllo dei livelli",
    referrals_title: `👥 <b>I tuoi Referral</b> | <b>Livello {level}</b>`,
    no_referrals: "Nessun referral su questo livello al momento",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Pagina {page} di {total}",
    back_btn: "◀️ Indietro",
    select_language: "🌐 <b>Seleziona lingua:</b>",
    current_language: "Lingua corrente: {language}",
    russian: "🇷🇺 Russo",
    english: "🇺🇸 Inglese",
    french: "🇫🇷 Francese",
    indonesia: "🇮🇩 Indonesiano",
    espaniol: "🇪🇸 Spagnolo",
    italy: "🇮🇹 Italiano",
    german: "🇩🇪 Tedesco",
    georgia: "🇬🇪 Georgiano",
    greece: "🇬🇷 Greco",
    swahilli: "🇰🇪 Keniano",
    turkish: "🇹🇷 Turco",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Torna alle Impostazioni",
    total_invested_level: "Quota personale nel pool",

    // =========================
    // Errori e Notifiche
    // =========================
    error: "❌ Si è verificato un errore, riprova.",
    invalid_address: "❌ Indirizzo non valido.",
    access_denied: "⛔ Accesso negato",
    loading: "⏳ Caricamento...",
    updated: "Aggiornato",
    enabled: "✅ Attivato",
    disabled: "❌ Disattivato",
    turn_on: "🔔 Attiva",
    turn_off: "🔕 Disattiva",
  },
  fr: {
    referral_reward_notification: "🎉 <b>Récompense de parrainage reçue!</b>\n\n💰 <b>Montant:</b> {amount} USDT\n\n💼 Les fonds sont déjà sur votre solde et disponibles pour retrait ou réinvestissement.",
    referral_reward_my_portfolio: "💼 Mon Portefeuille",
    
    missed_referral_reward: "😡 <b>Récompense de parrainage manquée!</b>\n\n💰 <b>Montant:</b> {amount} USDT\n📊 <b>Niveau:</b> {level}\n\n🔐 Activez le niveau {level} pour recevoir des récompenses de parrainage!",
    activate_levels_button: "💼 Activer les Niveaux",
    
    // Surveillance et vérification
    starting_periodic_check: "🔄 Démarrage de la vérification périodique des transactions de parrainage (chaque minute)...",
    periodic_check_started: "✅ Surveillance des portefeuilles utilisateurs démarrée",
    checking_recent_transactions: "⏰ Vérification des transactions de la dernière minute: depuis {time}",
    wallet_check_progress: "🔍 Vérification des transactions récentes pour le portefeuille: {wallet}",
    fresh_transaction_found: "🕐 Transaction récente trouvée: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Pour le portefeuille {wallet} trouvé {count} transactions de parrainage récentes dans la dernière minute",
    
    // Résultats de vérification
    force_check_started: "🔍 Vérification forcée des transactions de parrainage RÉCENTES (dernière minute)...",
    no_wallets_for_check: "❌ Aucun portefeuille utilisateur à vérifier",
    wallets_check_summary: "📊 Vérification de {count} portefeuilles utilisateurs de la dernière minute",
    check_results: "📊 Résultats de la vérification de la dernière minute:",
    wallets_checked: "• Portefeuilles vérifiés: {count}",
    fresh_transactions_found: "• Transactions récentes trouvées: {count}",
    successfully_processed: "• Traité avec succès: {count}",
    errors_count: "• Erreurs: {count}",
    
    // Traitement des transactions
    processing_fresh_transaction: "🔍 Traitement de la transaction de parrainage RÉCENTE:\n- Hash: {hash}\n- Destinataire: {recipient}\n- Montant: {amount} USDT\n- Heure: {time}",
    transaction_already_processed: "⏭️ Transaction {hash} déjà traitée",
    user_not_found_by_wallet: "❌ Utilisateur avec le portefeuille {wallet} non trouvé",
    user_found: "✅ Utilisateur trouvé: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ Récompense de parrainage RÉCENTE traitée pour l'utilisateur {telegramId}",
    
    // Erreurs
    transaction_processing_error: "❌ Erreur de traitement de transaction de parrainage RÉCENTE",
    wallet_check_error: "❌ Erreur de vérification du portefeuille {wallet}",
    periodic_check_error: "❌ Erreur de vérification périodique: {error}",
    force_check_error: "❌ Erreur de vérification forcée des transactions récentes: {error}",
    
    // Notifications administrateur
    bot_not_available: "❌ Bot non disponible pour l'envoi de notifications",
    user_blocked_bot: "🚫 L'utilisateur {telegramId} a bloqué le bot",
    user_marked_blocked: "✅ Utilisateur {telegramId} marqué comme bloqué",
    
    // Processus de récompense
    referral_reward_start: "🔔 DÉBUT processReferralRewardEnhanced:\n- Portefeuille: {wallet}\n- Montant: {amount} USDT\n- Hash TX: {hash}\n- De: {from}\n- Horodatage: {time}",
    transaction_recorded: "✅ Transaction enregistrée dans la base de données",
    balance_updated: "✅ Solde utilisateur mis à jour de +{amount} USDT",
    referral_reward_db_success: "✅ Récompense de parrainage traitée avec succès dans la base de données",
    sending_user_notification: "🔔 Envoi de notification à l'utilisateur {telegramId}",
    user_no_telegram_id: "⚠️ L'utilisateur {userId} n'a pas de telegram_id",
    database_overflow_error: "⚠️ Erreur de dépassement de champ numérique, tentative avec moins de précision",
    retry_failed: "❌ Nouvelle tentative également échouée",
    referral_reward_end: "✅ FIN processReferralRewardEnhanced pour le portefeuille {wallet}",
    
    // Récompenses simples
    simple_reward_processing: "🔔 Traitement de la récompense de parrainage: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Récompense de parrainage enregistrée pour l'utilisateur {telegramId}",
    
    // Notifications
    notification_sent: "✅ Notification de récompense de parrainage envoyée à l'utilisateur {telegramId}",
    notification_error: "❌ Erreur d'envoi de notification à l'utilisateur {telegramId}: {error}",
    
    // Mises à jour des portefeuilles
    wallets_updater_started: "✅ Surveillance des portefeuilles utilisateurs démarrée",
    
    // Transactions orphelines
    orphan_transaction_processing: "🔍 Traitement de la transaction de parrainage orpheline pour l'utilisateur {userId}",
    missed_reward_notification_sent: "⚠️ Notification de récompense manquée envoyée pour le niveau {level}",
    orphan_transaction_error: "❌ Erreur de traitement de transaction orpheline",
    
    // Général
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Bibliothèque des Curateurs",
    no_curators_data: "Aucune donnée de curateur disponible pour le niveau {level}",
    curators_library_explanation: "Ici vous pouvez voir les sponsors de vos partenaires et leurs équipes",
    statistics: "Statistiques",
    total_curators: "Total des curateurs",
    total_referrals: "Total des partenaires",
    average_per_curator: "Moyenne par curateur",
    sponsor: "Sponsor",
    partners: "Partenaires",
    more: "plus",
    incomplete_registration_title: "Vous n'avez pas terminé l'inscription dans le bot !",
    incomplete_registration_message: "Terminez l'inscription pour commencer à gagner des profits et ne pas manquer d'opportunités.",
    complete_registration_to_earn: "Terminez l'inscription et commencez à gagner !",
    complete_registration_to_earn_start: "🚀 <b>Envoyez simplement la commande</b> <code>/start</code> <b>pour continuer l'inscription !</b>",
    invalid_tx_hash_format:
      "❌ <b>Format TX Hash invalide</b>\n\nVeuillez entrer un hash de transaction valide (64 caractères, commence par 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Vérification de la transaction dans la blockchain...</b>\n\nObtention d'informations sur le montant et la date de transaction...",
    transaction_check_error:
      "❌ <b>Erreur de vérification de transaction</b>\n\n{error}",
    blockchain_check_error:
      "❌ Une erreur s'est produite lors de la vérification de la transaction dans la blockchain",
    transaction_found_details:
      "✅ <b>Transaction trouvée !</b>\n\n💰 <b>Montant:</b> {amount} USDT\n📅 <b>Date:</b> {date}\n\n⏰ <b>Choisissez la période d'envoi au pool:</b>",
    invalid_period_range:
      "❌ <b>Période invalide</b>\n\nVeuillez entrer un nombre de 1 à 28 jours",
    period_processing_error:
      "❌ Une erreur s'est produite lors du traitement de la période",

    // Периоды
    period_1_day: "1 jour",
    period_7_days: "7 jours",
    period_14_days: "14 jours",
    period_28_days: "28 jours",
    custom_period: "📅 Période personnalisée",

    // Админка
    bot_disabled_success: "🔴 Bot désactivé pour les utilisateurs",
    bot_disable_error: "❌ Erreur: {error}",
    admin_panel: "🔧 Panneau d'administration",
    invalid_prize_amount: "Montant du prix invalide",
    prize_set_success: "✅ Prix défini: {amount} USDT",
    prize_sent_success: "✅ TX hash enregistré. Prix envoyé au contrat.",
    prize_send_error: "❌ Erreur: {error}",
    winner_prize_notification:
      "🎯 Vos gains {amount} USDT ont été envoyés au contrat !\n\n⏰ Vous recevrez le profit dans 28 jours.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Domaine non autorisé</b>\n\n{domain_not_allowed_description}\n\n<b>Votre domaine:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Votre lien d'affiliation a été attaché avec succès !\n\n🏁 Vous êtes sur la dernière ligne droite ! Pour faciliter la communication, pouvoir poser vos questions et faire connaissance avec l'équipe, vous devez rejoindre notre chat.\n\n1. Rendez-vous dans ce chat : @BitnestRus\n\n2. Cliquez sur le bouton 'Rejoindre le groupe'\n\n3. N'oubliez pas d'activer les notifications\n\n4. Cliquez sur le bouton ci-dessous 'Je me suis inscrit(e)'\n\n👇🏼 Ou utilisez le bouton ci-dessous pour accéder automatiquement à notre chat",
    chat_link: "📢  Rejoindre le groupe",
    disclaimer:
      "✅ Cher utilisateur, ce système est conçu pour former et informer les nouveaux utilisateurs qui n'ont pas interagi auparavant avec le système Bitnest\n\n🤔 Veuillez nous dire, avez-vous déjà été inscrit ?\n\n1. Cliquez (NON) - si vous n'avez pas encore de compte dans le système et souhaitez suivre une formation et faire partie de notre équipe\n\n2. Cliquez (OUI) - si vous avez déjà un compte dans le système et avez envoyé des USDT en circulation\n\nLes services de ce bot sont fournis uniquement aux nouveaux utilisateurs qui n'étaient pas dans le système auparavant et ont cliqué sur le bouton ✅ NON",
    disclaimer_no: "✅ NON, JE SUIS UN NOUVEAU PARTICIPANT",
    disclaimer_yes: "⛔️ OUI, JE SUIS MEMBRE D'AUTRE ÉQUIPE",
    block_confirmation_title: "Confirmation",
    block_confirmation_message: "Si vous êtes membre d'une autre équipe, contactez votre curateur.\n\nÊtes-vous sûr de vouloir bloquer votre compte?",
    back_button: "◀️ Retour",
    confirm_block_button: "✅ Oui, bloquer",
    account_blocked_message: "🚫 <b>Compte bloqué</b>\n\nVotre compte a été bloqué à votre demande.\n\nSi cela s'est produit par erreur, contactez le support @BitnestRusSupport.",
    account_blocked:
      "❌ Malheureusement, les services de ce bot sont fournis uniquement aux nouveaux utilisateurs. Votre compte n'est pas actif. Pour toute question @BitnestRusSupport",
    please_try_again: "veuillez réessayer",
    add_custom_transaction: "➕ Ajouter une transaction",
    your_investment_portfolio_add: " ➕ Ajouter une transaction",
    adding_custom_transaction: "🔗 <b>Ajout de votre transaction</b>",
    enter_tx_hash_prompt:
      "Veuillez saisir le <b>TX Hash</b> de votre transaction :",
    transaction_requirements:
      "• Doit être exécutée sur le réseau BSC (Binance Smart Chain)\n• Doit être une transaction USDT",
    tx_hash_example:
      `📝 <b>Exemple:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nVoir vos transactions vers le pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Aller à</a>`,
    enter_amount_prompt:
      "💰 <b>Saisissez le montant de la transaction en USDT :</b>",
    amount_example: "Exemple : <code>100.50</code>",
    select_period_prompt:
      "⏰ <b>Sélectionnez la période d'investissement :</b>",
    verifying_transaction:
      "🔍 <b>Vérification de la transaction dans la blockchain...</b>",
    transaction_details:
      "TX Hash : <code>{txHash}</code>\nMontant : {amount} USDT\nPériode : {period} jours",
    please_wait: "Veuillez patienter...",
    transaction_already_exists:
      "Cette transaction a déjà été ajoutée au système",
    transaction_not_found: "Transaction non trouvée",
    transaction_not_confirmed: "Transaction non confirmée ou échouée",
    transaction_wrong_sender:
      "Transaction envoyée depuis le mauvais portefeuille. Votre portefeuille : {userWallet}, expéditeur dans la transaction : {txFrom}",
    transaction_wrong_receiver:
      "Transaction envoyée au mauvais portefeuille système. Le destinataire doit être : {systemWallet}",
    transaction_amount_mismatch:
      "Le montant ne correspond pas. Dans la blockchain : {blockchainAmount} USDT, vous avez saisi : {enteredAmount} USDT",
    transaction_not_usdt: "Ce n'est pas une transaction USDT",
    transaction_decode_error:
      "Échec du décodage des données de transaction USDT",
    blockchain_error:
      "Erreur lors de la vérification dans la blockchain : {error}",
    transaction_added_success: "✅ <b>Transaction ajoutée avec succès !</b>",
    investment_details: "📊 <b>Détails de l'investissement :</b>",
    investment_amount: "• Montant : {amount} USDT",
    investment_period: "• Période : {period} jours",
    investment_tx_hash: "• TX Hash : <code>{txHash}</code>",
    investment_profitability: "• Rentabilité : {profit}%",
    investment_added_to_portfolio:
      "💼 Investissement ajouté à votre portefeuille.",
    transaction_add_error: "❌ <b>Erreur lors de l'ajout de la transaction</b>",
    error_reason: "Raison : {error}",
    language_changed_success:
      "✅ La langue a été modifiée avec succès en Français!",
    welcome: `👋🏼 Bienvenue <b>{username}</b> - ceci est l'outil d'équipe de notre communauté. Ce bot vous guidera étape par étape à travers le système et vous aidera à faire partie de notre équipe !\n\n🎥 Nous avons préparé des instructions vidéo étape par étape expliquant et montrant tout le processus\n\n👇🏼 Pour commencer à apprendre et obtenir vos premiers résultats, cliquez sur le bouton "🎓 Commencer l'Apprentissage"`,
    welcome_back:
      "👋 Vous avez déjà terminé la formation ! Bon retour parmi nous !",
    education_title: "🎓 Matériels Éducatifs\nChoisissez un sujet :",
    finish: "✅ Formation terminée !",

    // =========================
    // Portefeuille
    // =========================
    wallet_installation:
      "📲 <b>Installation du Portefeuille</b>\nTéléchargez et installez l'un des portefeuilles pris en charge.",
    ask_wallet_address:
      "👍🏼 Excellent choix ! Commençons à apprendre :\n\n💵 La première chose dans le monde Web3 et DeFi est d'avoir votre propre portefeuille crypto personnel. Nous allons l'installer maintenant :\n\n1. Allez sur le site officiel de l'application <b>MetaMask</b>\n\n2. Installez l'application sur votre téléphone\n\n3. Créez un portefeuille et assurez-vous d'écrire la phrase de récupération dans un endroit sûr\n\n4. Configurez le réseau BSC - Binance Smart Chain (BEP20)\n\n5. Copiez votre adresse publique de portefeuille 0x.............\n\n6. Envoyez cette adresse comme message dans le champ ci-dessous 👇🏼",
    enter_wallet: `🥳 Félicitations, votre portefeuille a été lié avec succès !\n\n📝 Dans cette étape, vous devez vous inscrire sur le site officiel de Bitnest (voir vidéo)\n\n1. Copiez ce lien \n\n<code>{referral_link_bitnest}</code>\n\n et ouvrez-le dans le navigateur interne de votre portefeuille\n\n2. Cliquez sur "Connect" en haut à droite\n\n3. Confirmez l'autorisation sur le site dans la fenêtre pop-up de votre portefeuille \n\n<i><b>*Si le site ne s'ouvre pas, activez le programme de 3 lettres (qui vous permettra d'accéder au site)</b></i>\n\n👇🏼 Ou utilisez les boutons ci-dessous pour aller automatiquement à votre portefeuille et ouvrir la page requise`,
    your_wallet: "💼 Votre Portefeuille Crypto\n\n📌 Adresse (BEP20)",
    install_wallet:
      "👍🏼 Excellent choix ! Commençons à apprendre :\n\n💵 La première chose dans le monde Web3 et DeFi est d'avoir votre propre portefeuille crypto personnel. Nous allons l'installer maintenant :\n\n1. Allez sur le site officiel de l'application <b>MetaMask</b>\n\n2. Installez l'application sur votre téléphone\n\n3. Créez un portefeuille et assurez-vous d'écrire la phrase de récupération dans un endroit sûr\n\n4. Configurez le réseau BSC - Binance Smart Chain (BEP20)\n\n5. Copiez votre adresse publique de portefeuille 0x.............\n\n6. Envoyez cette adresse comme message dans le champ ci-dessous 👇🏼",
    loading_balance: "⏳ Obtention des informations de solde...",
    refresh: "🔄 Actualiser",
    bnb_balance: "Solde :\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Solde de Jetons",
    wallet_not_configured: "❌ Portefeuille non configuré",
    send_usdt: "💸 Envoyer USDT",
    check_my_investment: "💸 Envoyer USDT", // Clé dupliquée, même traduction
    error_amount_not_selected: "❌ Erreur : montant non sélectionné",
    error_wallet_not_configured: "❌ Erreur : portefeuille non configuré",
    back_to_amount_selection: "◀️ Retour à la sélection du montant",
    configure_wallet: "⚙️ Configurer le Portefeuille",

    // =========================
    // DeFi et BitNest
    // =========================
    your_mentor: (mentor) => `Votre mentor : ${mentor}`,
    write_to_mentor: "✉️ Écrire au mentor",
    what_is_bitnest:
      "🏗 <b>Qu'est-ce que BitNest</b>\nOpérations transparentes, contrôle de vos fonds.",
    defi_basics:
      "📊 Bases du DeFi.\nSuivant — comment fonctionne l'investissement dans les pools.",
    liquidity_pool_text:
      "💎 Pool de Liquidité\n\n💵 Ici, vous pouvez envoyer de l'USDT au pool de liquidité et recevoir des bonus.\n\nChoisissez une action :",
    my_investments_empty: "📊 Vous n'avez pas encore d'investissements.",
    investment_saved: "✅ Données sauvegardées",
    investment_return_received: (amount) =>
      `Votre circulation de <b>${amount} $</b> a été reçue`,
    congrats_profit: "Félicitations pour avoir reçu le profit !",
    referral_reward_received: "Vous avez reçu une récompense de parrainage !",
    back_to_main_menu: "🏠 Au menu principal",
    user: "Utilisateur",
    amount: "Montant",
    congrats_referral_earned:
      "Félicitations ! Vous avez gagné une récompense de parrainage !",
    balance_replenished: (amount) =>
      `Votre solde a été rechargé de ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Vous avez reçu une récompense de parrainage ${amount}`,
    you_have_inactive_levels: "Vous avez des niveaux inactifs !",
    if_invest_amount_activate_levels: (amount, levels) =>
      `En envoyant ${amount} USDT vous pouvez activer les niveaux : ${levels}`,
    activate_levels_to_earn:
      "Activez les niveaux pour gagner un revenu des filleuls !",
    new_levels_activated: (levels) => `Nouveaux niveaux activés : ${levels}`,
    now_earn_from_levels:
      "Maintenant, vous gagnez un revenu de ces niveaux de votre équipe !",
    invalid_tx_hash_contact_support:
      "❌ Hash de transaction invalide. Veuillez contacter le support.",
    congrats_liquidity_pool_success:
      "Félicitations ! Votre envoi au pool de liquidité a réussi !",
    transaction_details: "Détails de la Transaction",
    block: "Bloc",
    period: "Terme",
    days: "jours",
    total_return: "Montant total de retour",
    return_date: "Date de retour",
    error_updating_pool_status:
      "❌ Erreur de mise à jour du statut d'envoi au pool. Contactez le support.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transaction non trouvée après plusieurs tentatives.\n\n` +
      `TX Hash : ${txHash}\n\n` +
      `Raisons possibles :\n` +
      `• Transaction non encore confirmée par le réseau\n` +
      `• TX Hash invalide\n` +
      `• Problèmes de réseau BSC\n\n` +
      `Veuillez vérifier le TX Hash et réessayer ou contacter le support.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Transaction envoyée à la mauvaise adresse !\n\n` +
      `▸ Adresse reçue : ${actualTo}\n` +
      `▸ Adresse attendue : 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Veuillez vous assurer que vous envoyez de l'USDT à la bonne adresse du pool.`,
    transaction_not_confirmed: (status) =>
      `❌ Transaction non confirmée. Statut : ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Veuillez vérifier le statut de la transaction sur BscScan et contacter le support si nécessaire.",
    error_checking_transaction:
      "❌ Erreur de vérification de la transaction. Réessayez plus tard ou contactez le support.",
    investment_confirmation:
      `💰 <b>Confirmer l'Envoi au Pool</b>\n\n` +
      `📊 <b>Détails de la Transaction :</b>\n` +
      `▸ Montant : <b>{amount} USDT</b>\n` +
      `▸ Terme : <b>{period} jours</b>\n` +
      `▸ Rendement : <b>{profitPercent}%</b>\n` +
      `▸ Profit attendu : <b>{expectedProfit} USDT</b>\n` +
      `▸ Montant total de retour : <b>{totalReturn} USDT</b>\n` +
      `▸ Date de retour : <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Instructions d'Envoi :</b>\n\n` +
      `1. Ouvrez l'application MetaMask\n\n` +
      `2. Allez sur le site officiel de Bitnest\n\n` +
      `3. Cliquez sur <b>"Connect"</b> en haut à droite - <i>(si vous voyez l'icône du portefeuille, passez à l'étape suivante)</i>\n\n` +
      `4. Cliquez sur l'icône du portefeuille et allez à la section Loop\n\n` +
      `5. Entrez le montant à envoyer\n\n` +
      `6. Sélectionnez le terme d'envoi\n\n` +
      `7. Cliquez sur le bouton "Circulation"\n\n` +
      `8. Confirmez l'envoi sur le site dans la fenêtre pop-up de votre portefeuille\n\n` +
      `👇🏼 Ou utilisez les boutons ci-dessous pour aller automatiquement à votre portefeuille et ouvrir la page requise`,
    send_metamask_mobile: "🦊 Envoyer - MetaMask 📲",
    transaction_search_timer: `⚠️ En attente de votre envoi, instructions ci-dessus\n\n<b>🔎 Après l'envoi, nous commencerons la recherche de la transaction ...</b>\n⏰ <b>Temps alloué pour l'envoi et la recherche de votre transaction :</b> 20:00 min...\n\n`,
    cancel_search: "❌ Annuler la recherche",
    failed_delete_timer_message:
      "Échec de la suppression du message du minuteur : {error}",
    investment_details_base:
      `💰 <b>Confirmer l'Envoi au Pool</b>\n\n` +
      `📊 <b>Détails de la Transaction :</b>\n` +
      `▸ Montant : <b>{amount} USDT</b>\n` +
      `▸ Terme : <b>{period} jours</b>\n` +
      `▸ Statut : <b>Annulé</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Recherche de transaction annulée par l'utilisateur</b>",
    failed_update_message:
      "Échec de la mise à jour du message, envoi d'un nouveau : {error}",
    transaction_search_cancelled_log:
      "✅ Recherche de transaction annulée pour l'utilisateur {userId}",
    no_active_transaction_search:
      "❌ Aucune recherche de transaction active trouvée",
    error_cancelling_search: "❌ Erreur d'annulation de la recherche : {error}",
    error_cancelling_search_user:
      "❌ Une erreur s'est produite lors de l'annulation de la recherche",
    processing_found_transaction:
      "🔄 Traitement de la transaction trouvée pour l'utilisateur {userId}",
    investment_in_process_not_found:
      "Investissement avec statut in_process non trouvé",
    failed_update_investment_status:
      "Échec de la mise à jour du statut de l'investissement",
    // failed_delete_timer_message: "Échec de la suppression du message du minuteur : {error}", // Clé dupliquée, déjà traduite ci-dessus
    failed_delete_previous_message:
      "Échec de la suppression du message précédent : {error}",
    transaction_confirmed_message:
      `💰 <b>Confirmer l'Envoi au Pool</b>\n\n` +
      `📊 <b>Détails de la Transaction :</b>\n` +
      `▸ Montant : <b>{amount} USDT</b>\n` +
      `▸ Terme : <b>{period} jours</b>\n` +
      `▸ Profit attendu : <b>{expectedProfit} USDT</b>\n` +
      `▸ Montant total de retour : <b>{totalReturn} USDT</b>\n` +
      `▸ Date de retour : <b>{returnDate}</b>\n\n` +
      `✅ <b>Transaction confirmée !</b>\n` +
      `📊 <b>Hash de la Transaction :</b> <code>{hash}</code>\n` +
      `💰 <b>Montant réel :</b> {actualAmount} USDT\n` +
      `⏰ <b>Confirmé :</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Activation des niveaux utilisateur basée sur le montant investi",
    user_prefix: "User_",
    notification_sent_to_referrer:
      "✅ Notification envoyée au parrain {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Parrain non trouvé ou données nécessaires manquantes",
    user_has_no_referrer: "⚠️ L'utilisateur n'a pas de parrain",
    error_sending_referral_notification:
      "Erreur d'envoi de notification de parrainage : {error}",
    error_sending_missed_rewards:
      "Erreur d'envoi des notifications de récompenses manquées : {error}",
    error_sending_missed_referrals:
      "Erreur d'envoi de notification de filleuls manqués : {error}",
    level_activation_notifications_sent:
      "🎯 Notifications d'activation de niveau envoyées pour les niveaux : {levels}",
    error_sending_level_activation:
      "Erreur d'envoi de notification d'activation de niveau : {error}",
    transaction_processed_successfully:
      "✅ Transaction traitée pour l'utilisateur {userId}",
    error_processing_transaction:
      "❌ Erreur de traitement de la transaction pour l'utilisateur {userId} : {error}",
    transaction_processing_error_message:
      `❌ <b>Erreur de traitement de la transaction</b>\n\n` +
      `TX Hash : {hash}\n` +
      `Erreur : {error}\n\n` +
      `Veuillez contacter le support.`,
    // error_sending_notification: "Erreur d'envoi de notification : {error}", // Clé dupliquée, apparaît plus tard
    // new_levels_activated: "Nouveaux niveaux activés !", // Clé dupliquée, déjà traduite ci-dessus
    activated_levels: "Niveaux Activés",
    levels_activation_benefit:
      "Maintenant, vous gagnez un revenu de ces niveaux de votre équipe !",
    referral_made_transaction: "Votre filleul a effectué une transaction !",
    your_referral: "Votre filleul",
    congrats_referral_reward:
      "Félicitations ! Vous avez gagné une récompense de parrainage !",
    transaction_check_started:
      "Démarrage de la vérification de la transaction...",
    checking_for: "La vérification sera effectuée pendant",
    minutes: "minutes",
    // transaction_not_found_after_attempts: "Transaction {txHash} non trouvée après {attempts} tentatives de vérification. Veuillez vérifier manuellement sur BscScan ou contacter le support.", // Clé dupliquée, déjà traduite ci-dessus (différence fonctionnelle ? Vérifier l'utilisation)

    // =========================
    // Programme d'Affiliation
    // =========================
    affiliate_text: `👥 Votre réseau d'affiliation, {username}\n\n17 niveaux de votre équipe et gain de revenus de chaque niveau basé sur le rendement de vos filleuls\n\n<b>Niveau 1</b> - 20%\n<b>Niveau 2</b> - 10%\n<b>Niveau 3 - 7</b> - 5%\n<b>Niveau 8 - 10</b> - 3%\n<b>Niveau 11 - 17</b> - 1%\n\nPour activer chaque niveau, votre part dans le pool doit correspondre à <b>Niveau № * 100$</b>\nPour activer tous les niveaux, votre part personnelle dans le pool = <b>1700$</b>\n\n📊 Statistiques globales des niveaux :\n{pools.levels}\n\n💰 Total : 0 réf. | 0.000 USDT`,
    your_referral_sent: "Votre filleul a effectué un envoi !",
    missed_referral_reward: (missedAmount, level) =>
      `Vous avez manqué une récompense de parrainage ${missedAmount}$ du niveau ${level}`,
    activate_level_to_earn:
      "Activez le niveau pour gagner un revenu de toute la structure !",
    check_subscription: "✅ Je me suis abonné(e)",
    website_ref:
      '🎉 Félicitations pour votre inscription réussie !\n\n🔗 Dans cette étape, vous devez ajouter votre lien d affiliation depuis votre compte personnel Bitnest\n\n1. Allez sur le site officiel de Bitnest\n\n2. Cliquez sur "<b>Connect</b>" en haut a droite<i> - (si vous voyez l icone du portefeuille, passez a l etape suivante)</i>\n\n3. Cliquez sur "<b>Inviter des Amis</b>"\n\n4. Cliquez sur "<b>Copier mon lien</b>"\n\n5. Envoyez-le dans le champ ci-dessous 👇🏼',

    // =========================
    // Tirages au sort et Événements
    // =========================
    raffle: "🎁 TIRAGE AU SORT 🎁",
    daily_raffle: "🎉 Tirage au sort quotidien !",
    current_prize: "🏆 Prix",
    participants: "👥 Déjà participants ",
    end_time: "⏰ Résultats",
    raffle_text: `✅ <b>Conditions de participation :</b>\n• Part active minimale dans le pool : 10 USDT\n• Une tentative par personne\n\n`,
    raffle_requirement:
      "Une part active dans le pool est requise pour participer au tirage au sort",
    raffle_wallet_not_set: "⚠️ Configurez d'abord votre portefeuille",
    raffle_already_registered:
      "✅ Vous êtes inscrit avec succès dans le round actuel !",
    successfully_registered:
      "Vous êtes inscrit avec succès au tirage au sort !",
    registration_failed: "Échec de l'inscription",
    participate_button: "🎟 Participer",
    no_active_raffle: "Il n'y a pas de tirage au sort actif pour le moment.",
    already_registered_in_raffle:
      "✅ Vous êtes déjà inscrit au tirage au sort actuel !",
    new_raffle_started:
      "💰 Prix : {prize} USDT\n" + "⏰ Temps restant : {hours} heures\n\n",
    register_in_raffle: "🤖 Inscription au Tirage au sort",
    raffle_error: "❌ Erreur : {error}",

    // De la section Portefeuille
    raffle_min_investment_required:
      "Une part active dans le pool à partir de 10$ est requise pour participer au tirage au sort\n\n" +
      "Envoyez de l'USDT au pool pour obtenir la possibilité de participer.",
    raffle_registration_success:
      "Vous êtes inscrit avec succès !\n\nMaintenant, vous participez au tirage au sort !",
    eligible_to_participate:
      "💪 Vous êtes éligible pour vous inscrire au tirage au sort",
    raffle_registration_error: "❌ Erreur d'inscription : {error}",

    // Du Menu et Navigation (pour vérification d'inscription)
    not_registered_yet:
      "❌ Vous n'êtes pas encore inscrit. Cliquez sur le bouton de votre portefeuille pour vous inscrire.",
    register_button: "📝 S'inscrire",
    registration_check_error: "❌ Erreur de vérification de l'inscription",
    registering_wallet: "🔄 Enregistrement de votre portefeuille...",
    registration_success:
      "✅ Vous êtes inscrit avec succès dans le round actuel !",
    registration_error: "❌ Erreur d'inscription",
    try_later_or_contact_admin:
      "Réessayez plus tard ou contactez l'administrateur.",
    registration_process_error: "❌ Erreur du processus d'inscription",
    mentor_not_found: "❌ <b>Mentor non trouvé</b>",
    mentor_not_found_description:
      "Vous n'avez pas de mentor assigné. Veuillez contacter le support.",
    // =========================
    // Autre
    // =========================
    new_referral_notification: (username) =>
      `👏🏼 Vous avez un nouveau filleul @${username}`,
    friend: "ami",
    welcome_error:
      "👋 Bienvenue ! Une erreur s'est produite lors du chargement du menu.",
    link_subscription_pending:
      "⌛ <b>Paiement d'abonnement en attente</b>\n\n" +
      "Votre abonnement attend la confirmation du paiement. " +
      "Si vous avez déjà payé, cliquez sur le bouton ci-dessous pour vérifier le statut.",
    check_payment: "🔄 Vérifier le Paiement",
    create_new_payment: "💳 Créer un Nouveau Paiement",
    link_subscription_required:
      "❌ <b>Accès aux paramètres de lien par abonnement</b>\n\n" +
      "✅ Pour configurer votre lien de parrainage et activer votre bot, vous devez acheter un abonnement pour 10$/mois.\n\n",
    buy_subscription: "💳 Acheter un Abonnement (10$/mois)", // Clé dupliquée, apparaît plus tard
    link_settings_error: "❌ Erreur de chargement des paramètres de lien",
    setup_wallet_first:
      "❌ Configurez d'abord votre portefeuille dans les paramètres",
    custom_amount_message:
      "💰 <b>Entrez votre montant à envoyer au pool </b>\n\n" +
      "Montant minimum : <b>1 USDT</b>\n" +
      "Montant maximum : <b>100000000 USDT</b>\n\n" +
      "📝 <i>Envoyez un nombre - le montant en USDT dans le champ ci-dessous</i>",

    // =========================
    // Menu et Navigation
    // =========================
    menu_title: `🎉 <b>Bienvenue, {username}</b>\n\n🚀 <b>BitnestRus Bot - Votre assistant fiable et outil d'équipe</b>\n\n✨ <b>Fonctionnalités du bot :</b>\n• 🎁 Tirages au sort de prix en argent\n• 💰 Statistiques financières de votre portefeuille\n• 🌊 Instructions pour travailler avec le pool de liquidité\n• 👥 Programme d'affiliation multi-niveaux\n• 📊 Analyses et notifications\n\n👇 Sélectionnez une section dans le menu :\n`,
    back: "◀️ Retour",
    next: "➡️ Suivant",
    nextreg: " ✍🏼 Je me suis inscrit(e)",
    my_wallet: "💰 Mon Portefeuille",
    liquidity_pool: "🌊 Pool de Liquidité",
    my_portfolio: "💼 Mon Portefeuille",
    presentation: "🎥 Présentation",
    video_instructions: "📚 Instructions Vidéo",
    official_website: "🔗 Site Officiel",
    oficial_site: "✅ Site Officiel",
    affiliate: "👥 Programme d'Affiliation",
    settings: "⚙️ Paramètres",
    admin: "🔧 Panneau d'Administration",
    settings_title:
      "⚙️ Paramètres\n\nIci, vous pouvez configurer vos liens\n\nChoisissez une action :",
    start_education: "🎓 Commencer l'Apprentissage",
    download_metamask: "🦊 Télécharger - MetaMask",
    register_metamask: "🦊 Inscription - MetaMask",
    register_metamask_mobile: "🦊 Inscription - MetaMask",
    invest_now_message:
      `💰 <b>Envoyer de l'USDT au Pool de Liquidité</b>\n\n` +
      `<b>Rendement par terme :</b>\n` +
      `• <b>1 jour</b> - 0.4%\n` +
      `• <b>7 jours</b> - 4%\n` +
      `• <b>14 jours</b> - 9.5%\n` +
      `• <b>28 jours</b> - 24%\n\n` +
      `<i>Tous les fonds <b>(montant USDT + bonus)</b> sont retournés automatiquement après le terme spécifié sur votre portefeuille</i>\n\n` +
      `📌 <b>Votre solde :</b>\n` +
      `• BNB : {bnb_balance}\n` +
      `• USDT : {usdt_balance}\n\n` +
      `👇🏼 <b>Sélectionnez le montant à envoyer au pool :</b>`,
    custom_amount: "🗂 Montant Personnalisé",
    error_getting_data: "❌ Erreur d'obtention des données, réessayez.",
    choose_period_message:
      `🔄 Vous avez sélectionné le montant <b>{amount} USDT</b>. Sélectionnez le terme d'envoi au pool :\n\n` +
      `<b>Rendement par terme :</b>\n` +
      `• <b>1 jour</b> - 0.4%\n` +
      `• <b>7 jours</b> - 4%\n` +
      `• <b>14 jours</b> - 9.5%\n` +
      `• <b>28 jours</b> - 24%\n\n` +
      `<i>Tous les fonds <b>(montant USDT + bonus)</b> sont retournés automatiquement après le terme spécifié sur votre portefeuille</i>\n\n` +
      `👇 <b>Sélectionnez le terme d'envoi au pool :</b>`,
    back_to_amount_selection: "◀️ Retour à la sélection du montant", // Clé dupliquée, déjà traduite ci-dessus
    main_menu: "🏠 Au Menu Principal",
    timer_message_id_not_found: "❌ timer_message_id non trouvé",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ En attente de votre envoi, instructions ci-dessus\n\n<b>🔎 Après l'envoi, nous commencerons la recherche de la transaction ...</b>\n\n⏰ <b>Temps alloué pour l'envoi et la recherche de votre transaction :</b> ${timeString}  min...\n\n`,
    cancel_search: "❌ Annuler la recherche", // Clé dupliquée, déjà traduite ci-dessus
    timer_error: "❌ Erreur de minuteur : {error}",
    timer_stopped_message_not_found:
      "⏹️ Minuteur arrêté : message non trouvé ou indisponible",
    timer_minor_error_continue:
      "⚠️ Erreur mineure du minuteur, continuation...",
    transaction_timeout_message:
      "⏰ <b>Temps de recherche de transaction expiré</b>\n\n" +
      "❌ Impossible de trouver la confirmation de la transaction dans le temps imparti.\n\n" +
      "Raisons possibles :\n" +
      "• Transaction non encore confirmée par le réseau\n" +
      "• TX Hash invalide\n" +
      "• Problèmes de réseau BSC\n\n" +
      "Veuillez vérifier le statut de la transaction sur BscScan et réessayer.",
    transaction_timeout_log:
      "⏰ Timeout de transaction pour l'utilisateur {userId}",
    transaction_timeout_error:
      "❌ Erreur de traitement du timeout de transaction : {error}",
    transaction_not_found_try_again:
      "❌ Transaction non trouvée. Essayez de recommencer.",
    awaiting_transaction_check:
      "🔍 <b>En attente de la vérification de la transaction...</b>\n\n" +
      "Le bot vérifiera la blockchain dans les 2-5 minutes.\n" +
      "Vous recevrez une notification sur le résultat.",
    transaction_not_found_message:
      `❌ <b>Transaction non trouvée</b>\n\n` +
      `Raisons possibles :\n` +
      `• Transaction non encore confirmée par le réseau\n` +
      `• Envoyé à la mauvaise adresse du pool\n` +
      `📞 Si vous avez envoyé de l'USDT, contactez le support\n` +
      `🔍 TX Hash : fournissez le hash de la transaction`,
    transaction_not_found_notification_sent:
      "✅ Notification de transaction non trouvée envoyée à l'utilisateur {userId}",
    error_sending_notification: "Erreur d'envoi de notification : {error}", // Clé dupliquée, apparaît plus tôt
    request_tx_hash_message:
      "📝 <b>Veuillez entrer le hash de la transaction (TX Hash) :</b>\n\n" +
      "Après avoir envoyé de l'USDT, copiez le TX Hash de votre portefeuille et envoyez-le ici.",
    error_requesting_tx_hash: "Erreur de demande de TX Hash : {error}",
    presentation_message:
      `📊 <b>Présentation</b>\n\n` +
      `🎥 Présentation vidéo détaillée qui vous aidera à comprendre les avantages de la plateforme et cet outil\n\n`,
    presentation_error: "Erreur de présentation : {error}",
    presentation_load_error: "❌ Erreur de chargement de la présentation",
    user_not_determined: "❌ Impossible de déterminer l'utilisateur",
    not_configured: "Non configuré",
    from_your_inviter: `\n👤 De votre invitant : {name}`,
    // user: "Utilisateur", // Clé dupliquée, déjà traduite ci-dessus
    system_video_instruction: `\n📋 Instruction vidéo système`,
    video_instructions_header: "🎥 <b>Instructions Vidéo</b>",
    video_instructions_description:
      "📚 Cours vidéo détaillé où vous apprendrez toutes les subtilités du travail avec le système et comment interagir avec le pool",
    video_link_available: `🔗 <b>Lien vidéo :</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Lien non disponible</b>\n\n`,
    video_instruction_error: "Erreur d'instruction vidéo : {error}",
    video_instruction_load_error:
      "❌ Erreur de chargement des instructions vidéo",
    system_link: "🌐 Lien Système",
    from_your_mentor: "👤 De Votre Mentor",
    // user: "Utilisateur", // Clé dupliquée
    your_link: "🌐 Votre Lien",
    visit_official_website:
      "Visitez le site officiel de la plateforme et découvrez tous les détails et règles de travail avec le service",
    link: "Lien",
    open_metamask: "🦊 Ouvrir MetaMask",
    open_in_browser: "💻 Ouvrir dans le Navigateur PC",
    website_error: "❌ Erreur de chargement des informations du site",
    your_investment_portfolio:
      "Votre portefeuille de parts actives dans le pool",
    // transaction: "Transaction", // Clé dupliquée, apparaît plus tard
    // amount: "Montant", // Clé dupliquée
    term: "Terme",
    // days: "jours", // Clé dupliquée
    profitability: "Rendement",
    time_left: "Temps restant",
    d: "j",
    h: "h",
    expected_profit: "Profit attendu",
    type: "Type",
    incoming_transaction: "Transaction entrante",
    refund: "Remboursement",
    status: "Statut",
    active: "Actif",
    archived: "Envoi archivé",
    returned: "Retourné",
    total_statistics: "Statistiques totales",
    total_active_amount: "Montant actif total",
    page: "Page",
    of: "de",
    portfolio_error: "⚠️ Erreur de chargement du portefeuille",
    congrats_on_profit: "Félicitations pour avoir reçu le profit !", // Similaire à congrats_profit ?
    bot_not_available: "Bot non disponible pour l'envoi de notifications",
    investment_notification_sent:
      "Notification de retour sur investissement envoyée à l'utilisateur",
    investment_notification_error:
      "Erreur d'envoi de notification de retour sur investissement :",
    check_old_transactions: "🔍 Vérifier les Anciennes Transactions",
    checking_old_transactions: "Vérification des anciennes transactions",
    this_may_take_seconds: "Cela peut prendre quelques secondes...",
    wallet_not_found:
      "❌ Portefeuille non trouvé. Veuillez le connecter dans votre profil.",
    check_completed: "Vérification terminée",
    added_to_portfolio: "Ajouté au portefeuille",
    transactions: "transactions",
    my_portfolio: "💼 Mon portefeuille",
    check_transactions_error:
      "⚠️ Erreur lors de la vérification des transactions. Veuillez réessayer plus tard.",
    // =========================
    // Programme d'affiliation
    // =========================
    affiliate_text:
      "👥 Votre réseau d'affiliation,{pools.name}\n\n17 niveaux de votre équipe et revenus de chaque niveau\n<b>Niveau 1</b> - 20%\n<b>Niveau 2</b> - 10%\n<b>Niveaux 3 - 7</b> - 5%\n<b>Niveaux 8 - 10</b> - 3%\n<b>Niveaux 11 - 17</b> - 1%\n\nL'activation nécessite une part = <b>numéro de niveau * 100 $</b>\nTous les niveaux actifs = <b>1700 $</b>\n📊 Statistiques :\n{pools.levels}\n💰 Total : 0 réf. | 0.000 USDT",
    missed_referral_reward: (missedAmount, level) =>
      `Vous avez manqué une récompense de parrainage ${missedAmount}$ du niveau ${level}`,
    check_subscription: "✅ Je me suis abonné",
    website_ref:
      '🎉 Félicitations pour votre inscription réussie !\n\n🔗 Dans cette étape, vous devez ajouter votre lien de parrainage depuis votre compte personnel Bitnest\n\n1. Allez sur le site officiel de Bitnest\n2. Cliquez sur "<b>Connecter</b>" en haut à droite\n3. Cliquez sur "<b>Inviter des amis</b>"\n4. Cliquez sur "<b>Copier mon lien</b>"\n5. Envoyez-le dans le champ ci-dessous 👇🏼',

    // =========================
    // Tirages au sort et Événements
    // =========================
    raffle: "🎁 TIRAGE AU SORT 🎁",
    daily_raffle: "🎉 Tirage au sort quotidien !",
    current_prize: "🏆 Prix",
    participants: "👥 Participants ",
    end_time: "⏰ Résultats à",
    raffle_text: `✅ <b>Conditions de participation :</b>\n• Part active minimale dans le pool : 10 USDT\n• Une tentative par personne\n\n`,
    raffle_requirement:
      "Une part active dans le pool est requise pour participer au tirage au sort",
    raffle_wallet_not_set: "⚠️ Veuillez d'abord configurer votre portefeuille",
    raffle_already_registered:
      "✅ Vous êtes inscrit avec succès pour le round actuel !",
    successfully_registered:
      "Vous avez été inscrit avec succès au tirage au sort !",
    registration_failed: "Échec de l'inscription",
    participate_button: "🎟 Participer",
    no_active_raffle: "Il n'y a pas de tirage au sort actif pour le moment.",
    already_registered_in_raffle:
      "✅ Vous êtes déjà inscrit au tirage au sort en cours !",
    new_raffle_started:
      "💰 Prix : {prize} USDT\n" +
      "⏰ Se termine dans : {hours} heures\n\n" +
      "✅ Votre part de pool : active (≥10$)\n\n",
    register_in_raffle: "🤖 Inscription au tirage au sort",
    raffle_error: "❌ Erreur : {error}",

    // De la section Portefeuille
    raffle_min_investment_required:
      "Une part active dans le pool d'au moins 10$ est requise pour participer au tirage au sort\n\n" +
      "Envoyez de l'USDT au pool pour devenir éligible à participer.",
    raffle_registration_success:
      "Vous avez été inscrit avec succès !\n\nVous participez maintenant au tirage au sort !",
    eligible_to_participate:
      "💪 Vous êtes éligible pour vous inscrire au tirage au sort",
    raffle_registration_error: "❌ Erreur d'inscription : {error}",

    // De la section Menu et Navigation (pour la vérification de l'inscription)
    not_registered_yet:
      "❌ Vous n'êtes pas encore inscrit. Cliquez sur le bouton de votre portefeuille pour vous inscrire.",
    register_button: "📝 S'inscrire",
    registration_check_error:
      "❌ Erreur lors de la vérification de l'inscription",
    registering_wallet: "🔄 Enregistrement de votre portefeuille...",
    registration_success:
      "✅ Vous êtes inscrit avec succès pour le round actuel !",
    registration_error: "❌ Erreur d'inscription",
    try_later_or_contact_admin:
      "Veuillez réessayer plus tard ou contacter l'administrateur.",
    registration_process_error: "❌ Erreur lors de l'inscription",
    new_referral_notification: (username) =>
      `👏🏼 Vous avez un nouveau filleul @${username}`,
    friend: "ami",
    welcome_error:
      "👋 Bienvenue ! Une erreur s'est produite lors du chargement du menu.",
    link_subscription_pending:
      "⌛ <b>Paiement en attente</b>\n\n" +
      "Votre abonnement attend la confirmation du paiement. " +
      "Si vous avez déjà payé, cliquez sur le bouton ci-dessous pour vérifier le statut.",
    check_payment: "🔄 Vérifier le paiement",
    create_new_payment: "💳 Créer un nouveau paiement",
    link_subscription_required:
      "❌ <b>La configuration du lien nécessite un abonnement</b>\n\n" +
      "✅ Pour configurer votre lien de parrainage et activer votre bot, vous devez acheter un abonnement de 10 $/mois.\n\n",
    setup_wallet_first:
      "❌ Configurez d'abord votre portefeuille dans les paramètres",
    custom_amount_message:
      "💰 <b>Entrez votre montant à envoyer au pool </b>\n\n" +
      "Montant minimum : <b>1 USDT</b>\n" +
      "Montant maximum : <b>100000000 USDT</b>\n\n" +
      "📝 <i>Envoyez un nombre - le montant en USDT dans le champ ci-dessous</i>",
    language_settings:
      "🌐 <b>Sélectionnez la langue :</b>\n\nLangue actuelle : Français",
    select_language: "🌐 <b>Sélectionnez la langue :</b>",
    current_language: "Langue actuelle : {language}",
    russian: "🇷🇺 Russe",
    english: "🇺🇸 Anglais",
    indonesia: "🇮🇩 Indonesia",
    espaniol: "🇪🇸 Español",
    italy: "🇮🇹 Italy",
    german: "🇩🇪 German",
    georgia: "🇬🇪 Géorgien",
    greece: "🇬🇷 Grec",
    swahilli: "🇰🇪 Kenyan",
    turkish: "🇹🇷 Turc",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Retour aux paramètres",
    your_mentor: "Votre mentor : {mentor}",
    write_to_mentor: "✉️ Écrire au mentor",
    mentor_not_found_description:
      "Vous n'avez pas de mentor assigné. Veuillez contacter le support.",
    contact_support: "✉️ Contacter le support",
    language_changed_ru: "✅ Langue changée en Russe",
    language_changed_en: "✅ Langue changée en Anglais",
    language_changed_fr: "✅ Langue changée en Francés",
    language_changed_id: "✅ Langue changée en Indonesia",
    language_changed_es: "✅ Langue changée en Español",
    language_change_error: "❌ Erreur lors du changement de langue",
    level_activation_title: "Activation du niveau du programme d'affiliation",
    your_pool_share: "Votre part de pool",
    new_activated_levels: "Nouveaux niveaux activés",
    activation_status: "Statut d'activation",
    how_to_activate: "Comment activer",
    levels_activate_automatically:
      "Les niveaux s'activent automatiquement lorsque le montant d'investissement requis est atteint (100 $ par niveau)",
    to_activate_level: "Pour activer le niveau",
    needs_more: "a besoin de plus",
    refresh_status: "🔄 Actualiser le statut",
    levels_check_error: "❌ Erreur lors de la vérification des niveaux",
    // =========================
    // Menu et navigation
    // =========================
    menu_title: `🎉 Bienvenue, <b>{username}</b>\n\n🚀 <b>BitNestRus Bot - Votre assistant et outil d'équipe</b>\n✨ <b>Fonctionnalités du bot :</b>\n• 🎁 Tirages au sort avec prix en argent\n• 💰 Statistiques financières du portefeuille\n• 🌊 Instructions pour le pool de liquidité\n• 👥 Programme d'affiliation multi-niveaux\n• 📊 Analyses et notifications\n\n👇 Choisissez une section du menu :\n`,
    back: "◀️ Retour",
    next: "➡️ Suivant",
    nextreg: " ✍🏼 J'ai terminé l'enregistrement",
    my_wallet: "💰 Mon portefeuille",
    liquidity_pool: "🌊 Pool de liquidité",
    affiliate: "👥 Affiliation",
    settings: "⚙️ Paramètres",
    admin: "🔧 Panneau d'administration",
    settings_title:
      "⚙️ Paramètres\n\nConfigurez vos liens\n\nSélectionnez une action :",
    start_education: "🎓 Commencer la formation",
    download_metamask: "🦊 Télécharger - MetaMask",
    register_metamask: "🦊 S'enregistrer - MetaMask",
    register_metamask_mobile: "🦊 S'enregistrer - MetaMask",
    presentation: "🎥 Présentation",
    video_instructions: "📚 Instructions vidéo",
    official_website: "🔗 Site officiel",
    oficial_site: "✅ Site officiel",
    invest_now_message:
      `💰 <b>Transfert USDT vers le pool de liquidité</b>\n\n` +
      `<b>Rendement par durée :</b>\n` +
      `• <b>1 jour</b> - 0.4%\n` +
      `• <b>7 jours</b> - 4%\n` +
      `• <b>14 jours</b> - 9.5%\n` +
      `• <b>28 jours</b> - 24%\n\n` +
      `<i>Tous les fonds <b>(montant USDT + bonus)</b> sont automatiquement retournés après la période spécifiée à votre portefeuille</i>\n\n` +
      `📌 <b>Votre solde :</b>\n` +
      `• BNB : {bnb_balance}\n` +
      `• USDT : {usdt_balance}\n\n` +
      `👇🏼 <b>Sélectionnez le montant à envoyer au pool :</b>`,
    custom_amount: "🗂 Montant personnalisé",
    error_getting_data:
      "❌ Erreur lors de l'obtention des données, veuillez réessayer.",
    choose_period_message:
      `🔄 Vous avez sélectionné le montant <b>{amount} USDT</b>. Sélectionnez la durée du transfert de pool :\n\n` +
      `<b>Rendement par durée :</b>\n` +
      `• <b>1 jour</b> - 0.4%\n` +
      `• <b>7 jours</b> - 4%\n` +
      `• <b>14 jours</b> - 9.5%\n` +
      `• <b>28 jours</b> - 24%\n\n` +
      `<i>Tous les fonds <b>(montant USDT + bonus)</b> sont automatiquement retournés après la période spécifiée à votre portefeuille</i>\n\n` +
      `👇 <b>Sélectionnez la durée du transfert de pool :</b>`,
    investment_details_base:
      `💰 <b>Confirmation du transfert vers le pool</b>\n\n` +
      `📊 <b>Détails de la transaction :</b>\n` +
      `▸ Montant : <b>{amount} USDT</b>\n` +
      `▸ Durée : <b>{period} jours</b>\n` +
      `▸ Statut : <b>Annulé</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Recherche de transaction annulée par l'utilisateur</b>",
    failed_update_message:
      "Échec de la mise à jour du message, envoi d'un nouveau : {error}",
    transaction_search_cancelled_log:
      "✅ Recherche de transaction annulée pour l'utilisateur {userId}",
    no_active_transaction_search:
      "❌ Aucune recherche de transaction active trouvée",
    error_cancelling_search:
      "❌ Erreur lors de l'annulation de la recherche : {error}",
    error_cancelling_search_user:
      "❌ Une erreur s'est produite lors de l'annulation de la recherche",
    activated_levels: "Niveaux activés",
    levels_activation_benefit:
      "Maintenant, vous gagnez un revenu de ces niveaux de votre équipe !",
    referral_made_transaction: "Votre filleul a effectué une transaction !",
    your_referral: "Votre filleul",
    congrats_referral_reward:
      "Félicitations ! Vous avez gagné une récompense de parrainage !",
    main_menu: "🏠 Menu principal",
    system_link: "🌐 Lien système",
    from_your_mentor: "👤 De votre Mentor",
    your_link: "🌐 Votre lien",
    visit_official_website:
      "Visitez le site officiel de la plateforme et apprenez tous les détails et règles de fonctionnement du service",
    link: "Lien",
    open_metamask: "🦊 Ouvrir MetaMask",
    open_in_browser: "💻 Ouvrir dans le navigateur PC",
    website_error: "❌ Erreur de chargement des informations du site",
    your_investment_portfolio: "Votre portefeuille de parts de pool actives",
    term: "Durée",
    profitability: "Rentabilité",
    time_left: "Temps restant",
    d: "j",
    h: "h",
    type: "Type",
    incoming_transaction: "Transaction entrante",
    refund: "Remboursement",
    processing: "En traitement",
    active: "Actif",
    archived: "Archivé",
    returned: "Retourné",
    total_statistics: "Statistiques totales",
    total_active_amount: "Montant actif total",
    page: "Page",
    of: "sur",
    portfolio_error: "⚠️ Erreur de chargement du portefeuille",
    congrats_on_profit: "Félicitations pour avoir reçu un profit !",
    investment_notification_sent:
      "Notification de retour sur investissement envoyée à l'utilisateur",
    investment_notification_error:
      "Erreur lors de l'envoi de la notification de retour sur investissement :",
    check_old_transactions: "🔍 Vérifier les anciennes transactions",
    data_not_found:
      "Données non trouvées. Veuillez actualiser votre portefeuille",
    last_page: "C'est la dernière page",
    first_page: "C'est la première page",
    page_load_error: "Erreur de chargement de la page",
    edit_message_error:
      "Échec de la modification du message, envoi d'un nouveau :",
    user_not_found: "❌ Utilisateur non trouvé",
    affiliate_network_header: (username) =>
      `👥 <b>Votre réseau d'affiliation, ${username}</b>`,
    affiliate_network_description:
      "17 niveaux de votre équipe et revenus de chaque niveau de la rentabilité de vos filleuls",
    level_percentages:
      `<b>• Niveau 1</b> - 20%\n` +
      `<b>• Niveau 2</b> - 10%\n` +
      `<b>• Niveaux 3-7</b> - 5%\n` +
      `<b>• Niveaux 8-10</b> - 3%\n` +
      `<b>• Niveaux 11-17</b> - 1%`,
    level_activation_requirements:
      "Pour activer chaque niveau, votre part dans le pool doit correspondre à <b>numéro de niveau * 100 $</b>",
    all_levels_activation_requirement:
      "Pour activer tous les niveaux, votre part personnelle dans le pool = <b>1700 $</b>",
    your_personal_share: (amount) =>
      `💰 <b>Votre part personnelle dans le pool :</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Niveaux activés :</b> ${count}/17`,
    level_statistics: "📊 <b>Statistiques de niveau :</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Niveau ${level} : ${count} personnes | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Niveau ${level} : Aucun filleul`,
    no_level_data: "<i>Aucune donnée de niveau pour le moment</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Total :</b> ${referrals} réf. | ${investments} USDT`,
    my_partners: "📋 Mes partenaires",
    my_team: "🧏‍♂️ Mon équipe",
    ref_link: "🔗 Lien de réf.",
    enable_levels: "🔓 Activer les niveaux",
    search: "🔍 Rechercher",
    statistics: "📈 Statistiques",
    affiliate_error: (error) => `❌ Erreur d'affiliation : ${error}`,
    affiliate_load_error: "⚠️ Erreur de chargement du programme d'affiliation",
    referral_access_subscription:
      "❌ <b>Accès au programme de parrainage par abonnement</b>\n\n✅ Pour configurer votre lien de parrainage et activer votre bot, vous devez acheter un abonnement de 10 $/mois.",
    referral_invite_text:
      "👋🏻 Salut ! Si vous voulez gagner un revenu passif depuis le TOP-1 des exchanges, rejoignez en utilisant mon lien 👆",
    your_referral_link: "Votre lien de parrainage",
    referral_invite_description:
      "💡 Invitez des amis et gagnez un revenu sur leurs parts actives dans le pool !",
    share_link: "📢 Partager le lien",
    subscription_text:
      "Pour acheter un abonnement, contactez le bot crypto :\n\n🤖 @YourCryptoBot\n\nAprès avoir payé l'abonnement, vous aurez accès au programme de parrainage et à d'autres fonctionnalités exclusives.",
    go_to_cryptobot: "📲 Aller au bot crypto",
    check_subscription_status: "🔄 Vérifier le statut de l'abonnement",
    subscription_active:
      "✅ Votre abonnement est actif ! Maintenant vous pouvez inviter des filleuls.",
    subscription_inactive:
      "❌ L'abonnement n'est pas encore actif. Veuillez compléter le paiement ou contacter le support.",
    subscription_check_error:
      "❌ Erreur lors de la vérification du statut de l'abonnement",
    link_copied: "📋 Lien de parrainage copié :",
    share_with_friends: "Maintenant vous pouvez le partager avec des amis !",
    link_settings_title: "⚙️ Paramètres de votre lien",
    link_settings_description: "Ces liens seront visibles par vos filleuls :",
    choose_link_to_change: "💡 Choisissez le lien à modifier :",
    change_video: "🎥 Changer la vidéo",
    cancel_input: "❌ Annuler la saisie",
    link_access_subscription: "❌ Accès aux paramètres de lien par abonnement",
    subscription_required:
      "✅ Pour configurer le lien de parrainage et activer votre bot, vous devez acheter un abonnement de 10 $/mois.",
    payment_pending_description:
      "Votre abonnement attend la confirmation du paiement. Si vous avez déjà payé, cliquez sur le bouton ci-dessous pour vérifier le statut.",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success:
      "✅ Tous les liens réinitialisés aux paramètres système",
    reset_links_error: "❌ Erreur lors de la réinitialisation des liens",
    subscription_payment_title:
      "💳 Paiement d'abonnement pour les paramètres de lien",
    subscription_price: "Prix : <b>10 USDT</b>",
    subscription_duration: "Durée : <b>1 mois</b>",
    pay_via_cryptobot: "🔗 Payer via bot crypto",
    cancel: "❌ Annuler",
    subscription_payment_error:
      "⚠️ Une erreur s'est produite lors de la création de l'abonnement. Veuillez réessayer plus tard.",
    subscription_description: "Abonnement aux paramètres de lien (1 mois)",
    no_data_to_display: "❌ Aucune donnée à afficher",
    nothing_found_for_query: "Rien trouvé pour la requête",
    no_referrals_on_levels:
      "Vous n'avez pas encore de filleuls sur les niveaux",
    found_referrals: "Filleuls trouvés",
    subscription_activated: "✅ Abonnement activé avec succès !",
    subscription_activated_description:
      "🎉 Maintenant vous avez accès à tous les paramètres de lien et aux fonctionnalités du système de partenariat.",
    payment_processing:
      "⌛ Traitement du paiement. Veuillez réessayer plus tard.",
    invoice_expired: "❌ La facture a expiré.",
    payment_not_found: "❌ Paiement non trouvé ou annulé.",
    payment_check_error: "⚠️ Erreur lors de la vérification du paiement.",
    payment_check_error_description:
      "Veuillez réessayer plus tard ou contacter le support.",
    new_payment: "💳 Nouveau paiement",
    enter_presentation_link: "📊 Entrez le lien de présentation :",
    enter_video_link: "🎥 Entrez le lien des instructions vidéo :",
    enter_official_link: "🌐 Entrez le lien du site officiel :",
    referral_stats: "📊 Statistiques de niveau",
    level: "Niveau",
    referrals_count: "👥 Filleuls",
    total_invested: (amount) => `💰 Envoyé au pool : ${amount} USDT\n\n`,
    search_referrals_prompt: "🔍 Entrez un nom d'utilisateur à rechercher :",
    no_referrals: "👥 Vous n'avez pas encore de filleuls",
    level_not_found: "❌ Niveau non trouvé",
    your_referrals: "👥 Vos filleuls",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Page ${current} sur ${total}`,
    no_referrals_on_level: "Aucun filleul sur ce niveau pour le moment",
    your_personal_partners: "Vos partenaires personnels",
    id: "ID",
    total_personal_partners: "📊 Total des partenaires personnels",
    no_personal_partners_yet:
      "Vous n'avez pas encore de partenaires personnels",
    invite_friends_tip:
      "💡 Invitez des amis en utilisant votre lien de parrainage pour qu'ils deviennent vos partenaires personnels !",
    personal_partners_error:
      "❌ Erreur de chargement des partenaires personnels",
    contact_mentor: "🙆‍♂️ Contacter le mentor",
    community_chat: "💬 Chat communautaire",
    not_subscribed:
      "❌ Vous n'êtes pas abonné à notre chat. Veuillez vous abonner et cliquer à nouveau sur \"Vérifier l'abonnement\".",
    subscribe_to_chat: "📢 S'abonner au chat",
    check_subscription_btn: "🔄 Vérifier l'abonnement",
    subscription_check_error: "Erreur de vérification d'abonnement",
    transaction: "Transaction",
    wallet: "Portefeuille",
    search_results: '🔍 Résultats de la recherche pour "{query}" :',
    levels: "📊 Niveaux : {levels}",
    sent_to_pool: "💰 Envoyé au pool : {amount} USDT",
    referrals_title: `👥 <b>Vos filleuls</b> | <b>Niveau {level}</b>`,
    invested_currency: "USDT",
    back_btn: "◀️ Retour",
    // =========================
    // Erreurs et notifications
    // =========================
    error: "❌ Une erreur s'est produite. Veuillez réessayer.",
    invalid_address:
      "❌ Adresse de portefeuille invalide. Veuillez vérifier et réessayer.",
    access_denied: "⛔ Accès refusé",
    loading: "⏳ Chargement...",
    updated: "Mis à jour",
    enabled: "✅ Activé",
    disabled: "❌ Désactivé",
    turn_on: "🔔 Activer",
    turn_off: "🔕 Désactiver",
    total_invested_level: "Part personnelle dans le pool",
  },
  id: {
     referral_reward_notification: "🎉 <b>Hadiah referral diterima!</b>\n\n💰 <b>Jumlah:</b> {amount} USDT\n\n💼 Dana sudah ada di saldo Anda dan tersedia untuk penarikan atau reinvestasi.",
    referral_reward_my_portfolio: "💼 Portofolio Saya",
    
    missed_referral_reward: "😡 <b>Hadiah referral terlewat!</b>\n\n💰 <b>Jumlah:</b> {amount} USDT\n📊 <b>Level:</b> {level}\n\n🔐 Aktifkan level {level} untuk menerima hadiah referral!",
    activate_levels_button: "💼 Aktifkan Level",
    
    // Monitoring dan pengecekan
    starting_periodic_check: "🔄 Memulai pengecekan transaksi referral berkala (setiap menit)...",
    periodic_check_started: "✅ Monitoring dompet pengguna dimulai",
    checking_recent_transactions: "⏰ Memeriksa transaksi semenit terakhir: sejak {time}",
    wallet_check_progress: "🔍 Memeriksa transaksi terbaru untuk dompet: {wallet}",
    fresh_transaction_found: "🕐 Transaksi terbaru ditemukan: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Untuk dompet {wallet} ditemukan {count} transaksi referral terbaru dalam semenit terakhir",
    
    // Hasil pengecekan
    force_check_started: "🔍 Pengecekan paksa transaksi referral TERBARU (semenit terakhir)...",
    no_wallets_for_check: "❌ Tidak ada dompet pengguna untuk diperiksa",
    wallets_check_summary: "📊 Memeriksa {count} dompet pengguna dari semenit terakhir",
    check_results: "📊 Hasil pengecekan semenit terakhir:",
    wallets_checked: "• Dompet diperiksa: {count}",
    fresh_transactions_found: "• Transaksi terbaru ditemukan: {count}",
    successfully_processed: "• Berhasil diproses: {count}",
    errors_count: "• Kesalahan: {count}",
    
    // Pemrosesan transaksi
    processing_fresh_transaction: "🔍 Memproses TX referral TERBARU:\n- Hash: {hash}\n- Penerima: {recipient}\n- Jumlah: {amount} USDT\n- Waktu: {time}",
    transaction_already_processed: "⏭️ Transaksi {hash} sudah diproses",
    user_not_found_by_wallet: "❌ Pengguna dengan dompet {wallet} tidak ditemukan",
    user_found: "✅ Pengguna ditemukan: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ Hadiah referral TERBARU diproses untuk pengguna {telegramId}",
    
    // Kesalahan
    transaction_processing_error: "❌ Kesalahan pemrosesan transaksi referral TERBARU",
    wallet_check_error: "❌ Kesalahan pengecekan dompet {wallet}",
    periodic_check_error: "❌ Kesalahan pengecekan berkala: {error}",
    force_check_error: "❌ Kesalahan pengecekan paksa transaksi terbaru: {error}",
    
    // Notifikasi admin
    bot_not_available: "❌ Bot tidak tersedia untuk mengirim notifikasi",
    user_blocked_bot: "🚫 Pengguna {telegramId} memblokir bot",
    user_marked_blocked: "✅ Pengguna {telegramId} ditandai sebagai diblokir",
    
    // Proses hadiah
    referral_reward_start: "🔔 MULAI processReferralRewardEnhanced:\n- Dompet: {wallet}\n- Jumlah: {amount} USDT\n- TX Hash: {hash}\n- Dari: {from}\n- Stempel Waktu: {time}",
    transaction_recorded: "✅ Transaksi dicatat dalam database",
    balance_updated: "✅ Saldo pengguna diperbarui +{amount} USDT",
    referral_reward_db_success: "✅ Hadiah referral berhasil diproses dalam database",
    sending_user_notification: "🔔 Mengirim notifikasi ke pengguna {telegramId}",
    user_no_telegram_id: "⚠️ Pengguna {userId} tidak memiliki telegram_id",
    database_overflow_error: "⚠️ Kesalahan overflow field numerik, mencoba dengan presisi lebih rendah",
    retry_failed: "❌ Percobaan ulang juga gagal",
    referral_reward_end: "✅ SELESAI processReferralRewardEnhanced untuk dompet {wallet}",
    
    // Hadiah sederhana
    simple_reward_processing: "🔔 Memproses hadiah referral: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Hadiah referral dicatat untuk pengguna {telegramId}",
    
    // Notifikasi
    notification_sent: "✅ Notifikasi hadiah referral dikirim ke pengguna {telegramId}",
    notification_error: "❌ Kesalahan mengirim notifikasi ke pengguna {telegramId}: {error}",
    
    // Pembaruan dompet
    wallets_updater_started: "✅ Monitoring dompet pengguna dimulai",
    
    // Transaksi yatim
    orphan_transaction_processing: "🔍 Memproses transaksi referral yatim untuk pengguna {userId}",
    missed_reward_notification_sent: "⚠️ Notifikasi hadiah terlewat dikirim untuk level {level}",
    orphan_transaction_error: "❌ Kesalahan pemrosesan transaksi yatim",
    
    // Umum
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Perpustakaan Kurator",
    no_curators_data: "Tidak ada data kurator tersedia untuk level {level}",
    curators_library_explanation: "Di sini Anda dapat melihat sponsor mitra Anda dan tim mereka",
    statistics: "Statistik",
    total_curators: "Total kurator",
    total_referrals: "Total mitra",
    average_per_curator: "Rata-rata per kurator",
    sponsor: "Sponsor",
    partners: "Mitra",
    more: "lagi",
	incomplete_registration_title: "Anda belum menyelesaikan pendaftaran di bot!",
    incomplete_registration_message: "Selesaikan pendaftaran untuk mulai menghasilkan keuntungan dan tidak melewatkan peluang.",
    complete_registration_to_earn: "Selesaikan pendaftaran dan mulai menghasilkan!",
    complete_registration_to_earn_start: "🚀 <b>Cukup kirim perintah</b> <code>/start</code> <b>untuk melanjutkan pendaftaran!</b>",
    invalid_tx_hash_format:
      "❌ <b>Format TX Hash tidak valid</b>\n\nSilakan masukkan hash transaksi yang valid (64 karakter, dimulai dengan 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Memeriksa transaksi di blockchain...</b>\n\nMendapatkan informasi tentang jumlah dan tanggal transaksi...",
    transaction_check_error:
      "❌ <b>Kesalahan pemeriksaan transaksi</b>\n\n{error}",
    blockchain_check_error:
      "❌ Terjadi kesalahan saat memeriksa transaksi di blockchain",
    transaction_found_details:
      "✅ <b>Transaksi ditemukan!</b>\n\n💰 <b>Jumlah:</b> {amount} USDT\n📅 <b>Tanggal:</b> {date}\n\n⏰ <b>Pilih periode pengiriman ke pool:</b>",
    invalid_period_range:
      "❌ <b>Periode tidak valid</b>\n\nSilakan masukkan angka dari 1 hingga 28 hari",
    period_processing_error: "❌ Terjadi kesalahan saat memproses periode",

    // Периоды
    period_1_day: "1 hari",
    period_7_days: "7 hari",
    period_14_days: "14 hari",
    period_28_days: "28 hari",
    custom_period: "📅 Periode kustom",

    // Админка
    bot_disabled_success: "🔴 Bot dinonaktifkan untuk pengguna",
    bot_disable_error: "❌ Kesalahan: {error}",
    admin_panel: "🔧 Panel admin",
    invalid_prize_amount: "Jumlah hadiah tidak valid",
    prize_set_success: "✅ Hadiah ditetapkan: {amount} USDT",
    prize_sent_success: "✅ TX hash disimpan. Hadiah dikirim ke kontrak.",
    prize_send_error: "❌ Kesalahan: {error}",
    winner_prize_notification:
      "🎯 Kemenangan Anda {amount} USDT telah dikirim ke kontrak!\n\n⏰ Anda akan menerima profit dalam 28 hari.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Domain tidak diizinkan</b>\n\n{domain_not_allowed_description}\n\n<b>Domain Anda:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Tautan afiliasi Anda telah berhasil ditautkan!\n\n🏁 Anda sudah di akhir! Untuk kemudahan komunikasi, kesempatan bertanya, dan berkenalan dengan tim, Anda harus bergabung dengan chat kami.\n\n1. Kunjungi chat ini: @BitnestRus\n\n2. Klik tombol 'Bergabung dengan Grup'\n\n3. Pastikan untuk menyalakan notifikasi\n\n4. Klik tombol di bawah 'Saya sudah bergabung'\n\n👇🏼 Atau gunakan tombol di bawah untuk langsung masuk ke chat kami",
    chat_link: "📢  Bergabung dengan Grup",
    disclaimer:
      "✅ Pengguna yang terhormat, sistem ini dirancang untuk melatih dan menginformasikan pengguna baru yang belum pernah berinteraksi dengan sistem Bitnest sebelumnya\n\n🤔 Tolong beri tahu kami, apakah Anda pernah terdaftar sebelumnya?\n\n1. Klik (TIDAK) - jika Anda belum memiliki akun dalam sistem dan ingin menyelesaikan pelatihan serta menjadi bagian dari tim kami\n\n2. Klik (YA) - jika Anda sudah memiliki akun dalam sistem dan telah mengirim USDT ke sirkulasi\n\nLayanan bot ini hanya disediakan untuk pengguna baru yang belum pernah berada dalam sistem sebelumnya dan mengklik tombol ✅ TIDAK",
    disclaimer_no: "✅ TIDAK, SAYA PESERTA BARU",
    disclaimer_yes: "⛔️ YA, SAYA ANGGOTA TIM LAIN",
    block_confirmation_title: "Konfirmasi",
    block_confirmation_message: "Jika Anda anggota tim lain, hubungi kurator Anda.\n\nApakah Anda yakin ingin memblokir akun Anda?",
    back_button: "◀️ Kembali",
    confirm_block_button: "✅ Ya, blokir",
    account_blocked_message: "🚫 <b>Akun diblokir</b>\n\nAkun Anda telah diblokir atas permintaan Anda.\n\nJika ini terjadi karena kesalahan, hubungi dukungan @BitnestRusSupport.",
    account_blocked:
      "❌ Sayangnya, layanan bot ini hanya disediakan untuk pengguna baru. Akun Anda tidak aktif. Untuk pertanyaan apa pun @BitnestRusSupport",
    please_try_again: "Silakan coba lagi",
    add_custom_transaction: "➕ Tambahkan transaksi",
    your_investment_portfolio_add: "➕ Add Tambahkan transaksi",
    adding_custom_transaction: "🔗 <b>Menambahkan transaksi Anda</b>",
    enter_tx_hash_prompt: "Silakan masukkan <b>TX Hash</b> transaksi Anda:",
    transaction_requirements:
      "• Harus dieksekusi di jaringan BSC (Binance Smart Chain)\n• Harus transaksi USDT",
    tx_hash_example:
      `📝 <b>Contoh:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nLihat transaksi Anda ke pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Pergi ke</a>`,
    enter_amount_prompt: "💰 <b>Masukkan jumlah transaksi dalam USDT:</b>",
    amount_example: "Contoh: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Pilih periode investasi:</b>",
    verifying_transaction: "🔍 <b>Memverifikasi transaksi di blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nJumlah: {amount} USDT\nPeriode: {period} hari",
    please_wait: "Harap tunggu...",
    transaction_already_exists: "Transaksi ini sudah ditambahkan ke sistem",
    transaction_not_found: "Transaksi tidak ditemukan",
    transaction_not_confirmed: "Transaksi tidak dikonfirmasi atau gagal",
    transaction_wrong_sender:
      "Transaksi dikirim dari dompet yang salah. Dompet Anda: {userWallet}, pengirim dalam transaksi: {txFrom}",
    transaction_wrong_receiver:
      "Transaksi dikirim ke dompet sistem yang salah. Penerima harus: {systemWallet}",
    transaction_amount_mismatch:
      "Jumlah tidak cocok. Di blockchain: {blockchainAmount} USDT, Anda memasukkan: {enteredAmount} USDT",
    transaction_not_usdt: "Ini bukan transaksi USDT",
    transaction_decode_error: "Gagal mendekode data transaksi USDT",
    blockchain_error: "Kesalahan memeriksa di blockchain: {error}",
    transaction_added_success: "✅ <b>Transaksi berhasil ditambahkan!</b>",
    investment_details: "📊 <b>Detail investasi:</b>",
    investment_amount: "• Jumlah: {amount} USDT",
    investment_period: "• Periode: {period} hari",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Profitabilitas: {profit}%",
    investment_added_to_portfolio:
      "💼 Investasi ditambahkan ke portofolio Anda.",
    transaction_add_error: "❌ <b>Kesalahan menambahkan transaksi</b>",
    error_reason: "Alasan: {error}",
    language_changed_success:
      "✅ Bahasa telah berhasil diubah menjadi Indonesia!",
    no_transactions_found: "Tidak ada transaksi ditemukan",
    target_wallet: "Dompet target",
    checking_old_transactions: "Memeriksa transaksi lama",
    this_may_take_seconds: "Ini mungkin memerlukan beberapa detik...",
    wallet_not_found: "Dompet tidak ditemukan",
    check_completed: "Pemeriksaan selesai",
    found_transactions: "Transaksi ditemukan",
    already_added: "sudah ditambahkan",
    added: "ditambahkan",
    summary: "Ringkasan",
    new_added: "Baru ditambahkan",
    already_exist: "Sudah ada",
    total_checked: "Total diperiksa",
    check_transactions_error: "Kesalahan memeriksa transaksi",
    welcome:
      '👋 <b>Selamat datang di BitNest!</b>\n🚀 Bot investasi terdesentralisasi.\nKlik "Selanjutnya"',
    welcome_back:
      "👋 Anda telah menyelesaikan pelatihan! Selamat datang kembali!",
    education_title: "🎓 Materi Edukasi\nPilih topik:",
    finish: "✅ Pelatihan selesai!",

    // =========================
    // Dompet
    // =========================
    wallet_installation:
      "📲 <b>Pemasangan Dompet</b>\nUnduh dan pasang salah satu dompet yang didukung.",
    ask_wallet_address:
      "👍🏼 Pilihan yang bagus! Mari mulai pelatihan:\n\n💵 Langkah pertama dalam dunia Web3 dan DeFi adalah memiliki dompet kripto pribadi Anda sendiri, dan kami akan menyiapkannya sekarang:\n\n1. Kunjungi situs resmi <b>MetaMask</b>\n2. Pasang aplikasi di ponsel Anda\n3. Buat dompet dan pastikan untuk menuliskan seed phrase Anda dengan aman\n4. Atur jaringan BSC - Binance Smart Chain (BEP20)\n5. Salin alamat publik dompet Anda 0x.............\n6. Kirim alamat ini sebagai pesan di kolom di bawah 👇🏼",
    enter_wallet: `🥳 Selamat! Dompet Anda telah berhasil terhubung!\n\n📝 Pada langkah ini, Anda perlu menyelesaikan pendaftaran di situs web resmi Bitnest (lihat video)\n\n1. Salin tautan ini \n\n<code>{referral_link_bitnest}</code>\n\n dan buka di browser internal dompet Anda\n2. Klik "Hubungkan" di pojok kanan atas\n3. Konfirmasi otorisasi di situs web pada jendela pop-up dompet Anda\n<i><b>*Jika situs tidak terbuka, aktifkan program 3 huruf (yang memungkinkan Anda mengakses situs)</b></i>\n\n👇🏼 Atau gunakan tombol di bawah untuk membuka dompet secara otomatis dan menavigasi ke halaman yang diperlukan`,
    wallet_not_set: "❌ Dompet belum diatur",
    your_wallet: "💼 Dompet kripto Anda\n\n📌 Alamat (BEP20)",
    install_wallet:
      "👍🏼 Pilihan yang bagus! Mari mulai pelatihan:\n\n💵 Langkah pertama dalam dunia Web3 dan DeFi adalah memiliki dompet kripto pribadi Anda sendiri, dan kami akan menyiapkannya sekarang:\n\n1. Kunjungi situs resmi <b>MetaMask</b>\n2. Pasang aplikasi di ponsel Anda\n3. Buat dompet dan pastikan untuk menuliskan seed phrase Anda dengan aman\n4. Atur jaringan BSC - Binance Smart Chain (BEP20)\n5. Salin alamat publik dompet Anda 0x.............\n6. Kirim alamat ini sebagai pesan di kolom di bawah 👇🏼",
    loading_balance: "⏳ Mendapatkan informasi saldo...",
    refresh: "🔄 Segarkan",
    bnb_balance: "Saldo:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Saldo Token",
    wallet_not_configured: "❌ Dompet belum dikonfigurasi",
    send_usdt: "💸 Kirim USDT",
    error_amount_not_selected: "❌ Kesalahan: jumlah tidak dipilih",
    error_wallet_not_configured: "❌ Kesalahan: dompet belum dikonfigurasi",
    back_to_amount_selection: "◀️ Kembali ke pemilihan jumlah",
    configure_wallet: "⚙️ Konfigurasi dompet",
    investment_confirmation:
      `💰 <b>Konfirmasi Transfer Pool</b>\n\n` +
      `📊 <b>Detail Transaksi:</b>\n` +
      `▸ Jumlah: <b>{amount} USDT</b>\n` +
      `▸ Jangka Waktu: <b>{period} hari</b>\n` +
      `▸ Hasil: <b>{profitPercent}%</b>\n` +
      `▸ Perkiraan Keuntungan: <b>{expectedProfit} USDT</b>\n` +
      `▸ Total Pengembalian: <b>{totalReturn} USDT</b>\n` +
      `▸ Tanggal Pengembalian: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Instruksi Transfer:</b>\n\n` +
      `1. Buka aplikasi MetaMask\n\n` +
      `2. Kunjungi situs web resmi Bitnest\n\n` +
      `3. Klik <b>"Hubungkan"</b> di pojok kanan atas - <i>(jika Anda melihat ikon dompet, lanjutkan ke langkah berikutnya)</i>\n\n` +
      `4. Klik pada ikon dompet dan pergi ke bagian Loop\n\n` +
      `5. Masukkan jumlah transfer\n\n` +
      `6. Pilih jangka waktu\n\n` +
      `7. Klik tombol "Sirkulasi"\n\n` +
      `8. Konfirmasi transfer di situs web pada jendela pop-up dompet Anda\n\n` +
      `👇🏼 Atau gunakan tombol di bawah untuk secara otomatis pergi ke dompet Anda dan membuka halaman yang diperlukan`,
    send_metamask_mobile: "🦊 Kirim - MetaMask 📲",
    transaction_search_timer: `⚠️ Kami menunggu pengiriman Anda, petunjuk di atas\n\n<b>🔎 Setelah pengiriman, kami akan mulai mencari transaksi ...</b>\n⏰ <b>Waktu untuk pengiriman dan pencarian transaksi Anda:</b> 20:00 menit...\n\n`,
    cancel_search: "❌ Batalkan pencarian",

    // =========================
    // DeFi dan BitNest
    // =========================
    what_is_bitnest:
      "🏗 <b>Apa itu BitNest</b>\nOperasi transparan, kontrol penuh atas dana Anda.",
    defi_basics: "📊 Dasar-dasar DeFi.\nSelanjutnya — ikhtisar investasi pool.",
    liquidity_pool_text:
      "💎 Pool Likuiditas\n\n💵 Setor USDT ke dalam pool dan dapatkan bonus.\n\nPilih aksi:",
    my_investments_empty: "📊 Anda belum memiliki investasi.",
    investment_saved: "✅ Data disimpan",
    investment_return_received: (amount) =>
      `Pengembalian investasi Anda sebesar <b>${amount} $</b> telah diterima`,
    congrats_profit: "Selamat atas penerimaan keuntungan!",
    referral_reward_received: "Anda menerima hadiah referral!",
    back_to_main_menu: "🏠 Ke menu utama",
    your_referral_sent: "Referral Anda telah melakukan transfer!",
    user: "Pengguna",
    amount: "Jumlah",
    congrats_referral_earned: "Selamat! Anda mendapatkan hadiah referral!",
    balance_replenished: (amount) =>
      `Saldo Anda telah ditambah sebanyak ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Anda menerima hadiah referral ${amount}`,
    you_have_inactive_levels: "Anda memiliki level yang tidak aktif!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Jika Anda berinvestasi ${amount} USDT Anda dapat mengaktifkan level: ${levels}`,
    activate_levels_to_earn:
      "Aktifkan level untuk mendapatkan penghasilan dari referral!",
    new_levels_activated: (levels) => `Level baru diaktifkan: ${levels}`,
    now_earn_from_levels:
      "Sekarang Anda mendapatkan penghasilan dari level-level tim Anda ini!",
    invalid_tx_hash_contact_support:
      "❌ Hash transaksi tidak valid. Silakan hubungi dukungan.",
    congrats_liquidity_pool_success:
      "Selamat! Transfer pool likuiditas Anda telah berhasil diselesaikan!",
    transaction_details: "Detail transaksi",
    block: "Blok",
    period: "Periode",
    days: "hari",
    expected_profit: "Perkiraan Keuntungan",
    total_return: "Total Pengembalian",
    return_date: "Tanggal Pengembalian",
    error_updating_pool_status:
      "❌ Kesalahan memperbarui status transfer pool. Silakan hubungi dukungan.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transaksi tidak ditemukan setelah beberapa percobaan.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Kemungkinan alasan:\n` +
      `• Transaksi belum dikonfirmasi oleh jaringan\n` +
      `• TX Hash tidak valid\n` +
      `• Masalah jaringan BSC\n\n` +
      `Silakan periksa TX Hash dan coba lagi atau hubungi dukungan.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Transaksi dikirim ke alamat yang salah!\n\n` +
      `▸ Alamat yang diterima: ${actualTo}\n` +
      `▸ Alamat yang diharapkan: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Pastikan Anda mengirim USDT ke alamat pool yang benar.`,
    transaction_not_confirmed: (status) =>
      `❌ Transaksi tidak dikonfirmasi. Status: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Silakan periksa status transaksi di BscScan dan hubungi dukungan jika diperlukan.",
    error_checking_transaction:
      "❌ Kesalahan memeriksa transaksi. Coba lagi nanti atau hubungi dukungan.",
    timer_message_id_not_found: "❌ timer_message_id tidak ditemukan",
    transaction_search_timer_countdown: (timeString) =>
      `🔎 <b>Mencari transaksi …</b>\n⏰ <b>Waktu pemrosesan:</b> ${timeString} menit\n\n`,
    cancel_search: "❌ Batalkan pencarian",
    timer_error: "❌ Kesalahan timer: {error}",
    timer_stopped_message_not_found:
      "⏹️ Timer dihentikan: pesan tidak ditemukan atau tidak tersedia",
    timer_minor_error_continue: "⚠️ Kesalahan timer minor, melanjutkan...",
    transaction_timeout_message:
      "⏰ <b>Waktu pencarian transaksi habis</b>\n\n" +
      "❌ Tidak dapat menemukan konfirmasi transaksi dalam waktu yang ditentukan.\n\n" +
      "Kemungkinan alasan:\n" +
      "• Transaksi belum dikonfirmasi oleh jaringan\n" +
      "• TX Hash tidak valid\n" +
      "• Masalah jaringan BSC\n\n" +
      "Silakan periksa status transaksi di BscScan dan coba lagi.",
    try_again: "🔄 Coba lagi",
    transaction_timeout_log: "⏰ Timeout transaksi untuk pengguna {userId}",
    transaction_timeout_error:
      "❌ Kesalahan memproses timeout transaksi: {error}",
    transaction_not_found_try_again:
      "❌ Transaksi tidak ditemukan. Silakan coba lagi.",
    awaiting_transaction_check:
      "🔍 <b>Menunggu verifikasi transaksi...</b>\n\n" +
      "Bot akan memeriksa blockchain dalam 2-5 menit.\n" +
      "Anda akan menerima pemberitahuan tentang hasilnya.",
    bot_not_available: "Bot tidak tersedia untuk mengirim pemberitahuan",
    transaction_not_found_message:
      `❌ <b>Transaksi tidak ditemukan</b>\n\n` +
      `Kemungkinan alasan:\n` +
      `• Transaksi belum dikonfirmasi oleh jaringan\n` +
      `• Dikirim ke alamat pool yang salah\n` +
      `📞 Jika Anda mengirim USDT, hubungi dukungan\n` +
      `🔍 TX Hash: berikan hash transaksi`,
    transaction_not_found_notification_sent:
      "✅ Pemberitahuan transaksi tidak ditemukan dikirim ke pengguna {userId}",
    error_sending_notification: "Kesalahan mengirim pemberitahuan: {error}",
    processing_found_transaction:
      "🔄 Memproses transaksi yang ditemukan untuk pengguna {userId}",
    investment_in_process_not_found:
      "Investasi dengan status dalam_proses tidak ditemukan",
    failed_update_investment_status: "Gagal memperbarui status investasi",
    failed_delete_timer_message: "Gagal menghapus pesan timer: {error}",
    failed_delete_previous_message: "Gagal menghapus pesan sebelumnya: {error}",
    transaction_confirmed_message:
      `💰 <b>Konfirmasi Transfer Pool</b>\n\n` +
      `📊 <b>Detail Transaksi:</b>\n` +
      `▸ Jumlah: <b>{amount} USDT</b>\n` +
      `▸ Jangka Waktu: <b>{period} hari</b>\n` +
      `▸ Perkiraan Keuntungan: <b>{expectedProfit} USDT</b>\n` +
      `▸ Total Pengembalian: <b>{totalReturn} USDT</b>\n` +
      `▸ Tanggal Pengembalian: <b>{returnDate}</b>\n\n` +
      `✅ <b>Transaksi dikonfirmasi!</b>\n` +
      `📊 <b>Hash transaksi:</b> <code>{hash}</code>\n` +
      `💰 <b>Jumlah aktual:</b> {actualAmount} USDT\n` +
      `⏰ <b>Dikonfirmasi:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Mengaktifkan level pengguna berdasarkan jumlah investasi",
    user_prefix: "Pengguna_",
    notification_sent_to_referrer:
      "✅ Pemberitahuan dikirim ke perujuk {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Perujuk tidak ditemukan atau data yang diperlukan tidak ada",
    user_has_no_referrer: "⚠️ Pengguna tidak memiliki perujuk",
    error_sending_referral_notification:
      "Kesalahan mengirim pemberitahuan referral: {error}",
    error_sending_missed_rewards:
      "Kesalahan mengirim pemberitahuan hadiah yang terlewat: {error}",
    error_sending_missed_referrals:
      "Kesalahan mengirim pemberitahuan referral yang terlewat: {error}",
    level_activation_notifications_sent:
      "🎯 Pemberitahuan aktivasi level dikirim untuk level: {levels}",
    error_sending_level_activation:
      "Kesalahan mengirim pemberitahuan aktivasi level: {error}",
    transaction_processed_successfully:
      "✅ Transaksi diproses untuk pengguna {userId}",
    error_processing_transaction:
      "❌ Kesalahan memproses transaksi untuk pengguna {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Kesalahan pemrosesan transaksi</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Kesalahan: {error}\n\n` +
      `Silakan hubungi dukungan.`,
    error_sending_notification: "Kesalahan mengirim pemberitahuan: {error}",
    request_tx_hash_message:
      "📝 <b>Silakan masukkan hash transaksi (TX Hash):</b>\n\n" +
      "Setelah mengirim USDT, salin TX Hash dari dompet Anda dan kirim ke sini.",
    error_requesting_tx_hash: "Kesalahan meminta TX Hash: {error}",
    presentation_message:
      `📊 <b>Presentasi</b>\n\n` +
      `🎥 Presentasi video terperinci yang akan membantu Anda memahami manfaat platform dan alat ini\n\n`,
    presentation_error: "Kesalahan presentasi: {error}",
    presentation_load_error: "❌ Kesalahan memuat presentasi",
    user_not_determined: "❌ Tidak dapat menentukan pengguna",
    not_configured: "Belum dikonfigurasi",
    from_your_inviter: `\n👤 Dari pengundang Anda: {name}`,
    user: "Pengguna",
    system_video_instruction: `\n📋 Instruksi video sistem`,
    video_instructions_header: "🎥 <b>Instruksi video</b>",
    video_instructions_description:
      "📚 Kursus video terperinci di mana Anda akan mempelajari semua seluk-beluk bekerja dengan sistem dan belajar bagaimana berinteraksi dengan pool",
    video_link_available: `🔗 <b>Tautan video:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Tautan tidak tersedia</b>\n\n`,
    video_instruction_error: "Kesalahan instruksi video: {error}",
    video_instruction_load_error: "❌ Kesalahan memuat instruksi video",
    checking_old_transactions: "Memeriksa transaksi lama",
    this_may_take_seconds: "Ini mungkin memakan waktu beberapa detik...",
    wallet_not_found:
      "❌ Dompet tidak ditemukan. Silakan hubungkan di profil Anda.",
    check_completed: "Pemeriksaan selesai",
    added_to_portfolio: "Ditambahkan ke portofolio",
    transactions: "transaksi",
    my_portfolio: "💼 Portofolio saya",
    check_transactions_error:
      "⚠️ Kesalahan memeriksa transaksi. Silakan coba lagi nanti.",
    // =========================
    // Program Afiliasi
    // =========================
    affiliate_text:
      "👥 Jaringan afiliasi Anda,{pools.name}\n\n17 level tim Anda dan penghasilan dari setiap level\n<b>Level 1</b> - 20%\n<b>Level 2</b> - 10%\n<b>Level 3 - 7</b> - 5%\n<b>Level 8 - 10</b> - 3%\n<b>Level 11 - 17</b> - 1%\n\nDiperlukan bagian = <b>nomor level * 100$</b> untuk aktivasi\nSemua level aktif = <b>1700$</b>\n📊 Statistik:\n{pools.levels}\n💰 Total: 0 ref | 0.000 USDT",
    your_referral_sent: "Referral Anda telah melakukan transfer!",
    missed_referral_reward: (missedAmount, level) =>
      `Anda melewatkan hadiah referral ${missedAmount}$ dari level ${level}`,
    activate_level_to_earn:
      "Aktifkan level untuk mendapatkan penghasilan dari seluruh struktur!",
    check_subscription: "✅ Saya berlangganan",
    website_ref:
      '🎉 Selamat atas pendaftaran yang berhasil!\n\n🔗 Pada langkah ini, Anda perlu menambahkan tautan referral dari akun pribadi Bitnest Anda\n\n1. Kunjungi situs web resmi Bitnest\n2. Klik "<b>Hubungkan</b>" di pojok kanan atas\n3. Klik "<b>Undang Teman</b>"\n4. Klik "<b>Salin Tautan Saya</b>"\n5. Kirim di kolom di bawah 👇🏼',

    // =========================
    // Undian dan Acara
    // =========================
    raffle: "🎁 UNDIAN 🎁",
    daily_raffle: "🎉 Undian Harian!",
    current_prize: "🏆 Hadiah",
    participants: "👥 Peserta ",
    end_time: "⏰ Hasil pada",
    raffle_text: `✅ <b>Syarat Partisipasi:</b>\n• Minimal share aktif di pool: 10 USDT\n• Satu percobaan per orang\n\n`,
    raffle_requirement: "Diperlukan share aktif di pool untuk mengikuti undian",
    raffle_wallet_not_set: "⚠️ Silakan atur dompet Anda terlebih dahulu",
    raffle_already_registered: "✅ Anda berhasil terdaftar untuk babak ini!",
    successfully_registered: "Anda berhasil terdaftar untuk undian!",
    registration_failed: "Pendaftaran gagal",
    participate_button: "🎟 Ikut Serta",
    no_active_raffle: "Saat ini tidak ada undian yang aktif.",
    already_registered_in_raffle: "✅ Anda sudah terdaftar di undian saat ini!",
    new_raffle_started:
      "💰 Hadiah: {prize} USDT\n" +
      "⏰ Berakhir dalam: {hours} jam\n\n" +
      "✅ Share pool Anda: aktif (≥10$)\n\n",
    register_in_raffle: "🤖 Pendaftaran Undian",
    raffle_error: "❌ Kesalahan: {error}",

    // Dari bagian Dompet
    raffle_min_investment_required:
      "Diperlukan share aktif di pool minimal 10$ untuk mengikuti undian\n\n" +
      "Kirim USDT ke pool untuk menjadi eligible berpartisipasi.",
    raffle_registration_success:
      "Anda berhasil terdaftar!\n\nAnda sekarang berpartisipasi dalam undian!",
    eligible_to_participate: "💪 Anda eligible untuk mendaftar undian",
    raffle_registration_error: "❌ Kesalahan Pendaftaran: {error}",

    // Dari bagian Menu dan Navigasi (untuk pengecekan pendaftaran)
    not_registered_yet:
      "❌ Anda belum terdaftar. Klik tombol dompet Anda untuk mendaftar.",
    register_button: "📝 Daftar",
    registration_check_error: "❌ Kesalahan memeriksa pendaftaran",
    registering_wallet: "🔄 Mendaftarkan dompet Anda...",
    registration_success: "✅ Anda berhasil terdaftar untuk babak ini!",
    registration_error: "❌ Kesalahan Pendaftaran",
    try_later_or_contact_admin:
      "Silakan coba lagi nanti atau hubungi administrator.",
    registration_process_error: "❌ Kesalahan selama proses pendaftaran",
    new_referral_notification: (username) =>
      `👏🏼 Anda memiliki referral baru @${username}`,
    friend: "teman",
    welcome_error: "👋 Selamat datang! Terjadi kesalahan saat memuat menu.",
    try_again: "🔄 Coba lagi",
    ser_not_found: "❌ Pengguna tidak ditemukan",
    link_subscription_pending:
      "⌛ <b>Pembayaran tertunda</b>\n\n" +
      "Langganan Anda menunggu konfirmasi pembayaran. " +
      "Jika Anda sudah membayar, klik tombol di bawah untuk memeriksa status.",
    check_payment: "🔄 Periksa pembayaran",
    create_new_payment: "💳 Buat pembayaran baru",
    link_subscription_required:
      "❌ <b>Pengaturan tautan memerlukan langganan</b>\n\n" +
      "✅ Untuk mengonfigurasi tautan referral dan mengaktifkan bot Anda, Anda perlu membeli langganan seharga $10/bulan.\n\n",
    buy_subscription: "💳 Beli langganan ($10/bulan)",
    link_settings_error: "❌ Kesalahan memuat pengaturan tautan",
    setup_wallet_first: "❌ Pertama-tama atur dompet Anda di pengaturan",
    custom_amount_message:
      "💰 <b>Masukkan jumlah Anda untuk dikirim ke pool </b>\n\n" +
      "Jumlah minimum: <b>1 USDT</b>\n" +
      "Jumlah maksimum: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Kirim angka - jumlah dalam USDT di kolom di bawah</i>",
    language_settings:
      "🌐 <b>Pilih bahasa:</b>\n\nBahasa saat ini: Bahasa Indonesia",
    select_language: "🌐 <b>Pilih bahasa:</b>",
    current_language: "Bahasa saat ini: {language}",
    russian: "🇷🇺 Rusia",
    english: "🇺🇸 Inggris",
    french: "🇫🇷 Francés",
    indonesia: "🇮🇩 Indonesia",
    espaniol: "🇪🇸 Español",
    italy: "🇮🇹 Italy",
    german: "🇩🇪 German",
    georgia: "🇬🇪 Georgia",
    greece: "🇬🇷 Yunani",
    swahilli: "🇰🇪 Kenya",
    turkish: "🇹🇷 Turki",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Kembali ke pengaturan",
    contact_mentor: "👨‍💼 <b>Hubungi mentor Anda</b>",
    your_mentor: "Mentor Anda: {mentor}",
    write_to_mentor: "✉️ Tulis ke mentor",
    mentor_not_found: "❌ <b>Mentor tidak ditemukan</b>",
    mentor_not_found_description:
      "Anda tidak memiliki mentor yang ditugaskan. Silakan hubungi dukungan.",
    support_service: "⚠️ Layanan dukungan",
    contact_support: "✉️ Hubungi dukungan",
    language_changed_ru: "✅ Bahasa diubah ke Russia",
    language_changed_en: "✅ Bahasa diubah ke Inggris",
    language_changed_fr: "✅ Bahasa diubah ke Perancis",
    language_changed_id: "✅ Bahasa diubah ke Indonesia",
    language_changed_es: "✅ Bahasa diubah ke Español",
    language_change_error: "❌ Kesalahan mengubah bahasa",
    level_activation_title: "Aktivasi level program afiliasi",
    your_pool_share: "Bagian pool Anda",
    new_activated_levels: "Level baru yang diaktifkan",
    activation_status: "Status aktivasi",
    how_to_activate: "Cara mengaktifkan",
    levels_activate_automatically:
      "Level diaktifkan secara otomatis ketika jumlah investasi yang diperlukan tercapai ($100 per level)",
    to_activate_level: "Untuk mengaktifkan level",
    needs_more: "perlu lebih",
    refresh_status: "🔄 Segarkan status",
    levels_check_error: "❌ Kesalahan memeriksa level",
    // =========================
    // Menu dan Navigasi
    // =========================
    menu_title: `🎉 Selamat datang, <b>{username}</b>\n\n🚀 <b>BitnestRus Bot - Asisten dan alat tim Anda</b>\n✨ <b>Fitur Bot:</b>\n• 🎁 Undian hadiah tunai\n• 💰 Statistik keuangan dompet\n• 🌊 Instruksi pool likuiditas\n• 👥 Program afiliasi multi-level\n• 📊 Analitik dan pemberitahuan\n\n👇 Pilih bagian menu:\n`,
    back: "◀️ Kembali",
    next: "➡️ Selanjutnya",
    nextreg: " ✍🏼 Saya menyelesaikan pendaftaran",
    my_wallet: "💰 Dompet saya",
    liquidity_pool: "🌊 Pool Likuiditas",
    affiliate: "👥 Afiliasi",
    settings: "⚙️ Pengaturan",
    admin: "🔧 Panel Admin",
    settings_title: "⚙️ Pengaturan\n\nKonfigurasi tautan Anda\n\nPilih aksi:",
    start_education: "🎓 Mulai edukasi",
    download_metamask: "🦊 Unduh - MetaMask",
    register_metamask: "🦊 Daftar - MetaMask",
    register_metamask_mobile: "🦊 Daftar - MetaMask",
    my_portfolio: "💼 Portofolio saya",
    presentation: "🎥 Presentasi",
    video_instructions: "📚 Instruksi video",
    official_website: "🔗 Situs web resmi",
    oficial_site: "✅ Situs web resmi",
    invest_now_message:
      `💰 <b>Transfer USDT ke pool likuiditas</b>\n\n` +
      `<b>Hasil berdasarkan jangka waktu:</b>\n` +
      `• <b>1 hari</b> - 0.4%\n` +
      `• <b>7 hari</b> - 4%\n` +
      `• <b>14 hari</b> - 9.5%\n` +
      `• <b>28 hari</b> - 24%\n\n` +
      `<i>Semua dana <b>(jumlah USDT + bonus)</b> secara otomatis dikembalikan setelah periode yang ditentukan ke dompet Anda</i>\n\n` +
      `📌 <b>Saldo Anda:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Pilih jumlah untuk dikirim ke pool:</b>`,
    custom_amount: "🗂 Jumlah kustom",
    error_getting_data: "❌ Kesalahan mendapatkan data, silakan coba lagi.",
    choose_period_message:
      `🔄 Anda memilih jumlah <b>{amount} USDT</b>. Pilih jangka waktu untuk transfer pool:\n\n` +
      `<b>Hasil berdasarkan jangka waktu:</b>\n` +
      `• <b>1 hari</b> - 0.4%\n` +
      `• <b>7 hari</b> - 4%\n` +
      `• <b>14 hari</b> - 9.5%\n` +
      `• <b>28 hari</b> - 24%\n\n` +
      `<i>Semua dana <b>(jumlah USDT + bonus)</b> secara otomatis dikembalikan setelah periode yang ditentukan ke dompet Anda</i>\n\n` +
      `👇 <b>Pilih jangka waktu untuk transfer pool:</b>`,
    back_to_amount_selection: "◀️ Kembali ke pemilihan jumlah",
    failed_delete_timer_message: "Gagal menghapus pesan timer: {error}",
    investment_details_base:
      `💰 <b>Konfirmasi Transfer Pool</b>\n\n` +
      `📊 <b>Detail Transaksi:</b>\n` +
      `▸ Jumlah: <b>{amount} USDT</b>\n` +
      `▸ Jangka Waktu: <b>{period} hari</b>\n` +
      `▸ Status: <b>Dibatalkan</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Pencarian transaksi dibatalkan oleh pengguna</b>",
    failed_update_message:
      "Gagal memperbarui pesan, mengirim yang baru: {error}",
    transaction_search_cancelled_log:
      "✅ Pencarian transaksi dibatalkan untuk pengguna {userId}",
    no_active_transaction_search:
      "❌ Tidak ada pencarian transaksi aktif yang ditemukan",
    error_cancelling_search: "❌ Kesalahan membatalkan pencarian: {error}",
    error_cancelling_search_user:
      "❌ Terjadi kesalahan saat membatalkan pencarian",
    new_levels_activated: "Level baru diaktifkan!",
    activated_levels: "Level yang diaktifkan",
    levels_activation_benefit:
      "Sekarang Anda mendapatkan penghasilan dari level-level tim Anda ini!",
    referral_made_transaction: "Referral Anda melakukan transaksi!",
    your_referral: "Referral Anda",
    congrats_referral_reward: "Selamat! Anda mendapatkan hadiah referral!",
    main_menu: "🏠 Menu utama",
    system_link: "🌐 Tautan sistem",
    from_your_mentor: "👤 Dari Mentor Anda",
    user: "Pengguna",
    your_link: "🌐 Tautan Anda",
    visit_official_website:
      "Kunjungi situs web platform resmi dan pelajari semua detail dan aturan bekerja dengan layanan",
    link: "Tautan",
    open_metamask: "🦊 Buka MetaMask",
    open_in_browser: "💻 Buka di browser PC",
    website_error: "❌ Kesalahan memuat informasi situs web",
    your_investment_portfolio: "Portofolio bagian pool aktif Anda",
    transaction: "Transaksi",
    amount: "Jumlah",
    term: "Jangka Waktu",
    days: "hari",
    profitability: "Profitabilitas",
    time_left: "Waktu tersisa",
    d: "h",
    h: "j",
    expected_profit: "Perkiraan Keuntungan",
    type: "Jenis",
    incoming_transaction: "Transaksi masuk",
    refund: "Pengembalian Dana",
    status: "Status",
    processing: "Sedang diproses",
    active: "Aktif",
    archived: "Diarsipkan",
    returned: "Dikembalikan",
    total_statistics: "Statistik total",
    total_active_amount: "Jumlah aktif total",
    page: "Halaman",
    of: "dari",
    portfolio_error: "⚠️ Kesalahan memuat portofolio",
    congrats_on_profit: "Selamat atas penerimaan keuntungan!",
    investment_notification_sent:
      "Pemberitahuan pengembalian investasi dikirim ke pengguna",
    investment_notification_error:
      "Kesalahan mengirim pemberitahuan pengembalian investasi:",
    check_old_transactions: "🔍 Periksa transaksi lama",
    data_not_found: "Data tidak ditemukan. Silakan segarkan portofolio Anda",
    last_page: "Ini adalah halaman terakhir",
    first_page: "Ini adalah halaman pertama",
    page_load_error: "Kesalahan memuat halaman",
    edit_message_error: "Gagal mengedit pesan, mengirim yang baru:",
    refresh: "🔄 Segarkan",
    user_not_found: "❌ Pengguna tidak ditemukan",
    affiliate_network_header: (username) =>
      `👥 <b>Jaringan afiliasi Anda, ${username}</b>`,
    affiliate_network_description:
      "17 level tim Anda dan penghasilan dari setiap level dari profitabilitas referral Anda",
    level_percentages:
      `<b>• Level 1</b> - 20%\n` +
      `<b>• Level 2</b> - 10%\n` +
      `<b>• Level 3-7</b> - 5%\n` +
      `<b>• Level 8-10</b> - 3%\n` +
      `<b>• Level 11-17</b> - 1%`,
    level_activation_requirements:
      "Untuk mengaktifkan setiap level, bagian Anda dalam pool harus sesuai dengan <b>nomor level * $100</b>",
    all_levels_activation_requirement:
      "Untuk mengaktifkan semua level, bagian pribadi Anda dalam pool = <b>$1700</b>",
    your_personal_share: (amount) =>
      `💰 <b>Bagian pribadi Anda dalam pool:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Level yang diaktifkan:</b> ${count}/17`,
    level_statistics: "📊 <b>Statistik level:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Level ${level}: ${count} orang | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Level ${level}: Tidak ada referral`,
    no_level_data: "<i>Belum ada data level</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Total:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 Partner saya",
    my_team: "🧏‍♂️ Tim saya",
    ref_link: "🔗 Tautan ref",
    enable_levels: "🔓 Aktifkan level",
    search: "🔍 Cari",
    statistics: "📈 Statistik",
    affiliate_error: (error) => `❌ Kesalahan afiliasi: ${error}`,
    affiliate_load_error: "⚠️ Kesalahan memuat program afiliasi",
    referral_access_subscription:
      "❌ <b>Akses program referral dengan langganan</b>\n\n✅ Untuk mengatur tautan referral dan mengaktifkan bot Anda, Anda perlu membeli langganan seharga $10/bulan.",
    referral_invite_text:
      "👋🏻 Hai! Jika Anda ingin mendapatkan penghasilan pasif dari bursa TOP-1, bergabunglah menggunakan tautan saya 👆",
    your_referral_link: "Tautan referral Anda",
    referral_invite_description:
      "💡 Undang teman dan dapatkan penghasilan dari bagian pool aktif mereka!",
    share_link: "📢 Bagikan tautan",
    buy_subscription: "💳 Beli langganan ($10/bulan)",
    referral_link_error: "❌ Kesalahan memuat tautan referral",
    buy_subscription: "💰 Pembelian langganan",
    subscription_text:
      "Untuk membeli langganan, hubungi bot kripto:\n\n🤖 @YourCryptoBot\n\nSetelah membayar langganan, Anda akan mendapatkan akses ke program referral dan fitur eksklusif lainnya.",
    go_to_cryptobot: "📲 Pergi ke bot kripto",
    check_subscription_status: "🔄 Periksa status langganan",
    subscription_active:
      "✅ Langganan Anda aktif! Sekarang Anda dapat mengundang referral.",
    subscription_inactive:
      "❌ Langganan belum aktif. Silakan selesaikan pembayaran atau hubungi dukungan.",
    subscription_check_error: "❌ Kesalahan memeriksa status langganan",
    link_copied: "📋 Tautan referral disalin:",
    share_with_friends: "Sekarang Anda dapat membagikannya dengan teman!",
    link_settings_title: "⚙️ Pengaturan tautan Anda",
    link_settings_description: "Tautan ini akan terlihat oleh referral Anda:",
    choose_link_to_change: "💡 Pilih tautan untuk diubah:",
    change_video: "🎥 Ubah video",
    cancel_input: "❌ Batalkan input",
    user_not_found: "❌ Pengguna tidak ditemukan",
    link_access_subscription: "❌ Akses pengaturan tautan dengan langganan",
    subscription_required:
      "✅ Untuk mengonfigurasi tautan referral dan mengaktifkan bot Anda, Anda perlu membeli langganan seharga $10/bulan.",
    buy_subscription_button: "💳 Beli langganan ($10/bulan)",
    payment_pending: "⌛ Pembayaran langganan tertunda",
    payment_pending_description:
      "Langganan Anda menunggu konfirmasi pembayaran. Jika Anda sudah membayar, klik tombol di bawah untuk memeriksa status.",
    check_payment: "🔄 Periksa pembayaran",
    create_new_payment: "💳 Buat pembayaran baru",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ Semua tautan direset ke pengaturan sistem",
    reset_links_error: "❌ Kesalahan mereset tautan",
    subscription_payment_title:
      "💳 Pembayaran langganan untuk pengaturan tautan",
    subscription_price: "Harga: <b>10 USDT</b>",
    subscription_duration: "Durasi: <b>1 bulan</b>",
    pay_via_cryptobot: "🔗 Bayar melalui bot kripto",
    check_payment: "🔄 Periksa pembayaran",
    cancel: "❌ Batalkan",
    subscription_payment_error:
      "⚠️ Terjadi kesalahan saat membuat langganan. Silakan coba lagi nanti.",
    subscription_description: "Langganan pengaturan tautan (1 bulan)",
    no_data_to_display: "❌ Tidak ada data untuk ditampilkan",
    nothing_found_for_query: "Tidak ditemukan untuk kueri",
    no_referrals_on_levels: "Anda belum memiliki referral di level",
    found_referrals: "Referral ditemukan",
    user_not_found: "❌ Pengguna tidak ditemukan",
    subscription_activated: "✅ Langganan berhasil diaktifkan!",
    subscription_activated_description:
      "🎉 Sekarang Anda memiliki akses ke semua pengaturan tautan dan fitur sistem partner.",
    payment_processing:
      "⌛ Pembayaran sedang diproses. Silakan coba lagi nanti.",
    invoice_expired: "❌ Faktur telah kedaluwarsa.",
    payment_not_found: "❌ Pembayaran tidak ditemukan atau dibatalkan.",
    payment_check_error: "⚠️ Kesalahan memeriksa pembayaran.",
    payment_check_error_description:
      "Silakan coba lagi nanti atau hubungi dukungan.",
    try_again: "🔄 Coba lagi",
    new_payment: "💳 Pembayaran baru",
    enter_presentation_link: "📊 Masukkan tautan presentasi:",
    enter_video_link: "🎥 Masukkan tautan instruksi video:",
    enter_official_link: "🌐 Masukkan tautan situs web resmi:",
    referral_stats: "📊 Statistik level",
    level: "Level",
    referrals_count: "👥 Referral",
    total_invested: (amount) => `💰 Dikirim ke pool: ${amount} USDT\n\n`,
    search_referrals_prompt: "🔍 Masukkan nama pengguna untuk mencari:",
    no_referrals: "👥 Anda belum memiliki referral",
    level_not_found: "❌ Level tidak ditemukan",
    your_referrals: "👥 Referral Anda",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Halaman ${current} dari ${total}`,
    no_referrals_on_level: "Belum ada referral di level ini",
    your_personal_partners: "Partner pribadi Anda",
    id: "ID",
    total_personal_partners: "📊 Total partner pribadi",
    no_personal_partners_yet: "Anda belum memiliki partner pribadi",
    invite_friends_tip:
      "💡 Undang teman menggunakan tautan referral Anda untuk menjadi partner pribadi Anda!",
    my_team: "🧏‍♂️ Tim saya",
    personal_partners_error: "❌ Kesalahan memuat partner pribadi",
    level_activation_title: "Aktivasi level program afiliasi",
    your_pool_share: "Bagian pool Anda",
    new_activated_levels: "Level baru yang diaktifkan",
    activation_status: "Status aktivasi",
    how_to_activate: "Cara mengaktifkan",
    levels_activate_automatically:
      "Level diaktifkan secara otomatis ketika jumlah investasi yang diperlukan tercapai ($100 per level)",
    to_activate_level: "Untuk mengaktifkan level",
    needs_more: "perlu lebih",
    refresh_status: "🔄 Segarkan status",
    levels_check_error: "❌ Kesalahan memeriksa level",
    language_settings:
      "🌐 <b>Pilih bahasa:</b>\n\nBahasa saat ini: Bahasa Indonesia",
    select_language: "🌐 <b>Pilih bahasa:</b>",
    current_language: "Bahasa saat ini: {language}",
    russian: "🇷🇺 Rusia",
    english: "🇺🇸 Inggris",
    back_to_settings: "◀️ Kembali ke pengaturan",
    contact_mentor: "👨‍💼 <b>Hubungi mentor Anda</b>",
    your_mentor: (mentor) => `Mentor Anda: ${mentor}`,
    write_to_mentor: "✉️ Tulis ke mentor",
    mentor_not_found: "❌ <b>Mentor tidak ditemukan</b>",
    mentor_not_found_description:
      "Anda tidak memiliki mentor yang ditugaskan. Silakan hubungi dukungan.",
    support_service: "⚠️ Layanan dukungan",
    contact_support: "✉️ Hubungi dukungan",
    settings_title:
      "⚙️ Pengaturan\n\nDi sini Anda dapat mengonfigurasi tautan Anda\n\nPilih aksi:",
    link_settings: "⚙️ Pengaturan tautan",
    contact_mentor: "🙆‍♂️ Hubungi mentor",
    community_chat: "💬 Obrolan komunitas",
    support_service: "⚠️ Layanan dukungan",
    language_settings: "🌐 Bahasa / Language",

    not_subscribed:
      '❌ Anda tidak berlangganan obrolan kami. Silakan berlangganan dan klik "Periksa langganan" lagi.',
	please_subscribe_to_chat: "Untuk melanjutkan, Anda perlu berlangganan saluran kami.",
    subscribe_to_chat: "📢 Berlangganan obrolan",
    check_subscription_btn: "🔄 Periksa langganan",
    subscription_check_error: "Kesalahan pemeriksaan langganan",
    wallet_not_configured: "❌ Dompet belum dikonfigurasi",
    wallet_not_configured: "❌ Dompet belum dikonfigurasi",
    transaction: "Transaksi",
    wallet: "Dompet",
    search_results: '🔍 Hasil pencarian untuk "{query}":',
    levels: "📊 Level: {levels}",
    sent_to_pool: "💰 Dikirim ke pool: {amount} USDT",
    referrals_title: `👥 <b>Referral Anda</b> | <b>Level {level}</b>`,
    no_referrals: "Belum ada referral di level ini",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Halaman {page} dari {total}",
    back_btn: "◀️ Kembali",
    // =========================
    // Kesalahan dan Pemberitahuan
    // =========================
    error: "❌ Terjadi kesalahan. Silakan coba lagi.",
    invalid_address:
      "❌ Alamat dompet tidak valid. Silakan periksa dan coba lagi.",
    access_denied: "⛔ Akses ditolak",
    loading: "⏳ memuat...",
    updated: "Diperbarui",
    enabled: "✅ Diaktifkan",
    disabled: "❌ Dinonaktifkan",
    turn_on: "🔔 Nyalakan",
    turn_off: "🔕 Matikan",
    total_invested_level: "Porsi pribadi dalam pool",
  },
  de: {
    referral_reward_notification: "🎉 <b>Referral-Belohnung erhalten!</b>\n\n💰 <b>Betrag:</b> {amount} USDT\n\n💼 Mittel sind bereits auf Ihrem Guthaben und verfügbar für Abhebung oder Reinvestition.",
    referral_reward_my_portfolio: "💼 Mein Portfolio",
    
    missed_referral_reward: "😡 <b>Verpasste Referral-Belohnung!</b>\n\n💰 <b>Betrag:</b> {amount} USDT\n📊 <b>Level:</b> {level}\n\n🔐 Aktivieren Sie Level {level} um Referral-Belohnungen zu erhalten!",
    activate_levels_button: "💼 Level aktivieren",
    
    // Überwachung und Prüfung
    starting_periodic_check: "🔄 Starte periodische Überprüfung der Referral-Transaktionen (jede Minute)...",
    periodic_check_started: "✅ Benutzer-Wallet-Überwachung gestartet",
    checking_recent_transactions: "⏰ Prüfe Transaktionen der letzten Minute: seit {time}",
    wallet_check_progress: "🔍 Prüfe frische Transaktionen für Wallet: {wallet}",
    fresh_transaction_found: "🕐 Frische Transaktion gefunden: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Für Wallet {wallet} {count} frische Referral-Transaktionen in der letzten Minute gefunden",
    
    // Prüfergebnisse
    force_check_started: "🔍 Erzwungene Prüfung FRISCHER Referral-Transaktionen (letzte Minute)...",
    no_wallets_for_check: "❌ Keine Benutzer-Wallets zu prüfen",
    wallets_check_summary: "📊 Prüfe {count} Benutzer-Wallets der letzten Minute",
    check_results: "📊 Ergebnisse der letzten Minute:",
    wallets_checked: "• Geprüfte Wallets: {count}",
    fresh_transactions_found: "• Frische Transaktionen gefunden: {count}",
    successfully_processed: "• Erfolgreich verarbeitet: {count}",
    errors_count: "• Fehler: {count}",
    
    // Transaktionsverarbeitung
    processing_fresh_transaction: "🔍 Verarbeite FRISCHE Referral-TX:\n- Hash: {hash}\n- Empfänger: {recipient}\n- Betrag: {amount} USDT\n- Zeit: {time}",
    transaction_already_processed: "⏭️ Transaktion {hash} bereits verarbeitet",
    user_not_found_by_wallet: "❌ Benutzer mit Wallet {wallet} nicht gefunden",
    user_found: "✅ Benutzer gefunden: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ FRISCHE Referral-Belohnung verarbeitet für Benutzer {telegramId}",
    
    // Fehler
    transaction_processing_error: "❌ Fehler bei Verarbeitung FRISCHER Referral-Transaktion",
    wallet_check_error: "❌ Wallet-Prüfungsfehler {wallet}",
    periodic_check_error: "❌ Periodischer Prüfungsfehler: {error}",
    force_check_error: "❌ Erzwungener Prüfungsfehler frischer Transaktionen: {error}",
    
    // Admin-Benachrichtigungen
    bot_not_available: "❌ Bot nicht verfügbar für Benachrichtigungen",
    user_blocked_bot: "🚫 Benutzer {telegramId} hat Bot blockiert",
    user_marked_blocked: "✅ Benutzer {telegramId} als blockiert markiert",
    
    // Belohnungsprozess
    referral_reward_start: "🔔 START processReferralRewardEnhanced:\n- Wallet: {wallet}\n- Betrag: {amount} USDT\n- TX Hash: {hash}\n- Von: {from}\n- Zeitstempel: {time}",
    transaction_recorded: "✅ Transaktion in Datenbank aufgezeichnet",
    balance_updated: "✅ Benutzer-Guthaben aktualisiert +{amount} USDT",
    referral_reward_db_success: "✅ Referral-Belohnung erfolgreich in Datenbank verarbeitet",
    sending_user_notification: "🔔 Sende Benachrichtigung an Benutzer {telegramId}",
    user_no_telegram_id: "⚠️ Benutzer {userId} hat keine telegram_id",
    database_overflow_error: "⚠️ Numerischer Feldüberlauffehler, versuche mit geringerer Präzision",
    retry_failed: "❌ Wiederholungsversuch auch fehlgeschlagen",
    referral_reward_end: "✅ ENDE processReferralRewardEnhanced für Wallet {wallet}",
    
    // Einfache Belohnungen
    simple_reward_processing: "🔔 Verarbeite Referral-Belohnung: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Referral-Belohnung aufgezeichnet für Benutzer {telegramId}",
    
    // Benachrichtigungen
    notification_sent: "✅ Referral-Belohnungsbenachrichtigung an Benutzer {telegramId} gesendet",
    notification_error: "❌ Fehler beim Senden der Benachrichtigung an Benutzer {telegramId}: {error}",
    
    // Wallet-Updates
    wallets_updater_started: "✅ Benutzer-Wallet-Überwachung gestartet",
    
    // Verwaiste Transaktionen
    orphan_transaction_processing: "🔍 Verarbeite verwaiste Referral-Transaktion für Benutzer {userId}",
    missed_reward_notification_sent: "⚠️ Verpasste Belohnungsbenachrichtigung gesendet für Level {level}",
    orphan_transaction_error: "❌ Fehler bei Verarbeitung verwaister Transaktion",
    
    // Allgemein
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Kuratoren-Bibliothek",
    no_curators_data: "Keine Kuratordaten für Level {level} verfügbar",
    curators_library_explanation: "Hier sehen Sie die Sponsoren Ihrer Partner und deren Teams",
    statistics: "Statistiken",
    total_curators: "Gesamte Kuratoren",
    total_referrals: "Gesamte Partner",
    average_per_curator: "Durchschnitt pro Kurator",
    sponsor: "Sponsor",
    partners: "Partner",
    more: "mehr",
	incomplete_registration_title: "Sie haben die Registrierung im Bot nicht abgeschlossen!",
    incomplete_registration_message: "Schließen Sie die Registrierung ab, um mit dem Verdienen zu beginnen und keine Chancen zu verpassen.",
    complete_registration_to_earn: "Schließen Sie die Registrierung ab und beginnen Sie zu verdienen!",
    complete_registration_to_earn_start: "🚀 <b>Senden Sie einfach den Befehl</b> <code>/start</code> <b>um die Registrierung fortzusetzen!</b>",
    invalid_tx_hash_format:
      "❌ <b>Ungültiges TX Hash-Format</b>\n\nBitte geben Sie einen gültigen Transaktions-Hash ein (64 Zeichen, beginnt mit 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Überprüfe Transaktion in Blockchain...</b>\n\nErhalte Informationen über Betrag und Transaktionsdatum...",
    transaction_check_error: "❌ <b>Transaktionsprüfungsfehler</b>\n\n{error}",
    blockchain_check_error:
      "❌ Beim Überprüfen der Transaktion in der Blockchain ist ein Fehler aufgetreten",
    transaction_found_details:
      "✅ <b>Transaktion gefunden!</b>\n\n💰 <b>Betrag:</b> {amount} USDT\n📅 <b>Datum:</b> {date}\n\n⏰ <b>Wählen Sie den Pool-Sendezeitraum:</b>",
    invalid_period_range:
      "❌ <b>Ungültiger Zeitraum</b>\n\nBitte geben Sie eine Zahl von 1 bis 28 Tagen ein",
    period_processing_error:
      "❌ Beim Verarbeiten des Zeitraums ist ein Fehler aufgetreten",

    // Периоды
    period_1_day: "1 Tag",
    period_7_days: "7 Tage",
    period_14_days: "14 Tage",
    period_28_days: "28 Tage",
    custom_period: "📅 Benutzerdefinierter Zeitraum",

    // Админка
    bot_disabled_success: "🔴 Bot für Benutzer deaktiviert",
    bot_disable_error: "❌ Fehler: {error}",
    admin_panel: "🔧 Admin-Panel",
    invalid_prize_amount: "Ungültiger Preisbetrag",
    prize_set_success: "✅ Preis festgelegt: {amount} USDT",
    prize_sent_success: "✅ TX Hash gespeichert. Preis an Vertrag gesendet.",
    prize_send_error: "❌ Fehler: {error}",
    winner_prize_notification:
      "🎯 Ihr Gewinn {amount} USDT wurde an den Vertrag gesendet!\n\n⏰ Sie erhalten den Gewinn in 28 Tagen.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Domain nicht erlaubt</b>\n\n{domain_not_allowed_description}\n\n<b>Ihre Domain:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Ihr Partner-Link wurde erfolgreich verbunden!\n\n🏁 Sie sind auf der Zielgeraden! Um die Kommunikation zu erleichtern, Fragen stellen zu können und das Team kennenzulernen, müssen Sie unserem Chat beitreten.\n\n1. Gehen Sie zu diesem Chat: @BitnestRus\n\n2. Klicken Sie auf die Schaltfläche 'Gruppe beitreten'\n\n3. Schalten Sie unbedingt Benachrichtigungen ein\n\n4. Klicken Sie auf die Schaltfläche unten 'Ich bin beigetreten'\n\n👇🏼 Oder nutzen Sie die Schaltfläche unten, um automatisch zu unserem Chat zu wechseln",
    chat_link: "📢  Gruppe beitreten",
    disclaimer:
      "✅ Sehr geehrter Benutzer, dieses System ist für die Schulung und Information neuer Benutzer konzipiert, die zuvor nicht mit dem Bitnest-System interagiert haben\n\n🤔 Bitte teilen Sie uns mit, waren Sie schon einmal registriert?\n\n1. Klicken Sie (NEIN) - wenn Sie noch kein Konto im System haben und eine Schulung absolvieren und Teil unseres Teams werden möchten\n\n2. Klicken Sie (JA) - wenn Sie bereits ein Konto im System haben und USDT in den Umlauf gebracht haben\n\nDie Dienste dieses Bots werden nur neuen Benutzern zur Verfügung gestellt, die zuvor nicht im System waren und auf die Schaltfläche ✅ NEIN geklickt haben",
    disclaimer_no: "✅ NEIN, ICH BIN EIN NEUER TEILNEHMER",
    disclaimer_yes: "⛔️ JA, ICH BIN MITGLIED EINES ANDEREN TEAMS",
    block_confirmation_title: "Bestätigung",
    block_confirmation_message: "Wenn Sie Mitglied eines anderen Teams sind, wenden Sie sich an Ihren Kurator.\n\nSind Sie sicher, dass Sie Ihr Konto sperren möchten?",
    back_button: "◀️ Zurück",
    confirm_block_button: "✅ Ja, sperren",
    account_blocked_message: "🚫 <b>Konto gesperrt</b>\n\nIhr Konto wurde auf Ihre Anfrage gesperrt.\n\nWenn dies versehentlich geschah, wenden Sie sich an den Support @BitnestRusSupport.",
    account_blocked:
      "❌ Leider werden die Dienste dieses Bots nur neuen Benutzern zur Verfügung gestellt. Ihr Konto ist nicht aktiv. Bei Fragen @BitnestRusSupport",
    please_try_again: "Bitte versuchen Sie es erneut",
    add_custom_transaction: "➕ Transaktion hinzufügen",
    your_investment_portfolio_add: "➕ Transaktion hinzufügen",
    adding_custom_transaction: "🔗 <b>Hinzufügen Ihrer Transaktion</b>",
    enter_tx_hash_prompt:
      "Bitte geben Sie den <b>TX Hash</b> Ihrer Transaktion ein:",
    transaction_requirements:
      "• Muss im BSC-Netzwerk (Binance Smart Chain) ausgeführt werden\n• Muss eine USDT-Transaktion sein",
    tx_hash_example:
      `📝 <b>Beispiel:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nZeige deine Transaktionen zum Pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Gehe zu</a>`,
    enter_amount_prompt:
      "💰 <b>Geben Sie den Transaktionsbetrag in USDT ein:</b>",
    amount_example: "Beispiel: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Wählen Sie die Anlageperiode:</b>",
    verifying_transaction:
      "🔍 <b>Überprüfung der Transaktion in der Blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nBetrag: {amount} USDT\nZeitraum: {period} Tage",
    please_wait: "Bitte warten...",
    transaction_already_exists:
      "Diese Transaktion wurde bereits dem System hinzugefügt",
    transaction_not_found: "Transaktion nicht gefunden",
    transaction_not_confirmed:
      "Transaktion nicht bestätigt oder fehlgeschlagen",
    transaction_wrong_sender:
      "Transaktion vom falschen Wallet gesendet. Ihr Wallet: {userWallet}, Absender in der Transaktion: {txFrom}",
    transaction_wrong_receiver:
      "Transaktion an falsches System-Wallet gesendet. Der Empfänger sollte sein: {systemWallet}",
    transaction_amount_mismatch:
      "Betrag stimmt nicht überein. In der Blockchain: {blockchainAmount} USDT, Sie haben eingegeben: {enteredAmount} USDT",
    transaction_not_usdt: "Dies ist keine USDT-Transaktion",
    transaction_decode_error:
      "Fehler beim Decodieren der USDT-Transaktionsdaten",
    blockchain_error: "Fehler bei der Überprüfung in der Blockchain: {error}",
    transaction_added_success: "✅ <b>Transaktion erfolgreich hinzugefügt!</b>",
    investment_details: "📊 <b>Anlagedetails:</b>",
    investment_amount: "• Betrag: {amount} USDT",
    investment_period: "• Zeitraum: {period} Tage",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Rentabilität: {profit}%",
    investment_added_to_portfolio: "💼 Anlage zu Ihrem Portfolio hinzugefügt.",
    transaction_add_error: "❌ <b>Fehler beim Hinzufügen der Transaktion</b>",
    error_reason: "Grund: {error}",
    your_investment_portfolio_add: "➕ Transaktion hinzufügen",
    language_changed_success: "✅ Sprache erfolgreich auf Deutsch geändert!",
    welcome:
      '👋 <b>Willkommen bei BitNest!</b>\n🚀 Dezentraler Investment-Bot.\nKlicke auf "Weiter"',
    welcome_back:
      "👋 Sie haben die Schulung bereits abgeschlossen! Willkommen zurück!",
    education_title: "🎓 Schulungsmaterial\nWählen Sie ein Thema:",
    finish: "✅ Schulung abgeschlossen!",

    // =========================
    // Wallet
    // =========================

    no_transactions_found: "Keine Transaktionen gefunden",
    target_wallet: "Ziel-Wallet",
    checking_old_transactions: "Überprüfung alter Transaktionen",
    this_may_take_seconds: "Dies kann einige Sekunden dauern...",
    wallet_not_found: "Wallet nicht gefunden",
    check_completed: "Überprüfung abgeschlossen",
    found_transactions: "Gefundene Transaktionen",
    already_added: "bereits hinzugefügt",
    added: "hinzugefügt",
    summary: "Zusammenfassung",
    new_added: "Neu hinzugefügt",
    already_exist: "Bereits vorhanden",
    total_checked: "Insgesamt geprüft",
    check_transactions_error: "Fehler beim Überprüfen der Transaktionen",
    wallet_installation:
      "📲 <b>Wallet-Installation</b>\nLaden Sie eine der unterstützten Wallets herunter und installieren Sie sie.",
    ask_wallet_address:
      "👍🏼 Große Wahl! Beginnen wir mit der Schulung:\n\n💵 Der erste Schritt in der Welt von Web3 und DeFi ist, eine eigene persönliche Krypto-Wallet zu haben, und wir richten diese jetzt ein:\n\n1. Gehen Sie auf die offizielle <b>MetaMask</b>-Website\n2. Installieren Sie die App auf Ihrem Telefon\n3. Erstellen Sie eine Wallet und notieren Sie sich sicher Ihren Seed-Phrase\n4. Richten Sie das BSC-Netzwerk ein - Binance Smart Chain (BEP20)\n5. Kopieren Sie Ihre öffentliche Wallet-Adresse 0x.............\n6. Senden Sie diese Adresse als Nachricht in das Feld unten 👇🏼",
    enter_wallet: `🥳 Herzlichen Glückwunsch! Ihre Wallet wurde erfolgreich verknüpft!\n\n📝 In diesem Schritt müssen Sie die Registrierung auf der offiziellen Bitnest-Website abschließen (siehe Video)\n\n1. Kopieren Sie diesen Link \n\n<code>{referral_link_bitnest}</code>\n\n und öffnen Sie ihn im internen Browser Ihrer Wallet\n2. Klicken Sie oben rechts auf "Verbinden"\n3. Bestätigen Sie die Autorisierung auf der Website im Pop-up-Fenster Ihrer Wallet\n<i><b>*Wenn die Website nicht geöffnet wird, aktivieren Sie das 3-Buchstaben-Programm (das Ihnen den Zugriff auf die Website ermöglicht)</b></i>\n\n👇🏼 Oder verwenden Sie die Schaltflächen unten, um automatisch die Wallet zu öffnen und zur gewünschten Seite zu navigieren`,
    wallet_not_set: "❌ Wallet nicht festgelegt",
    your_wallet: "💼 Ihre Krypto-Wallet\n\n📌 Adresse (BEP20)",
    install_wallet:
      "👍🏼 Große Wahl! Beginnen wir mit der Schulung:\n\n💵 Der erste Schritt in der Welt von Web3 und DeFi ist, eine eigene persönliche Krypto-Wallet zu haben, und wir richten diese jetzt ein:\n\n1. Gehen Sie auf die offizielle <b>MetaMask</b>-Website\n2. Installieren Sie die App auf Ihrem Telefon\n3. Erstellen Sie eine Wallet und notieren Sie sich sicher Ihren Seed-Phrase\n4. Richten Sie das BSC-Netzwerk ein - Binance Smart Chain (BEP20)\n5. Kopieren Sie Ihre öffentliche Wallet-Adresse 0x.............\n6. Senden Sie diese Adresse als Nachricht in das Feld unten 👇🏼",
    loading_balance: "⏳ Abrufen der Kontostandinformationen...",
    refresh: "🔄 Aktualisieren",
    bnb_balance: "Saldo:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Token-Saldo",
    wallet_not_configured: "❌ Wallet nicht konfiguriert",
    send_usdt: "💸 USDT senden",
    error_amount_not_selected: "❌ Fehler: Betrag nicht ausgewählt",
    error_wallet_not_configured: "❌ Fehler: Wallet nicht konfiguriert",
    back_to_amount_selection: "◀️ Zurück zur Betragsauswahl",
    configure_wallet: "⚙️ Wallet konfigurieren",
    investment_confirmation:
      `💰 <b>Bestätigung der Pool-Überweisung</b>\n\n` +
      `📊 <b>Transaktionsdetails:</b>\n` +
      `▸ Betrag: <b>{amount} USDT</b>\n` +
      `▸ Laufzeit: <b>{period} Tage</b>\n` +
      `▸ Ertrag: <b>{profitPercent}%</b>\n` +
      `▸ Erwarteter Gewinn: <b>{expectedProfit} USDT</b>\n` +
      `▸ Gesamtrückzahlung: <b>{totalReturn} USDT</b>\n` +
      `� Rückzahlungsdatum: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Überweisungsanleitung:</b>\n\n` +
      `1. Öffnen Sie die MetaMask-App\n\n` +
      `2. Gehen Sie auf die offizielle Bitnest-Website\n\n` +
      `3. Klicken Sie oben rechts auf <b>"Verbinden"</b> - <i>(wenn Sie das Wallet-Symbol sehen, fahren Sie mit dem nächsten Schritt fort)</i>\n\n` +
      `4. Klicken Sie auf das Wallet-Symbol und gehen Sie zum Abschnitt Loop\n\n` +
      `5. Geben Sie den Überweisungsbetrag ein\n\n` +
      `6. Wählen Sie die Laufzeit\n\n` +
      `7. Klicken Sie auf die Schaltfläche "Umlauf"\n\n` +
      `8. Bestätigen Sie die Überweisung auf der Website im Pop-up-Fenster Ihrer Wallet\n\n` +
      `👇🏼 Oder verwenden Sie die Schaltflächen unten, um automatisch zu Ihrer Wallet zu gelangen und die erforderliche Seite zu öffnen`,
    send_metamask_mobile: "🦊 Senden - MetaMask 📲",
    transaction_search_timer: `⚠️ Wir warten auf Ihre Überweisung, Anleitung siehe oben\n\n<b>🔎 Nach der Überweisung beginnen wir mit der Suche nach der Transaktion ...</b>\n⏰ <b>Frist für die Überweisung und Suche Ihrer Transaktion:</b> 20:00 Min...\n\n`,
    cancel_search: "❌ Suche abbrechen",

    // =========================
    // DeFi und BitNest
    // =========================
    what_is_bitnest:
      "🏗 <b>Was ist BitNest</b>\nTransparente Operationen, volle Kontrolle über Ihre Mittel.",
    defi_basics:
      "📊 DeFi-Grundlagen.\nWeiter — Überblick über Pool-Investitionen.",
    liquidity_pool_text:
      "💎 Liquiditätspool\n\n💵 Zahlen Sie USDT in den Pool ein und verdienen Sie Boni.\n\nAktion wählen:",
    my_investments_empty: "📊 Sie haben noch keine Investitionen.",
    investment_saved: "✅ Daten gespeichert",
    investment_return_received: (amount) =>
      `Ihre Investitionsrendite von <b>${amount} $</b> wurde erhalten`,
    congrats_profit: "Herzlichen Glückwunsch zum erhaltenen Gewinn!",
    referral_reward_received: "Sie haben eine Empfehlungsprämie erhalten!",
    back_to_main_menu: "🏠 Zum Hauptmenü",
    your_referral_sent: "Ihre Empfehlung hat eine Überweisung getätigt!",
    user: "Benutzer",
    amount: "Betrag",
    congrats_referral_earned:
      "Herzlichen Glückwunsch! Sie haben eine Empfehlungsprämie verdient!",
    balance_replenished: (amount) =>
      `Ihr Kontostand wurde um ${amount} USDT aufgefrischt`,
    referral_reward_received_amount: (amount) =>
      `Sie haben Empfehlungsprämie ${amount} erhalten`,
    you_have_inactive_levels: "Sie haben inaktive Levels!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Wenn Sie ${amount} USDT investieren, können Sie Levels aktivieren: ${levels}`,
    activate_levels_to_earn:
      "Aktivieren Sie Levels, um Einkommen von Empfehlungen zu verdienen!",
    new_levels_activated: (levels) => `Neue Levels aktiviert: ${levels}`,
    now_earn_from_levels:
      "Jetzt verdienen Sie Einkommen von diesen Levels Ihres Teams!",
    invalid_tx_hash_contact_support:
      "❌ Ungültige Transaktions-Hash. Bitte wenden Sie sich an den Support.",
    congrats_liquidity_pool_success:
      "Herzlichen Glückwunsch! Ihre Liquiditätspool-Überweisung wurde erfolgreich abgeschlossen!",
    transaction_details: "Transaktionsdetails",
    block: "Block",
    period: "Zeitraum",
    days: "Tage",
    expected_profit: "Erwarteter Gewinn",
    total_return: "Gesamtrückzahlung",
    return_date: "Rückzahlungsdatum",
    error_updating_pool_status:
      "❌ Fehler beim Aktualisieren des Pool-Überweisungsstatus. Bitte wenden Sie sich an den Support.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transaktion nach mehreren Versuchen nicht gefunden.\n\n` +
      `TX-Hash: ${txHash}\n\n` +
      `Mögliche Gründe:\n` +
      `• Transaktion noch nicht vom Netzwerk bestätigt\n` +
      `• Ungültiger TX-Hash\n` +
      `• BSC-Netzwerkprobleme\n\n` +
      `Bitte überprüfen Sie den TX-Hash und versuchen Sie es erneut oder wenden Sie sich an den Support.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Transaktion an falsche Adresse gesendet!\n\n` +
      `▸ Erhaltene Adresse: ${actualTo}\n` +
      `▸ Erwartete Adresse: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Bitte stellen Sie sicher, dass Sie USDT an die richtige Pool-Adresse senden.`,
    transaction_not_confirmed: (status) =>
      `❌ Transaktion nicht bestätigt. Status: ${status}`,
    tx_hash: "TX-Hash",
    check_bscscan_contact_support:
      "Bitte überprüfen Sie den Transaktionsstatus auf BscScan und wenden Sie sich bei Bedarf an den Support.",
    error_checking_transaction:
      "❌ Fehler beim Überprüfen der Transaktion. Versuchen Sie es später erneut oder wenden Sie sich an den Support.",
    timer_message_id_not_found: "❌ timer_message_id nicht gefunden",
    transaction_search_timer_countdown: (timeString) =>
      `🔎 <b>Suche nach Transaktion …</b>\n⏰ <b>Bearbeitungszeit:</b> ${timeString} Min\n\n`,
    cancel_search: "❌ Suche abbrechen",
    timer_error: "❌ Timer-Fehler: {error}",
    timer_stopped_message_not_found:
      "⏹️ Timer gestoppt: Nachricht nicht gefunden oder nicht verfügbar",
    timer_minor_error_continue: "⚠️ Geringer Timer-Fehler, fahre fort...",
    transaction_timeout_message:
      "⏰ <b>Transaktionssuchzeit abgelaufen</b>\n\n" +
      "❌ Konnte die Transaktionsbestätigung innerhalb der allotted Zeit nicht finden.\n\n" +
      "Mögliche Gründe:\n" +
      "• Transaktion noch nicht vom Netzwerk bestätigt\n" +
      "• Ungültiger TX-Hash\n" +
      "• BSC-Netzwerkprobleme\n\n" +
      "Bitte überprüfen Sie den Transaktionsstatus auf BscScan und versuchen Sie es erneut.",
    try_again: "🔄 Erneut versuchen",
    transaction_timeout_log: "⏰ Transaktion-Timeout für Benutzer {userId}",
    transaction_timeout_error:
      "❌ Fehler bei der Verarbeitung des Transaktion-Timeout: {error}",
    transaction_not_found_try_again:
      "❌ Transaktion nicht gefunden. Bitte versuchen Sie es erneut.",
    awaiting_transaction_check:
      "🔍 <b>Warte auf Transaktionsüberprüfung...</b>\n\n" +
      "Der Bot wird die Blockchain innerhalb von 2-5 Minuten überprüfen.\n" +
      "Sie erhalten eine Benachrichtigung über das Ergebnis.",
    bot_not_available: "Bot nicht zum Senden von Benachrichtigungen verfügbar",
    transaction_not_found_message:
      `❌ <b>Transaktion nicht gefunden</b>\n\n` +
      `Mögliche Gründe:\n` +
      `• Transaktion noch nicht vom Netzwerk bestätigt\n` +
      `• An falsche Pool-Adresse gesendet\n` +
      `📞 Wenn Sie USDT gesendet haben, wenden Sie sich an den Support\n` +
      `🔍 TX-Hash: Geben Sie den Transaktions-Hash an`,
    transaction_not_found_notification_sent:
      "✅ Transaktion nicht gefunden Benachrichtigung an Benutzer {userId} gesendet",
    error_sending_notification:
      "Fehler beim Senden der Benachrichtigung: {error}",
    processing_found_transaction:
      "🔄 Verarbeite gefundene Transaktion für Benutzer {userId}",
    investment_in_process_not_found:
      "Investition mit in_process Status nicht gefunden",
    failed_update_investment_status:
      "Fehler beim Aktualisieren des Investitionsstatus",
    failed_delete_timer_message:
      "Fehler beim Löschen der Timer-Nachricht: {error}",
    failed_delete_previous_message:
      "Fehler beim Löschen der vorherigen Nachricht: {error}",
    transaction_confirmed_message:
      `💰 <b>Bestätigung der Pool-Überweisung</b>\n\n` +
      `📊 <b>Transaktionsdetails:</b>\n` +
      `▸ Betrag: <b>{amount} USDT</b>\n` +
      `▸ Laufzeit: <b>{period} Tage</b>\n` +
      `▸ Erwarteter Gewinn: <b>{expectedProfit} USDT</b>\n` +
      `▸ Gesamtrückzahlung: <b>{totalReturn} USDT</b>\n` +
      `▸ Rückzahlungsdatum: <b>{returnDate}</b>\n\n` +
      `✅ <b>Transaktion bestätigt!</b>\n` +
      `📊 <b>Transaktions-Hash:</b> <code>{hash}</code>\n` +
      `💰 <b>Tatsächlicher Betrag:</b> {actualAmount} USDT\n` +
      `⏰ <b>Bestätigt:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Aktiviere Benutzer-Levels basierend auf dem Investitionsbetrag",
    user_prefix: "Benutzer_",
    notification_sent_to_referrer:
      "✅ Benachrichtigung an Referrer {telegramId} gesendet",
    referrer_not_found_or_missing_data:
      "⚠️ Referrer nicht gefunden oder erforderliche Daten fehlen",
    user_has_no_referrer: "⚠️ Benutzer hat keinen Referrer",
    error_sending_referral_notification:
      "Fehler beim Senden der Empfehlungsbenachrichtigung: {error}",
    error_sending_missed_rewards:
      "Fehler beim Senden von Benachrichtigungen über verpasste Belohnungen: {error}",
    error_sending_missed_referrals:
      "Fehler beim Senden der Benachrichtigung über verpasste Empfehlungen: {error}",
    level_activation_notifications_sent:
      "🎯 Level-Aktivierungsbenachrichtigungen für Levels gesendet: {levels}",
    error_sending_level_activation:
      "Fehler beim Senden der Level-Aktivierungsbenachrichtigung: {error}",
    transaction_processed_successfully:
      "✅ Transaktion für Benutzer {userId} verarbeitet",
    error_processing_transaction:
      "❌ Fehler bei der Verarbeitung der Transaktion für Benutzer {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Fehler bei der Transaktionsverarbeitung</b>\n\n` +
      `TX-Hash: {hash}\n` +
      `Fehler: {error}\n\n` +
      `Bitte wenden Sie sich an den Support.`,
    error_sending_notification:
      "Fehler beim Senden der Benachrichtigung: {error}",
    request_tx_hash_message:
      "📝 <b>Bitte geben Sie den Transaktions-Hash (TX-Hash) ein:</b>\n\n" +
      "Nach dem Senden von USDT kopieren Sie den TX-Hash aus Ihrer Wallet und senden Sie ihn hierher.",
    error_requesting_tx_hash: "Fehler beim Anfordern des TX-Hash: {error}",
    presentation_message:
      `📊 <b>Präsentation</b>\n\n` +
      `🎥 Detaillierte Video-Präsentation, die Ihnen hilft, die Plattformvorteile und dieses Tool zu verstehen\n\n`,
    presentation_error: "Präsentationsfehler: {error}",
    presentation_load_error: "❌ Fehler beim Laden der Präsentation",
    user_not_determined: "❌ Benutzer konnte nicht bestimmt werden",
    not_configured: "Nicht konfiguriert",
    from_your_inviter: `\n👤 Von Ihrem Einlader: {name}`,
    user: "Benutzer",
    system_video_instruction: `\n📋 System-Videoanleitung`,
    video_instructions_header: "🎥 <b>Videoanleitungen</b>",
    video_instructions_description:
      "📚 Detaillierter Videokurs, in dem Sie alle Feinheiten der Arbeit mit dem System lernen und erfahren, wie Sie mit dem Pool interagieren",
    video_link_available: `🔗 <b>Video-Link:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Link nicht verfügbar</b>\n\n`,
    video_instruction_error: "Videoanleitungsfehler: {error}",
    video_instruction_load_error: "❌ Fehler beim Laden der Videoanleitungen",
    checking_old_transactions: "Überprüfe alte Transaktionen",
    this_may_take_seconds: "Dies kann einige Sekunden dauern...",
    wallet_not_found:
      "❌ Wallet nicht gefunden. Bitte verbinden Sie sie in Ihrem Profil.",
    check_completed: "Überprüfung abgeschlossen",
    added_to_portfolio: "Zum Portfolio hinzugefügt",
    transactions: "Transaktionen",
    my_portfolio: "💼 Mein Portfolio",
    check_transactions_error:
      "⚠️ Fehler beim Überprüfen der Transaktionen. Bitte versuchen Sie es später erneut.",
    // =========================
    // Partnerprogramm
    // =========================
    affiliate_text:
      "👥 Ihr Partner-Netzwerk,{pools.name}\n\n17 Levels Ihres Teams und Einkommen von jedem Level\n<b>1 Level</b> - 20%\n<b>2 Level</b> - 10%\n<b>3 - 7 Level</b> - 5%\n<b>8 - 10 Level</b> - 3%\n<b>11 - 17 Level</b> - 1%\n\nZur Aktivierung ist ein Anteil = <b>Level-Nummer * 100$</b> erforderlich\nAlle Levels aktiv = <b>1700$</b>\n📊 Statistiken:\n{pools.levels}\n💰 Gesamt: 0 Ref | 0.000 USDT",
    your_referral_sent: "Ihre Empfehlung hat eine Überweisung getätigt!",
    missed_referral_reward: (missedAmount, level) =>
      `Sie haben eine Empfehlungsprämie in Höhe von ${missedAmount}$ von Level ${level} verpasst`,
    activate_level_to_earn:
      "Aktivieren Sie das Level, um Einkommen von der gesamten Struktur zu verdienen!",
    check_subscription: "✅ Ich habe abonniert",
    website_ref:
      '🎉 Herzlichen Glückwunsch zu Ihrer erfolgreichen Registrierung!\n\n🔗 In diesem Schritt müssen Sie Ihren Empfehlungslink aus Ihrem Bitnest-Personalaccount hinzufügen\n\n1. Gehen Sie auf die offizielle Bitnest-Website\n2. Klicken Sie auf "<b>Verbinden</b>" oben rechts\n3. Klicken Sie auf "<b>Freunde einladen</b>"\n4. Klicken Sie auf "<b>Meinen Link kopieren</b>"\n5. Senden Sie ihn in das Feld unten 👇🏼',

    // =========================
    // Verlosungen und Events
    // =========================
    raffle: "🎁 VERLOSUNG 🎁",
    daily_raffle: "🎉 Tägliche Verlosung!",
    current_prize: "🏆 Preis",
    participants: "👥 Teilnehmer ",
    end_time: "⏰ Ergebnisse um",
    raffle_text: `✅ <b>Teilnahmebedingungen:</b>\n• Mindestanteil aktiv im Pool: 10 USDT\n• Ein Versuch pro Person\n\n`,
    raffle_requirement:
      "Ein aktiver Anteil im Pool ist erforderlich, um an der Verlosung teilzunehmen",
    raffle_wallet_not_set: "⚠️ Bitte richten Sie zuerst Ihre Wallet ein",
    raffle_already_registered:
      "✅ Sie sind erfolgreich für die aktuelle Runde registriert!",
    successfully_registered:
      "Sie wurden erfolgreich für die Verlosung registriert!",
    registration_failed: "Registrierung fehlgeschlagen",
    participate_button: "🎟 Teilnehmen",
    no_active_raffle: "Derzeit gibt es keine aktive Verlosung.",
    already_registered_in_raffle:
      "✅ Sie sind bereits für die aktuelle Verlosung registriert!",
    new_raffle_started:
      "💰 Preis: {prize} USDT\n" +
      "⏰ Endet in: {hours} Stunden\n\n" +
      "✅ Ihr Pool-Anteil: aktiv (≥10$)\n\n",
    register_in_raffle: "🤖 Verlosungs-Registrierung",
    raffle_error: "❌ Fehler: {error}",

    // Aus dem Wallet-Abschnitt
    raffle_min_investment_required:
      "Ein aktiver Anteil im Pool von mindestens 10$ ist erforderlich, um an der Verlosung teilzunehmen\n\n" +
      "Senden Sie USDT an den Pool, um teilnahmeberechtigt zu werden.",
    raffle_registration_success:
      "Sie wurden erfolgreich registriert!\n\nSie nehmen jetzt an der Verlosung teil!",
    eligible_to_participate:
      "💪 Sie sind berechtigt, sich für die Verlosung zu registrieren",
    raffle_registration_error: "❌ Registrierungsfehler: {error}",

    // Aus dem Menü- und Navigationsabschnitt (für Registrierungsprüfung)
    not_registered_yet:
      "❌ Sie sind noch nicht registriert. Klicken Sie auf Ihre Wallet-Schaltfläche, um sich zu registrieren.",
    register_button: "📝 Registrieren",
    registration_check_error: "❌ Fehler bei der Registrierungsprüfung",
    registering_wallet: "🔄 Registriere Ihre Wallet...",
    registration_success:
      "✅ Sie sind erfolgreich für die aktuelle Runde registriert!",
    registration_error: "❌ Registrierungsfehler",
    try_later_or_contact_admin:
      "Bitte versuchen Sie es später erneut oder wenden Sie sich an den Administrator.",
    registration_process_error: "❌ Fehler während der Registrierung",
    new_referral_notification: (username) =>
      `👏🏼 Sie haben eine neue Empfehlung @${username}`,
    friend: "Freund",
    welcome_error:
      "👋 Willkommen! Beim Laden des Menüs ist ein Fehler aufgetreten.",
    try_again: "🔄 Erneut versuchen",
    ser_not_found: "❌ Benutzer nicht gefunden",
    link_subscription_pending:
      "⌛ <b>Zahlung ausstehend</b>\n\n" +
      "Ihr Abonnement wartet auf Zahlungsbestätigung. " +
      "Wenn Sie bereits bezahlt haben, klicken Sie auf die Schaltfläche unten, um den Status zu überprüfen.",
    check_payment: "🔄 Zahlung prüfen",
    create_new_payment: "💳 Neue Zahlung erstellen",
    link_subscription_required:
      "❌ <b>Link-Einstellungen erfordern ein Abonnement</b>\n\n" +
      "✅ Um Ihren Empfehlungslink zu konfigurieren und Ihren Bot zu aktivieren, müssen Sie ein Abonnement für 10$/Monat erwerben.\n\n",
    buy_subscription: "💳 Abonnement kaufen (10$/Monat)",
    link_settings_error: "❌ Fehler beim Laden der Link-Einstellungen",
    setup_wallet_first:
      "❌ Richten Sie zuerst Ihre Wallet in den Einstellungen ein",
    raffle_min_investment_required:
      "❌ Um an der Verlosung teilzunehmen, benötigen Sie einen aktiven Anteil im Pool ab 10$\n\n" +
      "Tätigen Sie eine USDT-Überweisung an den Pool, um teilnehmen zu können.",
    custom_amount_message:
      "💰 <b>Geben Sie Ihren Betrag ein, der an den Pool gesendet werden soll </b>\n\n" +
      "Mindestbetrag: <b>1 USDT</b>\n" +
      "Höchstbetrag: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Senden Sie eine Zahl - den Betrag in USDT in das Feld unten</i>",
    language_settings:
      "🌐 <b>Sprache auswählen:</b>\n\nAktuelle Sprache: Deutsch",
    select_language: "🌐 <b>Sprache auswählen:</b>",
    current_language: "Aktuelle Sprache: {language}",
    back_to_settings: "◀️ Zurück zu den Einstellungen",
    contact_mentor: "👨‍💼 <b>Kontaktieren Sie Ihren Mentor</b>",
    your_mentor: "Ihr Mentor: {mentor}",
    write_to_mentor: "✉️ An Mentor schreiben",
    mentor_not_found: "❌ <b>Mentor nicht gefunden</b>",
    mentor_not_found_description:
      "Sie haben keinen zugewiesenen Mentor. Bitte wenden Sie sich an den Support.",
    support_service: "⚠️ Support-Service",
    contact_support: "✉️ Support kontaktieren",
    language_changed_ru: "✅ Sprache auf Russisch geändert",
    language_changed_en: "✅ Sprache auf Englisch geändert",
    language_changed_fr: "✅ Sprache auf Französisch geändert",
    language_changed_id: "✅ Sprache auf Indonesisch geändert",
    language_changed_es: "✅ Sprache auf Spanisch geändert",
    language_change_error: "❌ Fehler beim Ändern der Sprache",
    level_activation_title: "Aktivierung der Partnerprogramm-Levels",
    your_pool_share: "Ihr Pool-Anteil",
    new_activated_levels: "Neu aktivierte Levels",
    activation_status: "Aktivierungsstatus",
    how_to_activate: "Wie aktivieren",
    levels_activate_automatically:
      "Levels werden automatisch aktiviert, wenn der erforderliche Investitionsbetrag erreicht ist (100$ pro Level)",
    to_activate_level: "Um Level zu aktivieren",
    needs_more: "braucht mehr",
    refresh_status: "🔄 Status aktualisieren",
    levels_check_error: "❌ Fehler beim Überprüfen der Levels",
    // =========================
    // Menü und Navigation
    // =========================
    menu_title: `🎉 Willkommen, <b>{username}</b>\n\n🚀 <b>BitNestRus Bot - Ihr Assistent und Team-Tool</b>\n✨ <b>Bot-Funktionen:</b>\n• 🎁 Geldpreis-Verlosungen\n• 💰 Wallet-Finanzstatistiken\n• 🌊 Liquiditätspool-Anleitungen\n• 👥 Multi-Level-Partnerprogramm\n• 📊 Analysen und Benachrichtigungen\n\n👇 Wählen Sie einen Menübereich:\n`,
    back: "◀️ Zurück",
    next: "➡️ Weiter",
    nextreg: " ✍🏼 Ich habe die Registrierung abgeschlossen",
    my_wallet: "💰 Mein Wallet",
    liquidity_pool: "🌊 Liquiditätspool",
    affiliate: "👥 Partner",
    settings: "⚙️ Einstellungen",
    admin: "🔧 Admin-Bereich",
    settings_title:
      "⚙️ Einstellungen\n\nKonfigurieren Sie Ihre Links\n\nAktion wählen:",
    start_education: "🎓 Schulung starten",
    download_metamask: "🦊 Herunterladen - MetaMask",
    register_metamask: "🦊 Registrieren - MetaMask",
    register_metamask_mobile: "🦊 Registrieren - MetaMask",
    my_portfolio: "💼 Mein Portfolio",
    presentation: "🎥 Präsentation",
    video_instructions: "📚 Videoanleitungen",
    official_website: "🔗 Offizielle Website",
    oficial_site: "✅ Offizielle Website",
    invest_now_message:
      `💰 <b>USDT-Überweisung an den Liquiditätspool</b>\n\n` +
      `<b>Ertrag nach Laufzeiten:</b>\n` +
      `• <b>1 Tag</b> - 0.4%\n` +
      `• <b>7 Tage</b> - 4%\n` +
      `• <b>14 Tage</b> - 9.5%\n` +
      `• <b>28 Tage</b> - 24%\n\n` +
      `<i>Alle Mittel <b>(USDT-Betrag + Boni)</b> werden nach der angegebenen Zeit automatisch an Ihre Wallet zurückgegeben</i>\n\n` +
      `📌 <b>Ihr Saldo:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Wählen Sie den Betrag, der an den Pool gesendet werden soll:</b>`,
    custom_amount: "🗂 Benutzerdefinierter Betrag",
    error_getting_data:
      "❌ Fehler beim Abrufen der Daten, bitte versuchen Sie es erneut.",
    choose_period_message:
      `🔄 Sie haben den Betrag <b>{amount} USDT</b> ausgewählt. Wählen Sie die Laufzeit für die Pool-Überweisung:\n\n` +
      `<b>Ertrag nach Laufzeiten:</b>\n` +
      `• <b>1 Tag</b> - 0.4%\n` +
      `• <b>7 Tage</b> - 4%\n` +
      `• <b>14 Tage</b> - 9.5%\n` +
      `• <b>28 Tage</b> - 24%\n\n` +
      `<i>Alle Mittel <b>(USDT-Betrag + Boni)</b> werden nach der angegebenen Zeit automatisch an Ihre Wallet zurückgegeben</i>\n\n` +
      `👇 <b>Wählen Sie die Laufzeit für die Pool-Überweisung:</b>`,
    back_to_amount_selection: "◀️ Zurück zur Betragsauswahl",
    failed_delete_timer_message:
      "Fehler beim Löschen der Timer-Nachricht: {error}",
    investment_details_base:
      `💰 <b>Bestätigung der Pool-Überweisung</b>\n\n` +
      `📊 <b>Transaktionsdetails:</b>\n` +
      `▸ Betrag: <b>{amount} USDT</b>\n` +
      `▸ Laufzeit: <b>{period} Tage</b>\n` +
      `▸ Status: <b>Abgebrochen</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Transaktionssuche vom Benutzer abgebrochen</b>",
    failed_update_message:
      "Fehler beim Aktualisieren der Nachricht, sende neue: {error}",
    transaction_search_cancelled_log:
      "✅ Transaktionssuche für Benutzer {userId} abgebrochen",
    no_active_transaction_search: "❌ Keine aktive Transaktionssuche gefunden",
    error_cancelling_search: "❌ Fehler beim Abbrechen der Suche: {error}",
    error_cancelling_search_user:
      "❌ Beim Abbrechen der Suche ist ein Fehler aufgetreten",
    new_levels_activated: "Neue Levels aktiviert!",
    activated_levels: "Aktivierte Levels",
    levels_activation_benefit:
      "Jetzt verdienen Sie Einkommen von diesen Levels Ihres Teams!",
    referral_made_transaction: "Ihre Empfehlung hat eine Transaktion getätigt!",
    your_referral: "Ihre Empfehlung",
    congrats_referral_reward:
      "Herzlichen Glückwunsch! Sie haben eine Empfehlungsprämie verdient!",
    main_menu: "🏠 Hauptmenü",
    system_link: "🌐 Systemlink",
    from_your_mentor: "👤 Von Ihrem Mentor",
    user: "Benutzer",
    your_link: "🌐 Ihr Link",
    visit_official_website:
      "Besuchen Sie die offizielle Plattform-Website und erfahren Sie alle Details und Regeln für die Arbeit mit dem Service",
    link: "Link",
    open_metamask: "🦊 MetaMask öffnen",
    open_in_browser: "💻 Im PC-Browser öffnen",
    website_error: "❌ Fehler beim Laden der Website-Informationen",
    your_investment_portfolio: "Ihr Portfolio aktiver Pool-Anteile",
    transaction: "Transaktion",
    amount: "Betrag",
    term: "Laufzeit",
    days: "Tage",
    profitability: "Rentabilität",
    time_left: "Verbleibende Zeit",
    d: "T",
    h: "S",
    expected_profit: "Erwarteter Gewinn",
    type: "Typ",
    incoming_transaction: "Eingehende Transaktion",
    refund: "Rückerstattung",
    status: "Status",
    processing: "In Bearbeitung",
    active: "Aktiv",
    archived: "Archiviert",
    returned: "Zurückgegeben",
    total_statistics: "Gesamtstatistiken",
    total_active_amount: "Gesamter aktiver Betrag",
    page: "Seite",
    of: "von",
    portfolio_error: "⚠️ Fehler beim Laden des Portfolios",
    congrats_on_profit: "Herzlichen Glückwunsch zum erhaltenen Gewinn!",
    investment_notification_sent:
      "Investitionsrückgabe-Benachrichtigung an Benutzer gesendet",
    investment_notification_error:
      "Fehler beim Senden der Investitionsrückgabe-Benachrichtigung:",
    check_old_transactions: "🔍 Alte Transaktionen überprüfen",
    data_not_found:
      "Daten nicht gefunden. Bitte aktualisieren Sie Ihr Portfolio",
    last_page: "Dies ist die letzte Seite",
    first_page: "Dies ist die erste Seite",
    page_load_error: "Fehler beim Laden der Seite",
    edit_message_error: "Fehler beim Bearbeiten der Nachricht, sende neue:",
    refresh: "🔄 Aktualisieren",
    user_not_found: "❌ Benutzer nicht gefunden",
    affiliate_network_header: (username) =>
      `👥 <b>Ihr Partner-Netzwerk, ${username}</b>`,
    affiliate_network_description:
      "17 Levels Ihres Teams und Einkommen von jedem Level aus der Rentabilität Ihrer Empfehlungen",
    level_percentages:
      `<b>• Level 1</b> - 20%\n` +
      `<b>• Level 2</b> - 10%\n` +
      `<b>• Level 3-7</b> - 5%\n` +
      `<b>• Level 8-10</b> - 3%\n` +
      `<b>• Level 11-17</b> - 1%`,
    level_activation_requirements:
      "Um jedes Level zu aktivieren, muss Ihr Anteil im Pool <b>Level-Nummer * 100$</b> entsprechen",
    all_levels_activation_requirement:
      "Um alle Levels zu aktivieren, Ihr persönlicher Anteil im Pool = <b>1700$</b>",
    your_personal_share: (amount) =>
      `💰 <b>Ihr persönlicher Anteil im Pool:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Aktivierte Levels:</b> ${count}/17`,
    level_statistics: "📊 <b>Level-Statistiken:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Level ${level}: ${count} Personen | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Level ${level}: Keine Empfehlungen`,
    no_level_data: "<i>Noch keine Level-Daten</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Gesamt:</b> ${referrals} Ref. | ${investments} USDT`,
    my_partners: "📋 Meine Partner",
    my_team: "🧏‍♂️ Mein Team",
    ref_link: "🔗 Ref-Link",
    enable_levels: "🔓 Levels freischalten",
    search: "🔍 Suchen",
    statistics: "📈 Statistiken",
    affiliate_error: (error) => `❌ Partnerfehler: ${error}`,
    affiliate_load_error: "⚠️ Fehler beim Laden des Partnerprogramms",
    referral_access_subscription:
      "❌ <b>Zugang zum Empfehlungsprogramm per Abonnement</b>\n\n✅ Um Ihren Empfehlungslink zu konfigurieren und Ihren Bot zu aktivieren, müssen Sie ein Abonnement für 10$/Monat erwerben.",
    referral_invite_text:
      "👋🏻 Hallo! Wenn Sie passives Einkommen von der TOP-1-Börse verdienen möchten, joinen Sie über meinen Link 👆",
    your_referral_link: "Ihr Empfehlungslink",
    referral_invite_description:
      "💡 Laden Sie Freunde ein und verdienen Sie an ihren aktiven Pool-Anteilen!",
    share_link: "📢 Link teilen",
    buy_subscription: "💳 Abonnement kaufen (10$/Monat)",
    referral_link_error: "❌ Fehler beim Laden des Empfehlungslinks",
    buy_subscription: "💰 Abonnement kaufen",
    subscription_text:
      "Um ein Abonnement zu erwerben, kontaktieren Sie den Crypto-Bot:\n\n🤖 @YourCryptoBot\n\nNach der Zahlung des Abonnements erhalten Sie Zugang zum Empfehlungsprogramm und anderen exklusiven Funktionen.",
    go_to_cryptobot: "📲 Zum Crypto-Bot gehen",
    check_subscription_status: "🔄 Abonnementstatus prüfen",
    subscription_active:
      "✅ Ihr Abonnement ist aktiv! Jetzt können Sie Empfehlungen einladen.",
    subscription_inactive:
      "❌ Abonnement noch nicht aktiv. Bitte schließen Sie die Zahlung ab oder wenden Sie sich an den Support.",
    subscription_check_error: "❌ Fehler beim Überprüfen des Abonnementstatus",
    link_copied: "📋 Empfehlungslink kopiert:",
    share_with_friends: "Jetzt können Sie ihn mit Freunden teilen!",
    link_settings_title: "⚙️ Ihre Link-Einstellungen",
    link_settings_description:
      "Diese Links sind für Ihre Empfehlungen sichtbar:",
    choose_link_to_change: "💡 Wählen Sie den zu ändernden Link:",
    change_video: "🎥 Video ändern",
    cancel_input: "❌ Eingabe abbrechen",
    user_not_found: "❌ Benutzer nicht gefunden",
    link_access_subscription: "❌ Link-Einstellungen Zugang per Abonnement",
    subscription_required:
      "✅ Um den Empfehlungslink zu konfigurieren und Ihren Bot zu aktivieren, müssen Sie ein Abonnement für 10$/Monat erwerben.",
    buy_subscription_button: "💳 Abonnement kaufen (10$/Monat)",
    payment_pending: "⌛ Abonnementzahlung ausstehend",
    payment_pending_description:
      "Ihr Abonnement wartet auf Zahlungsbestätigung. Wenn Sie bereits bezahlt haben, klicken Sie auf die Schaltfläche unten, um den Status zu überprüfen.",
    check_payment: "🔄 Zahlung prüfen",
    create_new_payment: "💳 Neue Zahlung erstellen",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success: "✅ Alle Links auf Systemeinstellungen zurückgesetzt",
    reset_links_error: "❌ Fehler beim Zurücksetzen der Links",
    subscription_payment_title: "💳 Abonnementzahlung für Link-Einstellungen",
    subscription_price: "Preis: <b>10 USDT</b>",
    subscription_duration: "Dauer: <b>1 Monat</b>",
    pay_via_cryptobot: "🔗 Über Crypto-Bot bezahlen",
    check_payment: "🔄 Zahlung prüfen",
    cancel: "❌ Abbrechen",
    subscription_payment_error:
      "⚠️ Beim Erstellen des Abonnements ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    subscription_description: "Link-Einstellungen Abonnement (1 Monat)",
    no_data_to_display: "❌ Keine Daten zum Anzeigen",
    nothing_found_for_query: "Nichts gefunden für die Abfrage",
    no_referrals_on_levels: "Sie haben noch keine Empfehlungen auf Levels",
    found_referrals: "Empfehlungen gefunden",
    user_not_found: "❌ Benutzer nicht gefunden",
    subscription_activated: "✅ Abonnement erfolgreich aktiviert!",
    subscription_activated_description:
      "🎉 Sie haben jetzt Zugang zu allen Link-Einstellungen und Partner-System-Funktionen.",
    payment_processing:
      "⌛ Zahlung wird bearbeitet. Bitte versuchen Sie es später erneut.",
    invoice_expired: "❌ Rechnung ist abgelaufen.",
    payment_not_found: "❌ Zahlung nicht gefunden oder storniert.",
    payment_check_error: "⚠️ Fehler bei der Zahlungsprüfung.",
    payment_check_error_description:
      "Bitte versuchen Sie es später erneut oder wenden Sie sich an den Support.",
    try_again: "🔄 Erneut versuchen",
    new_payment: "💳 Neue Zahlung",
    enter_presentation_link: "📊 Präsentationslink eingeben:",
    enter_video_link: "🎥 Videoanleitungslink eingeben:",
    enter_official_link: "🌐 Offiziellen Website-Link eingeben:",
    referral_stats: "📊 Level-Statistiken",
    level: "Level",
    referrals_count: "👥 Empfehlungen",
    total_invested: (amount) => `💰 An Pool gesendet: ${amount} USDT\n\n`,
    search_referrals_prompt: "🔍 Benutzernamen zur Suche eingeben:",
    no_referrals: "👥 Sie haben noch keine Empfehlungen",
    level_not_found: "❌ Level nicht gefunden",
    your_referrals: "👥 Ihre Empfehlungen",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Seite ${current} von ${total}`,
    no_referrals_on_level: "Noch keine Empfehlungen auf diesem Level",
    your_personal_partners: "Ihre persönlichen Partner",
    id: "ID",
    total_personal_partners: "📊 Gesamte persönliche Partner",
    no_personal_partners_yet: "Sie haben noch keine persönlichen Partner",
    invite_friends_tip:
      "💡 Laden Sie Freunde über Ihren Empfehlungslink ein, um Ihre persönlichen Partner zu werden!",
    my_team: "🧏‍♂️ Mein Team",
    personal_partners_error: "❌ Fehler beim Laden der persönlichen Partner",
    level_activation_title: "Aktivierung der Partnerprogramm-Levels",
    your_pool_share: "Ihr Pool-Anteil",
    new_activated_levels: "Neu aktivierte Levels",
    activation_status: "Aktivierungsstatus",
    how_to_activate: "Wie aktivieren",
    levels_activate_automatically:
      "Levels werden automatisch aktiviert, wenn der erforderliche Investitionsbetrag erreicht ist (100$ pro Level)",
    to_activate_level: "Um Level zu aktivieren",
    needs_more: "braucht mehr",
    refresh_status: "🔄 Status aktualisieren",
    levels_check_error: "❌ Fehler beim Überprüfen der Levels",
    language_settings:
      "🌐 <b>Sprache auswählen:</b>\n\nAktuelle Sprache: Deutsch",
    select_language: "🌐 <b>Sprache auswählen:</b>",
    current_language: "Aktuelle Sprache: {language}",
    russian: "🇷🇺 Russisch",
    english: "🇺🇸 Englisch",
    french: "🇫🇷 Französisch",
    indonesia: "🇮🇩 Indonesisch",
    espaniol: "🇪🇸 Spanisch",
    italy: "🇮🇹 Italienisch",
    german: "🇩🇪 Deutsch",
    georgia: "🇬🇪 Georgisch",
    greece: "🇬🇷 Griechisch",
    swahilli: "🇰🇪 Kenianisch",
    turkish: "🇹🇷 Türkisch",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Zurück zu den Einstellungen",
    contact_mentor: "👨‍💼 <b>Kontaktieren Sie Ihren Mentor</b>",
    your_mentor: (mentor) => `Ihr Mentor: ${mentor}`,
    write_to_mentor: "✉️ An Mentor schreiben",
    mentor_not_found: "❌ <b>Mentor nicht gefunden</b>",
    mentor_not_found_description:
      "Sie haben keinen zugewiesenen Mentor. Bitte wenden Sie sich an den Support.",
    support_service: "⚠️ Support-Service",
    contact_support: "✉️ Support kontaktieren",
    link_settings: "⚙️ Link-Einstellungen",
    contact_mentor: "🙆‍♂️ Mentor kontaktieren",
    community_chat: "💬 Community-Chat",
    support_service: "⚠️ Support-Service",
    language_settings: "🌐 Sprache / Language",

    not_subscribed:
      '❌ Sie sind nicht in unserem Chat abonniert. Bitte abonnieren Sie und klicken Sie erneut auf "Abonnement prüfen".',
	please_subscribe_to_chat: "Um fortzufahren, müssen Sie unseren Kanal abonnieren.",
    subscribe_to_chat: "📢 Chat beitreten",
    check_subscription_btn: "🔄 Abonnement prüfen",
    subscription_check_error: "Abonnementprüfungsfehler",
    wallet_not_configured: "❌ Wallet nicht konfiguriert",
    wallet_not_configured: "❌ Wallet nicht konfiguriert",
    transaction: "Transaktion",
    wallet: "Wallet",
    search_results: '🔍 Suchergebnisse für "{query}":',
    levels: "📊 Levels: {levels}",
    sent_to_pool: "💰 An Pool gesendet: {amount} USDT",
    referrals_title: `👥 <b>Ihre Empfehlungen</b> | <b>Level {level}</b>`,
    no_referrals: "Noch keine Empfehlungen auf diesem Level",
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Seite {page} von {total}",
    back_btn: "◀️ Zurück",
    // =========================
    // Fehler und Benachrichtigungen
    // =========================
    error: "❌ Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    invalid_address:
      "❌ Ungültige Wallet-Adresse. Bitte überprüfen und erneut versuchen.",
    access_denied: "⛔ Zugriff verweigert",
    loading: "⏳ Wird geladen...",
    updated: "Aktualisiert",
    enabled: "✅ Aktiviert",
    disabled: "❌ Deaktiviert",
    turn_on: "🔔 Einschalten",
    turn_off: "🔕 Ausschalten",
    total_invested_level: "Persönlicher Anteil im Pool",
  },
  es: {
    referral_reward_notification: "🎉 <b>¡Recompensa de referido recibida!</b>\n\n💰 <b>Cantidad:</b> {amount} USDT\n\n💼 Los fondos ya están en tu saldo y disponibles para retiro o reinversión.",
    referral_reward_my_portfolio: "💼 Mi Portafolio",
    
    missed_referral_reward: "😡 <b>¡Recompensa de referido perdida!</b>\n\n💰 <b>Cantidad:</b> {amount} USDT\n📊 <b>Nivel:</b> {level}\n\n🔐 ¡Activa el nivel {level} para recibir recompensas de referidos!",
    activate_levels_button: "💼 Activar Niveles",
    
    // Monitoreo y verificación
    starting_periodic_check: "🔄 Iniciando verificación periódica de transacciones de referidos (cada minuto)...",
    periodic_check_started: "✅ Monitoreo de billeteras de usuarios iniciado",
    checking_recent_transactions: "⏰ Verificando transacciones del último minuto: desde {time}",
    wallet_check_progress: "🔍 Verificando transacciones recientes para billetera: {wallet}",
    fresh_transaction_found: "🕐 Transacción reciente encontrada: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Para billetera {wallet} encontradas {count} transacciones de referidos recientes en el último minuto",
    
    // Resultados de verificación
    force_check_started: "🔍 Verificación forzada de transacciones de referidos RECIENTES (último minuto)...",
    no_wallets_for_check: "❌ No hay billeteras de usuarios para verificar",
    wallets_check_summary: "📊 Verificando {count} billeteras de usuarios del último minuto",
    check_results: "📊 Resultados de verificación del último minuto:",
    wallets_checked: "• Billeteras verificadas: {count}",
    fresh_transactions_found: "• Transacciones recientes encontradas: {count}",
    successfully_processed: "• Procesado exitosamente: {count}",
    errors_count: "• Errores: {count}",
    
    // Procesamiento de transacciones
    processing_fresh_transaction: "🔍 Procesando TX de referido RECIENTE:\n- Hash: {hash}\n- Destinatario: {recipient}\n- Cantidad: {amount} USDT\n- Tiempo: {time}",
    transaction_already_processed: "⏭️ Transacción {hash} ya procesada",
    user_not_found_by_wallet: "❌ Usuario con billetera {wallet} no encontrado",
    user_found: "✅ Usuario encontrado: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ Recompensa de referido RECIENTE procesada para usuario {telegramId}",
    
    // Errores
    transaction_processing_error: "❌ Error de procesamiento de transacción de referido RECIENTE",
    wallet_check_error: "❌ Error de verificación de billetera {wallet}",
    periodic_check_error: "❌ Error de verificación periódica: {error}",
    force_check_error: "❌ Error de verificación forzada de transacciones recientes: {error}",
    
    // Notificaciones de administrador
    bot_not_available: "❌ Bot no disponible para enviar notificaciones",
    user_blocked_bot: "🚫 Usuario {telegramId} bloqueó el bot",
    user_marked_blocked: "✅ Usuario {telegramId} marcado como bloqueado",
    
    // Proceso de recompensa
    referral_reward_start: "🔔 INICIO processReferralRewardEnhanced:\n- Billetera: {wallet}\n- Cantidad: {amount} USDT\n- Hash TX: {hash}\n- De: {from}\n- Marca de tiempo: {time}",
    transaction_recorded: "✅ Transacción registrada en la base de datos",
    balance_updated: "✅ Saldo de usuario actualizado +{amount} USDT",
    referral_reward_db_success: "✅ Recompensa de referido procesada exitosamente en la base de datos",
    sending_user_notification: "🔔 Enviando notificación al usuario {telegramId}",
    user_no_telegram_id: "⚠️ Usuario {userId} no tiene telegram_id",
    database_overflow_error: "⚠️ Error de desbordamiento de campo numérico, intentando con menos precisión",
    retry_failed: "❌ Reintento también falló",
    referral_reward_end: "✅ FIN processReferralRewardEnhanced para billetera {wallet}",
    
    // Recompensas simples
    simple_reward_processing: "🔔 Procesando recompensa de referido: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Recompensa de referido registrada para usuario {telegramId}",
    
    // Notificaciones
    notification_sent: "✅ Notificación de recompensa de referido enviada al usuario {telegramId}",
    notification_error: "❌ Error enviando notificación al usuario {telegramId}: {error}",
    
    // Actualizaciones de billeteras
    wallets_updater_started: "✅ Monitoreo de billeteras de usuarios iniciado",
    
    // Transacciones huérfanas
    orphan_transaction_processing: "🔍 Procesando transacción de referido huérfana para usuario {userId}",
    missed_reward_notification_sent: "⚠️ Notificación de recompensa perdida enviada para nivel {level}",
    orphan_transaction_error: "❌ Error de procesamiento de transacción huérfana",
    
    // General
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    curators_library: "📚 Biblioteca de Curatores",
    no_curators_data: "No hay datos de curadores disponibles para el nivel {level}",
    curators_library_explanation: "Aquí puedes ver los patrocinadores de tus socios y sus equipos",
    statistics: "Estadísticas",
    total_curators: "Total de curadores",
    total_referrals: "Total de socios",
    average_per_curator: "Promedio por curador",
    sponsor: "Patrocinador",
    partners: "Socios",
    more: "más",
	incomplete_registration_title: "¡No has completado el registro en el bot!",
    incomplete_registration_message: "Completa el registro para comenzar a ganar beneficios y no perder oportunidades.",
    complete_registration_to_earn: "¡Completa el registro y comienza a ganar!",
    complete_registration_to_earn_start: "🚀 <b>Simplemente envía el comando</b> <code>/start</code> <b>para continuar con el registro!</b>",
    invalid_tx_hash_format:
      "❌ <b>Formato TX Hash inválido</b>\n\nPor favor ingrese un hash de transacción válido (64 caracteres, comienza con 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Verificando transacción en blockchain...</b>\n\nObteniendo información sobre monto y fecha de transacción...",
    transaction_check_error:
      "❌ <b>Error de verificación de transacción</b>\n\n{error}",
    blockchain_check_error:
      "❌ Ocurrió un error al verificar la transacción en blockchain",
    transaction_found_details:
      "✅ <b>¡Transacción encontrada!</b>\n\n💰 <b>Monto:</b> {amount} USDT\n📅 <b>Fecha:</b> {date}\n\n⏰ <b>Elija el período de envío al pool:</b>",
    invalid_period_range:
      "❌ <b>Período inválido</b>\n\nPor favor ingrese un número de 1 a 28 días",
    period_processing_error: "❌ Ocurrió un error al procesar el período",

    // Периоды
    period_1_day: "1 día",
    period_7_days: "7 días",
    period_14_days: "14 días",
    period_28_days: "28 días",
    custom_period: "📅 Período personalizado",

    // Админка
    bot_disabled_success: "🔴 Bot desactivado para usuarios",
    bot_disable_error: "❌ Error: {error}",
    admin_panel: "🔧 Panel de administración",
    invalid_prize_amount: "Monto del premio inválido",
    prize_set_success: "✅ Premio establecido: {amount} USDT",
    prize_sent_success: "✅ TX hash guardado. Premio enviado al contrato.",
    prize_send_error: "❌ Error: {error}",
    winner_prize_notification:
      "🎯 ¡Tus ganancias {amount} USDT han sido enviadas al contrato!\n\n⏰ Recibirás ganancias en 28 días.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Dominio no permitido</b>\n\n{domain_not_allowed_description}\n\n<b>Su dominio:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 ¡Tu enlace de afiliado se ha vinculado correctamente!\n\n🏁 ¡Estás en la recta final! Para una comunicación más fácil, poder hacer preguntas y conocer al equipo, debes unirte a nuestro chat.\n\n1. Ve a este chat: @BitnestRus\n\n2. Haz clic en el botón 'Unirse al grupo'\n\n3. Asegúrate de activar las notificaciones\n\n4. Haz clic en el botón de abajo 'Me he unido'\n\n👇🏼 O utiliza el botón de abajo para ir automáticamente a nuestro chat",
    chat_link: "📢  Unirse al grupo",
    disclaimer:
      "✅ Estimado usuario, este sistema está diseñado para capacitar e informar a nuevos usuarios que no han interactuado previamente con el sistema Bitnest\n\n🤔 Por favor díganos, ¿ha estado registrado antes?\n\n1. Haga clic (NO) - si aún no tiene una cuenta en el sistema y desea completar la capacitación y formar parte de nuestro equipo\n\n2. Haga clic (SÍ) - si ya tiene una cuenta en el sistema y ha enviado USDT a circulación\n\nLos servicios de este bot se proporcionan solo a nuevos usuarios que no han estado en el sistema antes y hicieron clic en el botón ✅ NO",
    disclaimer_no: "✅ NO, SOY UN NUEVO PARTICIPANTE",
    disclaimer_yes: "⛔️ SÍ, SOY MIEMBRO DE OTRO EQUIPO",
    block_confirmation_title: "Confirmación",
    block_confirmation_message: "Si eres miembro de otro equipo, contacta a tu curador.\n\n¿Estás seguro de que quieres bloquear tu cuenta?",
    back_button: "◀️ Atrás",
    confirm_block_button: "✅ Sí, bloquear",
    account_blocked_message: "🚫 <b>Cuenta bloqueada</b>\n\nTu cuenta ha sido bloqueada a tu solicitud.\n\nSi esto sucedió por error, contacta al soporte @BitnestRusSupport.",
    account_blocked:
      "❌ Desafortunadamente, los servicios de este bot se proporcionan solo a nuevos usuarios. Su cuenta no está activa. Para cualquier pregunta @BitnestRusSupport",
    please_try_again: "por Favor inténtalo de nuevo",
    add_custom_transaction: "➕ Agregar transacción",
    your_investment_portfolio_add: "➕ Añadir transacción",
    adding_custom_transaction: "🔗 <b>Agregando su transacción</b>",
    enter_tx_hash_prompt:
      "Por favor ingrese el <b>TX Hash</b> de su transacción:",
    transaction_requirements:
      "• Debe ejecutarse en la red BSC (Binance Smart Chain)\n• Debe ser una transacción USDT",
    tx_hash_example:
      `📝 <b>Ejemplo:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nVer tus transacciones al pool <a href="https://bscscan.com/address/{wallet}#tokentxns">Ir a</a>`,
    enter_amount_prompt:
      "💰 <b>Ingrese el monto de la transacción en USDT:</b>",
    amount_example: "Ejemplo: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Seleccione el período de inversión:</b>",
    verifying_transaction: "🔍 <b>Verificando transacción en blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nMonto: {amount} USDT\nPeríodo: {period} días",
    please_wait: "Por favor espere...",
    transaction_already_exists:
      "Esta transacción ya ha sido agregada al sistema",
    transaction_not_found: "Transacción no encontrada",
    transaction_not_confirmed: "Transacción no confirmada o fallida",
    transaction_wrong_sender:
      "Transacción enviada desde la billetera incorrecta. Su billetera: {userWallet}, remitente en la transacción: {txFrom}",
    transaction_wrong_receiver:
      "Transacción enviada a la billetera del sistema incorrecta. El destinatario debe ser: {systemWallet}",
    transaction_amount_mismatch:
      "El monto no coincide. En blockchain: {blockchainAmount} USDT, usted ingresó: {enteredAmount} USDT",
    transaction_not_usdt: "Esta no es una transacción USDT",
    transaction_decode_error: "Error al decodificar datos de transacción USDT",
    blockchain_error: "Error al verificar en blockchain: {error}",
    transaction_added_success: "✅ <b>¡Transacción agregada exitosamente!</b>",
    investment_details: "📊 <b>Detalles de la inversión:</b>",
    investment_amount: "• Monto: {amount} USDT",
    investment_period: "• Período: {period} días",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Rentabilidad: {profit}%",
    investment_added_to_portfolio: "💼 Inversión agregada a su portafolio.",
    transaction_add_error: "❌ <b>Error al agregar transacción</b>",
    error_reason: "Razón: {error}",
    language_changed_success:
      "✅ ¡El idioma se ha cambiado correctamente a español!",
    no_transactions_found: "No se encontraron transacciones",
    target_wallet: "Billetera objetivo",
    checking_old_transactions: "Verificando transacciones antiguas",
    this_may_take_seconds: "Esto puede tardar unos segundos...",
    wallet_not_found: "Billetera no encontrada",
    check_completed: "Verificación completada",
    found_transactions: "Transacciones encontradas",
    already_added: "ya agregada",
    added: "agregada",
    summary: "Resumen",
    new_added: "Nuevas agregadas",
    already_exist: "Ya existen",
    total_checked: "Total verificado",
    check_transactions_error: "Error al verificar transacciones",
    welcome:
      '👋 <b>¡Bienvenido a BitNest!</b>\n🚀 Bot de inversión descentralizado.\nHaz clic en "Siguiente"',
    welcome_back: "👋 ¡Ya completaste el entrenamiento! ¡Bienvenido de nuevo!",
    education_title: "🎓 Materiales educativos\nSelecciona un tema:",
    finish: "✅ ¡Entrenamiento completado!",

    // =========================
    // Billetera
    // =========================
    wallet_installation:
      "📲 <b>Instalación de billetera</b>\nDescarga e instala una de las billeteras compatibles.",
    ask_wallet_address:
      "👍🏼 ¡Buena elección! Comencemos con el entrenamiento:\n\n💵 El primer paso en el mundo de Web3 y DeFi es tener tu propia billetera cripto, y la configuraremos ahora mismo:\n\n1. Ve al sitio web oficial de <b>MetaMask</b>\n2. Instala la app en tu teléfono\n3. Crea una billetera y asegúrate de anotar tu frase semilla en un lugar seguro\n4. Configura la red BSC - Binance Smart Chain (BEP20)\n5. Copia la dirección pública de tu billetera 0x.............\n6. Envía esta dirección como un mensaje en el campo de abajo 👇🏼",
    enter_wallet: `🥳 ¡Felicidades! ¡Tu billetera ha sido vinculada exitosamente!\n\n📝 En este paso, debes completar el registro en el sitio web oficial de Bitnest (ver video)\n\n1. Copia este enlace \n\n<code>{referral_link_bitnest}</code>\n\n y ábrelo en el navegador interno de tu billetera\n2. Haz clic en "Conectar" en la esquina superior derecha\n3. Confirma la autorización en el sitio web en la ventana emergente de tu billetera\n<i><b>*Si el sitio no se abre, habilita el programa de 3 letras (que te permite acceder al sitio)</b></i>\n\n👇🏼 O usa los botones de abajo para abrir automáticamente la billetera y navegar a la página requerida`,
    wallet_not_set: "❌ Billetera no configurada",
    your_wallet: "💼 Tu billetera cripto\n\n📌 Dirección (BEP20)",
    install_wallet:
      "👍🏼 ¡Buena elección! Comencemos con el entrenamiento:\n\n💵 El primer paso en el mundo de Web3 y DeFi es tener tu propia billetera cripto, y la configuraremos ahora mismo:\n\n1. Ve al sitio web oficial de <b>MetaMask</b>\n2. Instala la app en tu teléfono\n3. Crea una billetera y asegúrate de anotar tu frase semilla en un lugar seguro\n4. Configura la red BSC - Binance Smart Chain (BEP20)\n5. Copia la dirección pública de tu billetera 0x.............\n6. Envía esta dirección como un mensaje en el campo de abajo 👇🏼",
    loading_balance: "⏳ Obteniendo información del saldo...",
    refresh: "🔄 Actualizar",
    bnb_balance: "Saldo:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Saldo de Tokens",
    wallet_not_configured: "❌ Billetera no configurada",
    send_usdt: "💸 Enviar USDT",
    error_amount_not_selected: "❌ Error: monto no seleccionado",
    error_wallet_not_configured: "❌ Error: billetera no configurada",
    back_to_amount_selection: "◀️ Volver a la selección de monto",
    configure_wallet: "⚙️ Configurar billetera",
    investment_confirmation:
      `💰 <b>Confirmación de transferencia al pool</b>\n\n` +
      `📊 <b>Detalles de la transacción:</b>\n` +
      `▸ Monto: <b>{amount} USDT</b>\n` +
      `▸ Plazo: <b>{period} días</b>\n` +
      `▸ Rendimiento: <b>{profitPercent}%</b>\n` +
      `▸ Ganancia esperada: <b>{expectedProfit} USDT</b>\n` +
      `▸ Retorno total: <b>{totalReturn} USDT</b>\n` +
      `▸ Fecha de retorno: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Instrucciones de transferencia:</b>\n\n` +
      `1. Abre la app de MetaMask\n\n` +
      `2. Ve al sitio web oficial de Bitnest\n\n` +
      `3. Haz clic en <b>"Conectar"</b> en la esquina superior derecha - <i>(si ves el icono de la billetera, pasa al siguiente paso)</i>\n\n` +
      `4. Haz clic en el icono de la billetera y ve a la sección Loop\n\n` +
      `5. Ingresa el monto de la transferencia\n\n` +
      `6. Selecciona el plazo\n\n` +
      `7. Haz clic en el botón "Circulación"\n\n` +
      `8. Confirma la transferencia en el sitio web en la ventana emergente de tu billetera\n\n` +
      `👇🏼 O usa los botones de abajo para ir automáticamente a tu billetera y abrir la página requerida`,
    send_metamask_mobile: "🦊 Enviar - MetaMask 📲",
    transaction_search_timer: `⚠️ Esperamos su envío, instrucciones arriba\n\n<b>🔎 Después del envío, comenzaremos la búsqueda de la transacción...</b>\n⏰ <b>Plazo para el envío y la búsqueda de su transacción:</b> 20:00 min...\n\n`,
    cancel_search: "❌ Cancelar búsqueda",

    // =========================
    // DeFi y BitNest
    // =========================
    what_is_bitnest:
      "🏗 <b>Qué es BitNest</b>\nOperaciones transparentes, control total de tus fondos.",
    defi_basics:
      "📊 Conceptos básicos de DeFi.\nSiguiente — descripción general de inversión en pools.",
    liquidity_pool_text:
      "💎 Pool de liquidez\n\n💵 Deposita USDT en el pool y gana bonificaciones.\n\nSelecciona una acción:",
    my_investments_empty: "📊 Aún no tienes inversiones.",
    investment_saved: "✅ Datos guardados",
    investment_return_received: (amount) =>
      `El retorno de tu inversión de <b>${amount}$</b> ha sido recibido`,
    congrats_profit: "¡Felicidades por recibir ganancias!",
    referral_reward_received: "¡Recibiste una recompensa por referencia!",
    back_to_main_menu: "🏠 Al menú principal",
    your_referral_sent: "¡Tu referido ha hecho una transferencia!",
    user: "Usuario",
    amount: "Monto",
    congrats_referral_earned:
      "¡Felicidades! ¡Ganaste una recompensa por referencia!",
    balance_replenished: (amount) =>
      `Tu saldo ha sido replenished por ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Recibiste recompensa por referencia ${amount}`,
    you_have_inactive_levels: "¡Tienes niveles inactivos!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Si inviertes ${amount} USDT puedes activar niveles: ${levels}`,
    activate_levels_to_earn:
      "¡Activa niveles para obtener ingresos de tus referidos!",
    new_levels_activated: (levels) => `Nuevos niveles activados: ${levels}`,
    now_earn_from_levels:
      "¡Ahora obtienes ingresos de estos niveles de tu equipo!",
    invalid_tx_hash_contact_support:
      "❌ Hash de transacción inválido. Por favor, contacta a soporte.",
    congrats_liquidity_pool_success:
      "¡Felicidades! ¡Tu transferencia al pool de liquidez se ha completado exitosamente!",
    transaction_details: "Detalles de la transacción",
    block: "Bloque",
    period: "Período",
    days: "días",
    expected_profit: "Ganancia esperada",
    total_return: "Retorno total",
    return_date: "Fecha de retorno",
    error_updating_pool_status:
      "❌ Error actualizando el estado de la transferencia al pool. Por favor, contacta a soporte.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Transacción no encontrada después de varios intentos.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Posibles razones:\n` +
      `• La transacción aún no está confirmada por la red\n` +
      `• TX Hash inválido\n` +
      `• Problemas con la red BSC\n\n` +
      `Por favor, verifica el TX Hash e intenta nuevamente o contacta a soporte.`,
    transaction_wrong_address: (actualTo) =>
      `❌ ¡Transacción enviada a una dirección incorrecta!\n\n` +
      `▸ Dirección recibida: ${actualTo}\n` +
      `▸ Dirección esperada: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Por favor, asegúrate de estar enviando USDT a la dirección correcta del pool.`,
    transaction_not_confirmed: (status) =>
      `❌ Transacción no confirmada. Estado: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Por favor, verifica el estado de la transacción en BscScan y contacta a soporte si es necesario.",
    error_checking_transaction:
      "❌ Error verificando la transacción. Intenta nuevamente más tarde o contacta a soporte.",
    timer_message_id_not_found: "❌ timer_message_id no encontrado",
    transaction_search_timer_countdown: (timeString) =>
      `🔎 <b>Buscando transacción …</b>\n⏰ <b>Tiempo de procesamiento:</b> ${timeString} min\n\n`,
    timer_error: "❌ Error del temporizador: {error}",
    timer_stopped_message_not_found:
      "⏹️ Temporizador detenido: mensaje no encontrado o no disponible",
    timer_minor_error_continue:
      "⚠️ Error menor del temporizador, continuando...",
    transaction_timeout_message:
      "⏰ <b>Tiempo de búsqueda de transacción agotado</b>\n\n" +
      "❌ No se pudo encontrar la confirmación de la transacción dentro del tiempo asignado.\n\n" +
      "Posibles razones:\n" +
      "• La transacción aún no está confirmada por la red\n" +
      "• TX Hash inválido\n" +
      "• Problemas con la red BSC\n\n" +
      "Por favor, verifica el estado de la transacción en BscScan e intenta nuevamente.",
    try_again: "🔄 Intentar nuevamente",
    transaction_timeout_log:
      "⏰ Tiempo de espera de transacción para el usuario {userId}",
    transaction_timeout_error:
      "❌ Error procesando el tiempo de espera de la transacción: {error}",
    transaction_not_found_try_again:
      "❌ Transacción no encontrada. Por favor, intenta nuevamente.",
    awaiting_transaction_check:
      "🔍 <b>Esperando verificación de la transacción...</b>\n\n" +
      "El bot verificará la blockchain en 2-5 minutos.\n" +
      "Recibirás una notificación sobre el resultado.",
    bot_not_available: "Bot no disponible para enviar notificaciones",
    transaction_not_found_message:
      `❌ <b>Transacción no encontrada</b>\n\n` +
      `Posibles razones:\n` +
      `• La transacción aún no está confirmada por la red\n` +
      `• Enviada a una dirección incorrecta del pool\n` +
      `📞 Si enviaste USDT, contacta a soporte\n` +
      `🔍 TX Hash: proporciona el hash de la transacción`,
    transaction_not_found_notification_sent:
      "✅ Notificación de transacción no encontrada enviada al usuario {userId}",
    processing_found_transaction:
      "🔄 Procesando transacción encontrada para el usuario {userId}",
    investment_in_process_not_found:
      "Inversión con estado in_process no encontrada",
    failed_update_investment_status:
      "Error al actualizar el estado de la inversión",
    failed_delete_timer_message:
      "Error al eliminar el mensaje del temporizador: {error}",
    failed_delete_previous_message:
      "Error al eliminar el mensaje anterior: {error}",
    transaction_confirmed_message:
      `💰 <b>Confirmación de transferencia al pool</b>\n\n` +
      `📊 <b>Detalles de la transacción:</b>\n` +
      `▸ Monto: <b>{amount} USDT</b>\n` +
      `▸ Plazo: <b>{period} días</b>\n` +
      `▸ Ganancia esperada: <b>{expectedProfit} USDT</b>\n` +
      `▸ Retorno total: <b>{totalReturn} USDT</b>\n` +
      `▸ Fecha de retorno: <b>{returnDate}</b>\n\n` +
      `✅ <b>¡Transacción confirmada!</b>\n` +
      `📊 <b>Hash de la transacción:</b> <code>{hash}</code>\n` +
      `💰 <b>Monto real:</b> {actualAmount} USDT\n` +
      `⏰ <b>Confirmada:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Activando niveles de usuario basado en el monto de inversión",
    user_prefix: "Usuario_",
    notification_sent_to_referrer:
      "✅ Notificación enviada al referidor {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Referidor no encontrado o faltan datos requeridos",
    user_has_no_referrer: "⚠️ El usuario no tiene referidor",
    error_sending_referral_notification:
      "Error enviando notificación de referencia: {error}",
    error_sending_missed_rewards:
      "Error enviando notificaciones de recompensas perdidas: {error}",
    error_sending_missed_referrals:
      "Error enviando notificación de referidos perdidos: {error}",
    level_activation_notifications_sent:
      "🎯 Notificaciones de activación de nivel enviadas para niveles: {levels}",
    error_sending_level_activation:
      "Error enviando notificación de activación de nivel: {error}",
    transaction_processed_successfully:
      "✅ Transacción procesada para el usuario {userId}",
    error_processing_transaction:
      "❌ Error procesando la transacción para el usuario {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Error procesando la transacción</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Error: {error}\n\n` +
      `Por favor, contacta a soporte.`,
    request_tx_hash_message:
      "📝 <b>Por favor, ingresa el hash de la transacción (TX Hash):</b>\n\n" +
      "Después de enviar USDT, copia el TX Hash de tu billetera y envíalo aquí.",
    error_requesting_tx_hash: "Error solicitando TX Hash: {error}",
    presentation_message:
      `📊 <b>Presentación</b>\n\n` +
      `🎥 Video presentación detallada que te ayudará a entender los beneficios de la plataforma y esta herramienta\n\n`,
    presentation_error: "Error de presentación: {error}",
    presentation_load_error: "❌ Error cargando la presentación",
    user_not_determined: "❌ No se pudo determinar el usuario",
    not_configured: "No configurado",
    from_your_inviter: `\n👤 De tu invitador: {name}`,
    user: "Usuario",
    system_video_instruction: `\n📋 Instrucción en video del sistema`,
    video_instructions_header: "🎥 <b>Instrucciones en video</b>",
    video_instructions_description:
      "📚 Curso en video detallado donde aprenderás todas las intricacias de trabajar con el sistema y cómo interactuar con el pool",
    video_link_available: `🔗 <b>Enlace del video:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Enlace no disponible</b>\n\n`,
    video_instruction_error: "Error de instrucción en video: {error}",
    video_instruction_load_error: "❌ Error cargando instrucciones en video",
    checking_old_transactions: "Verificando transacciones antiguas",
    this_may_take_seconds: "Esto puede tomar unos segundos...",
    wallet_not_found:
      "❌ Billetera no encontrada. Por favor, conéctala en tu perfil.",
    check_completed: "Verificación completada",
    added_to_portfolio: "Agregado al portafolio",
    transactions: "transacciones",
    my_portfolio: "💼 Mi portafolio",
    check_transactions_error:
      "⚠️ Error verificando transacciones. Por favor, intenta nuevamente más tarde.",

    // =========================
    // Programa de afiliados
    // =========================
    affiliate_text:
      "👥 Tu red de afiliados,{pools.name}\n\n17 niveles de tu equipo e ingresos de cada nivel\n<b>Nivel 1</b> - 20%\n<b>Nivel 2</b> - 10%\n<b>Nivel 3 - 7</b> - 5%\n<b>Nivel 8 - 10</b> - 3%\n<b>Nivel 11 - 17</b> - 1%\n\nSe requiere participación = <b>número de nivel * 100$</b> para activar\nTodos los niveles activos = <b>1700$</b>\n📊 Estadísticas:\n{pools.levels}\n💰 Total: 0 refs | 0.000 USDT",
    missed_referral_reward: (missedAmount, level) =>
      `Perdiste recompensa por referencia ${missedAmount}$ del nivel ${level}`,
    activate_level_to_earn:
      "¡Activa el nivel para obtener ingresos de toda la estructura!",
    check_subscription: "✅ Me suscribí",
    website_ref:
      '🎉 ¡Felicidades por tu registro exitoso!\n\n🔗 En este paso, necesitas agregar tu enlace de referencia desde tu cuenta personal de Bitnest\n\n1. Ve al sitio web oficial de Bitnest\n2. Haz clic en "<b>Conectar</b>" en la esquina superior derecha\n3. Haz clic en "<b>Invitar amigos</b>"\n4. Haz clic en "<b>Copiar mi enlace</b>"\n5. Envíalo en el campo de abajo 👇🏼',

    // =========================
    // Sorteos y Eventos
    // =========================
    raffle: "🎁 SORTEO 🎁",
    daily_raffle: "🎉 ¡Sorteo Diario!",
    current_prize: "🏆 Premio",
    participants: "👥 Participantes ",
    end_time: "⏰ Resultados a las",
    raffle_text: `✅ <b>Condiciones de participación:</b>\n• Participación mínima activa en el pool: 10 USDT\n• Un intento por persona\n\n`,
    raffle_requirement:
      "Se requiere una participación activa en el pool para participar en el sorteo",
    raffle_wallet_not_set: "⚠️ Primero configure su billetera",
    raffle_already_registered:
      "✅ ¡Está registrado exitosamente en la ronda actual!",
    successfully_registered: "¡Se ha registrado exitosamente en el sorteo!",
    registration_failed: "Error en el registro",
    participate_button: "🎟 Participar",
    no_active_raffle: "No hay ningún sorteo activo en este momento.",
    already_registered_in_raffle: "✅ ¡Ya está registrado en el sorteo actual!",
    new_raffle_started:
      "💰 Premio: {prize} USDT\n" +
      "⏰ Termina en: {hours} horas\n\n" +
      "✅ Su participación en el pool: activa (≥10$)\n\n",
    register_in_raffle: "🤖 Registro en el Sorteo",
    raffle_error: "❌ Error: {error}",

    // De la sección Billetera
    raffle_min_investment_required:
      "Se requiere una participación activa en el pool de al menos 10$ para participar en el sorteo\n\n" +
      "Envíe USDT al pool para poder participar.",
    raffle_registration_success:
      "¡Se ha registrado exitosamente!\n\n¡Ahora participa en el sorteo!",
    eligible_to_participate:
      "💪 Usted es elegible para registrarse en el sorteo",
    raffle_registration_error: "❌ Error de registro: {error}",

    // De la sección Menú y Navegación (para verificación de registro)
    not_registered_yet:
      "❌ Aún no está registrado. Haga clic en el botón de su billetera para registrarse.",
    register_button: "📝 Registrarse",
    registration_check_error: "❌ Error al verificar el registro",
    registering_wallet: "🔄 Registrando su billetera...",
    registration_success:
      "✅ ¡Está registrado exitosamente en la ronda actual!",
    registration_error: "❌ Error de registro",
    try_later_or_contact_admin:
      "Por favor, intente más tarde o contacte al administrador.",
    registration_process_error: "❌ Error durante el registro",
    new_referral_notification: (username) =>
      `👏🏼 Tienes un nuevo referido @${username}`,
    friend: "amigo",
    welcome_error: "👋 ¡Bienvenido! Ocurrió un error al cargar el menú.",
    link_subscription_pending:
      "⌛ <b>Pago pendiente</b>\n\n" +
      "Tu suscripción está esperando la confirmación del pago. " +
      "Si ya pagaste, haz clic en el botón de abajo para verificar el estado.",
    check_payment: "🔄 Verificar pago",
    create_new_payment: "💳 Crear nuevo pago",
    link_subscription_required:
      "❌ <b>La configuración del enlace requiere suscripción</b>\n\n" +
      "✅ Para configurar tu enlace de referencia y activar tu bot, necesitas comprar una suscripción por $10/mes.\n\n",
    buy_subscription: "💳 Comprar suscripción ($10/mes)",
    link_settings_error: "❌ Error cargando la configuración del enlace",
    setup_wallet_first: "❌ Primero configura tu billetera en ajustes",
    custom_amount_message:
      "💰 <b>Ingresa tu monto para enviar al pool </b>\n\n" +
      "Monto mínimo: <b>1 USDT</b>\n" +
      "Monto máximo: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Envía un número - el monto en USDT en el campo de abajo</i>",
    raffle_error: "❌ Error: {error}",
    language_settings: "🌐 Selecciona el idioma",
    select_language: "🌐 <b>Selecciona el idioma:</b>",
    current_language: "Idioma actual: {language}",
    russian: "🇷🇺 Ruso",
    english: "🇺🇸 Inglés",
    french: "🇫🇷 Francés",
    indonesia: "🇮🇩 Indonesia",
    espaniol: "🇪🇸 Español",
    italy: "🇮🇹 Italy",
    german: "🇩🇪 German",
    georgia: "🇬🇪 Georgiana",
    greece: "🇬🇷 Griego",
    swahilli: "🇰🇪 Keniano",
    turkish: "🇹🇷 Turca",
    czech: "🇨🇿 Czech",
    back_to_settings: "◀️ Volver a ajustes",
    contact_mentor: "👨‍💼 Contacta a tu mentor",
    your_mentor: "Tu mentor: {mentor}",
    write_to_mentor: "✉️ Escribir al mentor",
    mentor_not_found: "❌ <b>Mentor no encontrado</b>",
    mentor_not_found_description:
      "No tienes un mentor asignado. Por favor, contacta a soporte.",
    support_service: "⚠️ Servicio de soporte",
    contact_support: "✉️ Contactar a soporte",
    language_changed_ru: "✅ Idioma cambiado a Ruso",
    language_changed_en: "✅ Idioma cambiado a Inglés",
    language_changed_fr: "✅ Idioma cambiado a French",
    language_changed_id: "✅ Idioma cambiado a Indonesia",
    language_changed_es: "✅ Idioma cambiado a Español",
    language_change_error: "❌ Error cambiando el idioma",
    level_activation_title: "Activación de nivel del programa de afiliados",
    your_pool_share: "Tu participación en el pool",
    new_activated_levels: "Nuevos niveles activados",
    activation_status: "Estado de activación",
    how_to_activate: "Cómo activar",
    levels_activate_automatically:
      "Los niveles se activan automáticamente cuando se alcanza el monto de inversión requerido ($100 por nivel)",
    to_activate_level: "Para activar el nivel",
    needs_more: "necesita más",
    refresh_status: "🔄 Actualizar estado",
    levels_check_error: "❌ Error verificando niveles",

    // =========================
    // Menú y navegación
    // =========================
    menu_title: `🎉 Bienvenido, <b>{username}</b>\n\n🚀 <b>BitnestRus Bot - Tu asistente y herramienta de equipo</b>\n✨ <b>Características del bot:</b>\n• 🎁 Sorteos de premios en efectivo\n• 💰 Estadísticas financieras de la billetera\n• 🌊 Instrucciones del pool de liquidez\n• 👥 Programa de afiliados multi-nivel\n• 📊 Análisis y notificaciones\n\n👇 Elige una sección del menú:\n`,
    back: "◀️ Atrás",
    next: "➡️ Siguiente",
    nextreg: " ✍🏼 Completé el registro",
    my_wallet: "💰 Mi billetera",
    liquidity_pool: "🌊 Pool de liquidez",
    affiliate: "👥 Afiliados",
    settings: "⚙️ Ajustes",
    admin: "🔧 Panel de administración",
    settings_title:
      "⚙️ Ajustes\n\nConfigura tus enlaces\n\nSelecciona una acción:",
    start_education: "🎓 Comenzar entrenamiento",
    download_metamask: "🦊 Descargar - MetaMask",
    register_metamask: "🦊 Registrarse - MetaMask",
    register_metamask_mobile: "🦊 Registrarse - MetaMask",
    presentation: "🎥 Presentación",
    video_instructions: "📚 Instrucciones en video",
    official_website: "🔗 Sitio web oficial",
    oficial_site: "✅ Sitio web oficial",
    invest_now_message:
      `💰 <b>Transferencia de USDT al pool de liquidez</b>\n\n` +
      `<b>Rendimiento por plazos:</b>\n` +
      `• <b>1 día</b> - 0.4%\n` +
      `• <b>7 días</b> - 4%\n` +
      `• <b>14 días</b> - 9.5%\n` +
      `• <b>28 días</b> - 24%\n\n` +
      `<i>Todos los fondos <b>(monto de USDT + bonificaciones)</b> son devueltos automáticamente después del período especificado a tu billetera</i>\n\n` +
      `📌 <b>Tu saldo:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Selecciona el monto para enviar al pool:</b>`,
    custom_amount: "🗂 Monto personalizado",
    error_getting_data:
      "❌ Error obteniendo datos, por favor intenta nuevamente.",
    choose_period_message:
      `🔄 Seleccionaste el monto <b>{amount} USDT</b>. Selecciona el plazo para la transferencia al pool:\n\n` +
      `<b>Rendimiento por plazos:</b>\n` +
      `• <b>1 día</b> - 0.4%\n` +
      `• <b>7 días</b> - 4%\n` +
      `• <b>14 días</b> - 9.5%\n` +
      `• <b>28 días</b> - 24%\n\n` +
      `<i>Todos los fondos <b>(monto de USDT + bonificaciones)</b> son devueltos automáticamente después del período especificado a tu billetera</i>\n\n` +
      `👇 <b>Selecciona el plazo para la transferencia al pool:</b>`,
    failed_update_message:
      "Error al actualizar el mensaje, enviando uno nuevo: {error}",
    transaction_search_cancelled:
      "❌ <b>Búsqueda de transacción cancelada por el usuario</b>",
    transaction_search_cancelled_log:
      "✅ Búsqueda de transacción cancelada para el usuario {userId}",
    no_active_transaction_search:
      "❌ No se encontró una búsqueda de transacción activa",
    error_cancelling_search: "❌ Error cancelando la búsqueda: {error}",
    error_cancelling_search_user: "❌ Ocurrió un error al cancelar la búsqueda",
    referral_made_transaction: "¡Tu referido hizo una transacción!",
    your_referral: "Tu referido",
    congrats_referral_reward:
      "¡Felicidades! ¡Ganaste una recompensa por referencia!",
    main_menu: "🏠 Menú principal",
    system_link: "🌐 Enlace del sistema",
    from_your_mentor: "👤 De tu Mentor",
    your_link: "🌐 Tu enlace",
    visit_official_website:
      "Visita el sitio web oficial de la plataforma y aprende todos los detalles y reglas para trabajar con el servicio",
    link: "Enlace",
    open_metamask: "🦊 Abrir MetaMask",
    open_in_browser: "💻 Abrir en navegador de PC",
    website_error: "❌ Error cargando información del sitio web",
    your_investment_portfolio:
      "Tu portafolio de participación activa en el pool",
    transaction: "Transacción",
    term: "Plazo",
    profitability: "Rentabilidad",
    time_left: "Tiempo restante",
    d: "d",
    h: "h",
    type: "Tipo",
    incoming_transaction: "Transacción entrante",
    refund: "Reembolso",
    status: "Estado",
    processing: "Procesando",
    active: "Activo",
    archived: "Archivado",
    returned: "Devuelto",
    total_statistics: "Estadísticas totales",
    total_active_amount: "Monto activo total",
    page: "Página",
    of: "de",
    portfolio_error: "⚠️ Error cargando el portafolio",
    congrats_on_profit: "¡Felicidades por recibir ganancias!",
    investment_notification_sent:
      "Notificación de retorno de inversión enviada al usuario",
    investment_notification_error:
      "Error enviando notificación de retorno de inversión:",
    check_old_transactions: "🔍 Verificar transacciones antiguas",
    data_not_found: "Datos no encontrados. Por favor, actualiza tu portafolio",
    last_page: "Esta es la última página",
    first_page: "Esta es la primera página",
    page_load_error: "Error cargando la página",
    edit_message_error: "Error al editar el mensaje, enviando uno nuevo:",
    user_not_found: "❌ Usuario no encontrado",
    affiliate_network_header: (username) =>
      `👥 <b>Tu red de afiliados, ${username}</b>`,
    affiliate_network_description:
      "17 niveles de tu equipo e ingresos de cada nivel de la rentabilidad de tus referidos",
    level_percentages:
      `<b>• Nivel 1</b> - 20%\n` +
      `<b>• Nivel 2</b> - 10%\n` +
      `<b>• Nivel 3-7</b> - 5%\n` +
      `<b>• Nivel 8-10</b> - 3%\n` +
      `<b>• Nivel 11-17</b> - 1%`,
    level_activation_requirements:
      "Para activar cada nivel, tu participación en el pool debe corresponder a <b>número de nivel * $100</b>",
    all_levels_activation_requirement:
      "Para activar todos los niveles, tu participación personal en el pool = <b>$1700</b>",
    your_personal_share: (amount) =>
      `💰 <b>Tu participación personal en el pool:</b> ${amount}$`,
    activated_levels: (count) => `🎯 <b>Niveles activados:</b> ${count}/17`,
    level_statistics: "📊 <b>Estadísticas de nivel:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Nivel ${level}: ${count} personas | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Nivel ${level}: Sin referidos`,
    no_level_data: "<i>Sin datos de nivel aún</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Total:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 Mis partners",
    my_team: "🧏‍♂️ Mi equipo",
    ref_link: "🔗 Enlace de ref",
    enable_levels: "🔓 Habilitar niveles",
    search: "🔍 Buscar",
    statistics: "📈 Estadísticas",
    affiliate_error: (error) => `❌ Error de afiliados: ${error}`,
    affiliate_load_error: "⚠️ Error cargando el programa de afiliados",
    referral_access_subscription:
      "❌ <b>Acceso al programa de referidos por suscripción</b>\n\n✅ Para configurar tu enlace de referencia y activar tu bot, necesitas comprar una suscripción por $10/mes.",
    referral_invite_text:
      "👋🏻 ¡Hola! Si quieres ganar ingresos pasivos de la exchange TOP-1, únete usando mi enlace 👆",
    your_referral_link: "Tu enlace de referencia",
    referral_invite_description:
      "💡 ¡Invita amigos y gana ingresos de sus participaciones activas en el pool!",
    share_link: "📢 Compartir enlace",
    buy_subscription: "💳 Comprar suscripción ($10/mes)",
    referral_link_error: "❌ Error cargando el enlace de referencia",
    subscription_text:
      "Para comprar una suscripción, contacta al bot de cripto:\n\n🤖 @YourCryptoBot\n\nDespués de pagar la suscripción, tendrás acceso al programa de referidos y otras características exclusivas.",
    go_to_cryptobot: "📲 Ir al bot de cripto",
    check_subscription_status: "🔄 Verificar estado de suscripción",
    subscription_active:
      "✅ ¡Tu suscripción está activa! Ahora puedes invitar referidos.",
    subscription_inactive:
      "❌ La suscripción aún no está activa. Por favor, completa el pago o contacta a soporte.",
    subscription_check_error:
      "❌ Error verificando el estado de la suscripción",
    link_copied: "📋 Enlace de referencia copiado:",
    share_with_friends: "¡Ahora puedes compartirlo con amigos!",
    link_settings_title: "⚙️ Configuración de tu enlace",
    link_settings_description:
      "Estos enlaces serán visibles para tus referidos:",
    choose_link_to_change: "💡 Elige el enlace a cambiar:",
    change_video: "🎥 Cambiar video",
    cancel_input: "❌ Cancelar entrada",
    link_access_subscription:
      "❌ Acceso a la configuración de enlace por suscripción",
    subscription_required:
      "✅ Para configurar el enlace de referencia y activar tu bot, necesitas comprar una suscripción por $10/mes.",
    payment_pending: "⌛ Pago de suscripción pendiente",
    payment_pending_description:
      "Tu suscripción está esperando la confirmación del pago. Si ya pagaste, haz clic en el botón de abajo para verificar el estado.",
    create_new_payment: "💳 Crear nuevo pago",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success:
      "✅ Todos los enlaces restablecidos a la configuración del sistema",
    reset_links_error: "❌ Error restableciendo enlaces",
    subscription_payment_title:
      "💳 Pago de suscripción para configuración de enlace",
    subscription_price: "Precio: <b>10 USDT</b>",
    subscription_duration: "Duración: <b>1 mes</b>",
    pay_via_cryptobot: "🔗 Pagar via crypto bot",
    cancel: "❌ Cancelar",
    subscription_payment_error:
      "⚠️ Ocurrió un error al crear la suscripción. Por favor, intenta nuevamente más tarde.",
    subscription_description:
      "Suscripción para configuración de enlace (1 mes)",
    no_data_to_display: "❌ No hay datos para mostrar",
    nothing_found_for_query: "No se encontró nada para la consulta",
    no_referrals_on_levels: "Aún no tienes referidos en los niveles",
    found_referrals: "Referidos encontrados",
    subscription_activated: "✅ ¡Suscripción activada exitosamente!",
    subscription_activated_description:
      "🎉 Ahora tienes acceso a toda la configuración de enlaces y características del sistema de partners.",
    payment_processing:
      "⌛ Procesando pago. Por favor, intenta nuevamente más tarde.",
    invoice_expired: "❌ La factura ha expirado.",
    payment_not_found: "❌ Pago no encontrado o cancelado.",
    payment_check_error: "⚠️ Error verificando el pago.",
    payment_check_error_description:
      "Por favor, intenta nuevamente más tarde o contacta a soporte.",
    new_payment: "💳 Nuevo pago",
    enter_presentation_link: "📊 Ingresa el enlace de la presentación:",
    enter_video_link: "🎥 Ingresa el enlace de las instrucciones en video:",
    enter_official_link: "🌐 Ingresa el enlace del sitio web oficial:",
    referral_stats: "📊 Estadísticas de nivel",
    level: "Nivel",
    referrals_count: "👥 Referidos",
    total_invested: (amount) => `💰 Enviado al pool: ${amount} USDT\n\n`,
    search_referrals_prompt: "🔍 Ingresa nombre de usuario para buscar:",
    your_referrals: "👥 Tus referidos",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Página ${current} de ${total}`,
    no_referrals_on_level: "Aún no hay referidos en este nivel",
    your_personal_partners: "Tus partners personales",
    id: "ID",
    total_personal_partners: "📊 Total de partners personales",
    no_personal_partners_yet: "Aún no tienes partners personales",
    invite_friends_tip:
      "💡 ¡Invita amigos usando tu enlace de referencia para que se conviertan en tus partners personales!",
    personal_partners_error: "❌ Error cargando partners personales",
    not_subscribed:
      '❌ No estás suscrito a nuestro chat. Por favor, suscríbete y haz clic en "Verificar suscripción" nuevamente.',
	please_subscribe_to_chat: "Para continuar, necesitas suscribirte a nuestro canal.",
    subscribe_to_chat: "📢 Suscribirse al chat",
    check_subscription_btn: "🔄 Verificar suscripción",
    wallet_not_configured: "❌ Billetera no configurada",
    wallet: "Billetera",
    search_results: '🔍 Resultados de búsqueda para "{query}":',
    levels: "📊 Niveles: {levels}",
    sent_to_pool: "💰 Enviado al pool: {amount} USDT",
    referrals_title: `👥 <b>Tus referidos</b> | <b>Nivel {level}</b>`,
    invested_currency: "USDT",
    page_label: "📄 Página {page} de {total}",
    back_btn: "◀️ Atrás",

    // =========================
    // Errores y notificaciones
    // =========================
    error: "❌ Ocurrió un error. Por favor, intenta nuevamente.",
    invalid_address:
      "❌ Dirección de billetera inválida. Por favor, verifica e intenta nuevamente.",
    access_denied: "⛔ Acceso denegado",
    loading: "⏳ cargando...",
    updated: "Actualizado",
    enabled: "✅ Habilitado",
    disabled: "❌ Deshabilitado",
    turn_on: "🔔 Encender",
    turn_off: "🔕 Apagar",
    total_invested_level: "Participación personal en el fondo común",
  },
  sw: {
    // 🔥 MFUMO WA REFERRAL - SWAHILI
    referral_reward_notification: "🎉 <b>Tuzo ya referral imepokelewa!</b>\n\n💰 <b>Kiasi:</b> {amount} USDT\n\n💼 Fedha tayari ziko kwenye salio lako na zinapatikana kwa kutoa au kuwekeza tena.",
    referral_reward_my_portfolio: "💼 Portfolio Yangu",
    
    missed_referral_reward: "😡 <b>Tuzo ya referral ilikosa!</b>\n\n💰 <b>Kiasi:</b> {amount} USDT\n📊 <b>Kiwango:</b> {level}\n\n🔐 Wezesha kiwango {level} kupokea tuzo za referral!",
    activate_levels_button: "💼 Wezesha Viwango",
    
    // Ufuatiliaji na ukaguzi
    starting_periodic_check: "🔄 Kuanza ukaguzi wa mara kwa mara wa miamala ya referral (kila dakika)...",
    periodic_check_started: "✅ Ufuatiliaji wa pochi za watumiaji umeanza",
    checking_recent_transactions: "⏰ Kukagua miamala ya dakika ya mwisho: tangu {time}",
    wallet_check_progress: "🔍 Kukagua miamala mipya kwa pochi: {wallet}",
    fresh_transaction_found: "🕐 Miamala mipya imepatikana: {time}, {amount} USDT",
    wallet_transactions_summary: "📊 Kwa pochi {wallet} imepatikana {count} miamala mipya ya referral kwenye dakika ya mwisho",
    
    // Matokeo ya ukaguzi
    force_check_started: "🔍 Ukaguzi wa kulazimishwa wa miamala MPYA ya referral (dakika ya mwisho)...",
    no_wallets_for_check: "❌ Hakuna pochi za watumiaji za kukagua",
    wallets_check_summary: "📊 Inakagua {count} pochi za watumiaji kutoka dakika ya mwisho",
    check_results: "📊 Matokeo ya ukaguzi wa dakika ya mwisho:",
    wallets_checked: "• Pochi zilizokaguliwa: {count}",
    fresh_transactions_found: "• Miamala mipya ilipatikana: {count}",
    successfully_processed: "• Imefanikiwa kusindika: {count}",
    errors_count: "• Makosa: {count}",
    
    // Usindikaji wa miamala
    processing_fresh_transaction: "🔍 Inasindika TX MPYA ya referral:\n- Hash: {hash}\n- Mpokeaji: {recipient}\n- Kiasi: {amount} USDT\n- Muda: {time}",
    transaction_already_processed: "⏭️ Miamala {hash} tayari imesindika",
    user_not_found_by_wallet: "❌ Mtumiaji na pochi {wallet} hajapatikana",
    user_found: "✅ Mtumiaji amepatikana: TG {telegramId}, ID {userId}",
    referral_reward_processed: "✅ Tuzo MPYA ya referral imesindika kwa mtumiaji {telegramId}",
    
    // Makosa
    transaction_processing_error: "❌ Hitilafu ya usindikaji wa miamala MPYA ya referral",
    wallet_check_error: "❌ Hitilafu ya ukaguzi wa pochi {wallet}",
    periodic_check_error: "❌ Hitilafu ya ukaguzi wa mara kwa mara: {error}",
    force_check_error: "❌ Hitilafu ya ukaguzi wa kulazimishwa wa miamala mipya: {error}",
    
    // Arifa za msimamizi
    bot_not_available: "❌ Bot haipatikani kwa kutuma arifa",
    user_blocked_bot: "🚫 Mtumiaji {telegramId} amezuia bot",
    user_marked_blocked: "✅ Mtumiaji {telegramId} amewekwa alama kama aliyezuiwa",
    
    // Mchakato wa tuzo
    referral_reward_start: "🔔 Mwanzo processReferralRewardEnhanced:\n- Pochi: {wallet}\n- Kiasi: {amount} USDT\n- TX Hash: {hash}\n- Kutoka: {from}\n- Muda: {time}",
    transaction_recorded: "✅ Miamala imerekodiwa kwenye hifadhidata",
    balance_updated: "✅ Salio la mtumiaji limesasishwa +{amount} USDT",
    referral_reward_db_success: "✅ Tuzo ya referral imefanikiwa kusindika kwenye hifadhidata",
    sending_user_notification: "🔔 Kutuma arifa kwa mtumiaji {telegramId}",
    user_no_telegram_id: "⚠️ Mtumiaji {userId} hana telegram_id",
    database_overflow_error: "⚠️ Hitilafu ya kufurika kwa uga wa nambari, kujaribu kwa usahihi mdogo",
    retry_failed: "❌ Jaribio la pili pia limeshindwa",
    referral_reward_end: "✅ MWISHO processReferralRewardEnhanced kwa pochi {wallet}",
    
    // Tuzo rahisi
    simple_reward_processing: "🔔 Inasindika tuzo ya referral: {wallet}, {amount} USDT",
    simple_reward_recorded: "✅ Tuzo ya referral imerekodiwa kwa mtumiaji {telegramId}",
    
    // Arifa
    notification_sent: "✅ Arifa ya tuzo ya referral imetumwa kwa mtumiaji {telegramId}",
    notification_error: "❌ Hitilafu ya kutuma arifa kwa mtumiaji {telegramId}: {error}",
    
    // Sasisho za pochi
    wallets_updater_started: "✅ Ufuatiliaji wa pochi za watumiaji umeanza",
    
    // Miamala yatima
    orphan_transaction_processing: "🔍 Inasindika miamala ya referral yatima kwa mtumiaji {userId}",
    missed_reward_notification_sent: "⚠️ Arifa ya tuzo iliyokosa imetumwa kwa kiwango {level}",
    orphan_transaction_error: "❌ Hitilafu ya usindikaji wa miamala yatima",
    
    // Jumla
    wallet_short: "{wallet}...",
    hash_short: "{hash}...",
    time_format: "YYYY-MM-DD HH:mm:ss",
    incomplete_registration_title: "Haujaumaliza usajili katika boti!",
    incomplete_registration_message: "Maliza usajili ili kuanza kupata faida na usikose fursa.",
    complete_registration_to_earn: "Maliza usajili na uanze kupata!",
    complete_registration_to_earn_start: "🚀 <b>Tuma tu amri</b> <code>/start</code> <b>kuendelea na usajili!</b>",
    invalid_tx_hash_format:
      "❌ <b>Muundo batili wa TX Hash</b>\n\nTafadhali ingiza hash halali ya muamala (herufi 64, huanza na 0x)",
    checking_transaction_blockchain:
      "🔍 <b>Inakagua muamala kwenye blockchain...</b>\n\nInapata taarifa kuhusu kiasi na tarehe ya muamala...",
    transaction_check_error:
      "❌ <b>Hitilafu ya ukaguzi wa muamala</b>\n\n{error}",
    blockchain_check_error:
      "❌ Hitilafu ilitokea wakati wa kukagua muamala kwenye blockchain",
    transaction_found_details:
      "✅ <b>Muamala umepatikana!</b>\n\n💰 <b>Kiasi:</b> {amount} USDT\n📅 <b>Tarehe:</b> {date}\n\n⏰ <b>Chagua kipindi cha kutuma kwenye dimbwi:</b>",
    invalid_period_range:
      "❌ <b>Kipindi batili</b>\n\nTafadhali ingiza nambari kutoka siku 1 hadi 28",
    period_processing_error: "❌ Hitilafu ilitokea wakati wa kusindika kipindi",

    // Периоды
    period_1_day: "Siku 1",
    period_7_days: "Siku 7",
    period_14_days: "Siku 14",
    period_28_days: "Siku 28",
    custom_period: "📅 Kipindi maalum",

    // Админка
    bot_disabled_success: "🔴 Boti imezimwa kwa watumiaji",
    bot_disable_error: "❌ Hitilafu: {error}",
    admin_panel: "🔧 Paneli ya msimamizi",
    invalid_prize_amount: "Kiasi batili cha tuzo",
    prize_set_success: "✅ Tuzo imewekwa: {amount} USDT",
    prize_sent_success:
      "✅ TX hash imehifadhiwa. Tuzo imetumwa kwenye mkataba.",
    prize_send_error: "❌ Hitilafu: {error}",
    winner_prize_notification:
      "🎯 Ushindi wako {amount} USDT umepelekwa kwenye mkataba!\n\n⏰ Utapata faida katika siku 28.\n📋 TX Hash: {txHash}",

    // Домены
    domain_not_allowed_with_details:
      `❌ <b>Kikoa hairuhusiwi</b>\n\n{domain_not_allowed_description}\n\n<b>Kikoa chako:</b> {domain}\n\n`,
    website_rules:
      "👏🏼 Kiunga chako cha ushirika kimeunganishwa kikamilifu!\n\n🏁 Uko kwenye mstari wa mwisho! Ili kuwezesha mawasiliano, kuweza kuuliza maswali na kukutana na timu, unahitaji kujiunga na mkutano wetu wa gumzo.\n\n1. Nenda kwenye mkutano huu: @BitnestRus\n\n2. Bofya kitufe cha 'Jiunge na Kikundi'\n\n3. Hakikisha umewasha arifa\n\n4. Bofya kitufe hapa chini 'Nimejiunga'\n\n👇🏼 Au tumia kitufe hapa chini ili kujiunga moja kwa moja na mkutano wetu wa gumzo",
    chat_link: "📢  Jiunge na Kikundi",
    disclaimer:
      "✅ Mhitaji mpendwa, mfumo huu umeundwa kwa mafunzo na kuwaarifu watumiaji wapya ambao hawajawahi kuingiliana na mfumo wa Bitnest\n\n🤔 Tafadhali tuambie, je! Umewahi kusajiliwa awali?\n\n1. Bonyeza (HAPANA) - ikiwa huna akaunti bado katika mfumo na unataka kukamilisha mafunzo na kuwa sehemu ya timu yetu\n\n2. Bonyeza (NDIO) - ikiwa tayari una akaunti katika mfumo na umetuma USDT kwenye mzunguko\n\nHuduma za boti hii hutolewa kwa watumiaji wapya tu ambao hawakuwapo kwenye mfumo hapo awali na walibonyeza kitufe cha ✅ HAPANA",
    disclaimer_no: "✅ HAPANA, MIMI NI MSHIRIKI MPYA",
    disclaimer_yes: "⛔️ NDIO, MIMI NI MWANACHAMA WA TIMU NYINGINE",
    block_confirmation_title: "Uthibitisho",
    block_confirmation_message: "Ikiwa wewe ni mwanachama wa timu nyingine, wasiliana na mkurugenzi wako.\n\nJe, una uhakika unataka kuzuia akaunti yako?",
    back_button: "◀️ Nyuma",
    confirm_block_button: "✅ Ndio, zuia",
    account_blocked_message: "🚫 <b>Akaunti imezuiwa</b>\n\nAkaunti yako imezuiwa kwa ombi lako.\n\nIkiwa hii ilitokea kwa makosa, wasiliana na usaidizi @BitnestRusSupport.",
    account_blocked:
      "❌ Kwa bahati mbaya, huduma za boti hii hutolewa kwa watumiaji wapya tu. Akaunti yako haijaamilishwa. Kwa maswali yoyote @BitnestRusSupport",
    please_try_again: "Tafadhali jaribu tena",
    add_custom_transaction: "➕ Ongeza muamala",
    adding_custom_transaction: "🔗 <b>Kuongeza muamala wako</b>",
    enter_tx_hash_prompt: "Tafadhali weka <b>TX Hash</b> ya muamala yako:",
    transaction_requirements:
      "• Lazima ifanyike kwenye mtandao wa BSC (Binance Smart Chain)\n• Lazima iwe muamala wa USDT",
    tx_hash_example:
      `📝 <b>Mfano:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>\n\nTazama muamala wako kwenye dimbwi <a href="https://bscscan.com/address/{wallet}#tokentxns">Nenda</a>`,
    enter_amount_prompt: "💰 <b>Weka kiasi cha muamala katika USDT:</b>",
    amount_example: "Mfano: <code>100.50</code>",
    select_period_prompt: "⏰ <b>Chagua muda wa uwekezaji:</b>",
    verifying_transaction: "🔍 <b>Inaangalia muamala kwenye blockchain...</b>",
    transaction_details:
      "TX Hash: <code>{txHash}</code>\nKiasi: {amount} USDT\nMuda: {period} siku",
    please_wait: "Tafadhali subiri...",
    transaction_already_exists: "Muamala huu tayari umeongezwa kwenye mfumo",
    transaction_not_found: "Muamala haujapatikana",
    transaction_not_confirmed: "Muamala haujathibitishwa au umeshindwa",
    transaction_wrong_sender:
      "Muamala umetumwa kutoka kwa mkoba sahihi. Mkoba wako: {userWallet}, mtumaji katika muamala: {txFrom}",
    transaction_wrong_receiver:
      "Muamala umetumwa kwa mkoba sahihi wa mfumo. Mpokeaji anapaswa kuwa: {systemWallet}",
    transaction_amount_mismatch:
      "Kiasi hakifanani. Kwenye blockchain: {blockchainAmount} USDT, umeweka: {enteredAmount} USDT",
    transaction_not_usdt: "Huu sio muamala wa USDT",
    transaction_decode_error: "Imeshindwa kusimbua data ya muamala wa USDT",
    blockchain_error: "Hitilafu ya kuangalia kwenye blockchain: {error}",
    transaction_added_success: "✅ <b>Muamala umeongezwa kwa mafanikio!</b>",
    investment_details: "📊 <b>Maelezo ya uwekezaji:</b>",
    investment_amount: "• Kiasi: {amount} USDT",
    investment_period: "• Muda: {period} siku",
    investment_tx_hash: "• TX Hash: <code>{txHash}</code>",
    investment_profitability: "• Faida: {profit}%",
    investment_added_to_portfolio:
      "💼 Uwekezaji umeongezwa kwenye portfolio yako.",
    transaction_add_error: "❌ <b>Hitilafu ya kuongeza muamala</b>",
    error_reason: "Sababu: {error}",
    your_investment_portfolio_add: "➕ Ongeza muamala",
    language_changed_success: "✅ Lugha imebadilishwa kwa Kiswahili!",
    description: "Maelezo",
    welcome: `👋🏼 Karibu <b>{username}</b> - hii ni zana ya timu ya jamii yetu. Boti hii itakuongoza hatua kwa hatua kupitia mfumo na kukusaidia kuwa sehemu ya timu yetu!\n\n🎥 Tumeandaa maagizo ya video hatua kwa hatua yanayoeleza na kuonyesha mchakato mzima\n\n👇🏼 Ili kuanza kujifunza na kupata matokeo yako ya kwanza, bofya kitufe cha "🎓 Anza Kujifunza"`,
    welcome_back: "👋 Umeshakamilisha mafunzo! Karibu tena!",
    education_title: "🎓 Nyenzo za Kielimu\nChagua mada:",
    finish: "✅ Mafunzo yamekamilika!",

    // =========================
    // Wallet
    // =========================
    wallet_installation:
      "📲 <b>Usakinishaji wa Mkoba</b>\nPakua na usakinishe moja ya mikoba inayosaidiwa.",
    ask_wallet_address:
      "👍🏼 Chaguo bora! Hebu tuanze kujifunza:\n\n💵 Kwanza kabisa katika ulimwengu wa Web3 na DeFi, unahitaji kuwa na mkoba wako wa kibinafsi wa crypto. Tutaisakinisha sasa hivi:\n\n1. Nenda kwenye tovuti rasmi ya programu ya <b>MetaMask</b>\n\n2. Sakinisha programu kwenye simu yako\n\n3. Unda mkoba na hakikisha unaandika maneno muhimu mahali salama\n\n4. Weka mtandao wa BSC - Binance Smart Chain (BEP20)\n\n5. Nakili anwani yako ya umma ya mkoba 0x.............\n\n6. Tuma anwani hii kama ujumbe kwenye uga hapa chini 👇🏼",
    enter_wallet: `🥳 Hongera, mkoba wako umeunganishwa kwa mafanikio!\n\n📝 Katika hatua hii, unahitaji kujiandikisha kwenye tovuti rasmi ya Bitnest (tazama video)\n\n1. Nakili kiungo hiki \n\n<code>{referral_link_bitnest}</code>\n\n na uifungue kwenye kivinjari cha ndani cha mkoba wako\n\n2. Bofya "Unganisha" kwenye kona ya juu kulia\n\n3. Thibitisha uthibitishaji kwenye tovuti kwenye dirisha linalojitokeza la mkoba wako \n\n<i><b>*Ikiwa tovuti haifunguki, wezesha programu ya herufi 3 (ambayo itakuruhusu kufikia tovuti)</b></i>\n\n👇🏼 Au tumia vitufe hapa chini ili kwenda kiotomatiki kwenye mkoba wako na kufungua ukurasa unaohitajika`,
    your_wallet: "💼 Mkoba Wako wa Crypto\n\n📌 Anwani (BEP20)",
    install_wallet:
      "👍🏼 Chaguo bora! Hebu tuanze kujifunza:\n\n💵 Kwanza kabisa katika ulimwengu wa Web3 na DeFi, unahitaji kuwa na mkoba wako wa kibinafsi wa crypto. Tutaisakinisha sasa hivi:\n\n1. Nenda kwenye tovuti rasmi ya programu ya <b>MetaMask</b>\n\n2. Sakinisha programu kwenye simu yako\n\n3. Unda mkoba na hakikisha unaandika maneno muhimu mahali salama\n\n4. Weka mtandao wa BSC - Binance Smart Chain (BEP20)\n\n5. Nakili anwani yako ya umma ya mkoba 0x.............\n\n6. Tuma anwani hii kama ujumbe kwenye uga hapa chini 👇🏼",
    loading_balance: "⏳ Inapata taarifa za salio...",
    refresh: "🔄 Sasisha",
    bnb_balance: "Salio:\n• BNB",
    usdt_balance: "• USDT",
    usdc_balance: "• USDC",
    token_balance: "Salio la Tokeni",
    wallet_not_configured: "❌ Mkoba haujawekwa",
    send_usdt: "💸 Tuma USDT",
    check_my_investment: "💸 Tuma USDT",
    error_amount_not_selected: "❌ Hitilafu: kiasi hakijachaguliwa",
    error_wallet_not_configured: "❌ Hitilafu: mkoba haujawekwa",
    back_to_amount_selection: "◀️ Rudi kwenye uteuzi wa kiasi",
    configure_wallet: "⚙️ Weka Mkoba",

    // =========================
    // DeFi and BitNest
    // =========================
    your_mentor: (mentor) => `Mshauri wako: ${mentor}`,
    write_to_mentor: "✉️ Andika kwa mshauri",
    what_is_bitnest:
      "🏗 <b>BitNest ni nini</b>\nShughuli za uwazi, udhibiti wa fedha zako.",
    defi_basics:
      "📊 Misingi ya DeFi.\nIfuatayo - jinsi uwekezaji katika mifuko inavyofanya kazi.",
    liquidity_pool_text:
      "💎 Mfuko wa Uwazi\n\n💵 Hapa unaweza kutuma USDT kwenye mfuko wa uwazi na kupokea bonasi.\n\nChagua kitendo:",
    my_investments_empty: "📊 Huna uwekezaji bado.",
    investment_saved: "✅ Data imehifadhiwa",
    investment_return_received: (amount) =>
      `Mzunguko wako wa <b>${amount} $</b> umepokelewa`,
    congrats_profit: "Hongera kwa kupokea faida!",
    referral_reward_received: "Umepokea tuzo ya kumtaja!",
    back_to_main_menu: "🏠 Rudi kwenye menyu kuu",
    user: "Mtumiaji",
    amount: "Kiasi",
    congrats_referral_earned: "Hongera! Umepata tuzo ya kumtaja!",
    balance_replenished: (amount) => `Salio lako limejazwa kwa ${amount} USDT`,
    referral_reward_received_amount: (amount) =>
      `Umepokea tuzo ya kumtaja ${amount}`,
    you_have_inactive_levels: "Una viwango visivyoamilishwa!",
    if_invest_amount_activate_levels: (amount, levels) =>
      `Kwa kutuma ${amount} USDT unaweza kuamilisha viwango: ${levels}`,
    activate_levels_to_earn:
      "Amilisha viwango ili kupata mapato kutoka kwa wateja waliotajwa!",
    new_levels_activated: (levels) => `Viwango vipya vimeamilishwa: ${levels}`,
    now_earn_from_levels:
      "Sasa unapata mapato kutoka kwa viwango hivi vya timu yako!",
    invalid_tx_hash_contact_support:
      "❌ Hashi ya muamala batili. Tafadhali wasiliana na msaada.",
    congrats_liquidity_pool_success:
      "Hongera! Ujumbe wako kwenye mfuko wa uwazi ulifanikiwa!",
    transaction_details: "Maelezo ya Muamala",
    block: "Kizuizi",
    period: "Muda",
    days: "siku",
    total_return: "Jumla ya kiasi cha kurudi",
    return_date: "Tarehe ya kurudi",
    error_updating_pool_status:
      "❌ Hitilafu ya kusasisha hali ya kutuma kwenye mfuko. Wasiliana na msaada.",
    transaction_not_found_after_attempts: (txHash) =>
      `❌ Muamala haujapatikana baada ya majaribio kadhaa.\n\n` +
      `TX Hash: ${txHash}\n\n` +
      `Sababu zinazowezekana:\n` +
      `• Muamala haujathibitishwa bado na mtandao\n` +
      `• TX Hash batili\n` +
      `• Matatizo ya mtandao wa BSC\n\n` +
      `Tafadhali angalia TX Hash na ujaribu tena au wasiliana na msaada.`,
    transaction_wrong_address: (actualTo) =>
      `❌ Muamala umetumwa kwa anwani sahihi!\n\n` +
      `▸ Anwani iliyopokelewa: ${actualTo}\n` +
      `▸ Anwani inayotarajiwa: 0xFCc442275A2620E40F17598F9987F320fB57526e\n\n` +
      `Tafadhali hakikisha unatumia USDT kwa anwani sahihi ya mfuko.`,
    transaction_not_confirmed: (status) =>
      `❌ Muamala haujathibitishwa. Hali: ${status}`,
    tx_hash: "TX Hash",
    check_bscscan_contact_support:
      "Tafadhali angalia hali ya muamala kwenye BscScan na wasiliana na msaada ikiwa ni lazima.",
    error_checking_transaction:
      "❌ Hitilafu ya kuangalia muamala. Jaribu tena baadaye au wasiliana na msaada.",
    investment_confirmation:
      `💰 <b>Thibitisha Kutuma kwenye Mfuko</b>\n\n` +
      `📊 <b>Maelezo ya Muamala:</b>\n` +
      `▸ Kiasi: <b>{amount} USDT</b>\n` +
      `▸ Muda: <b>{period} siku</b>\n` +
      `▸ Faida: <b>{profitPercent}%</b>\n` +
      `▸ Faida inayotarajiwa: <b>{expectedProfit} USDT</b>\n` +
      `▸ Jumla ya kiasi cha kurudi: <b>{totalReturn} USDT</b>\n` +
      `▸ Tarehe ya kurudi: <b>{formattedDate}</b>\n\n` +
      `🔄 <b>Maagizo ya Kutuma:</b>\n\n` +
      `1. Fungua programu ya MetaMask\n\n` +
      `2. Nenda kwenye tovuti rasmi ya Bitnest\n\n` +
      `3. Bofya <b>"Unganisha"</b> kwenye kona ya juu kulia - <i>(ikiwa unaona ikoni ya mkoba, endelea na hatua inayofuata)</i>\n\n` +
      `4. Bofya kwenye ikoni ya mkoba na nenda kwenye sehemu ya Mzunguko\n\n` +
      `5. Weka kiasi cha kutuma\n\n` +
      `6. Chagua muda wa kutuma\n\n` +
      `7. Bofya kitufe cha "Mzunguko"\n\n` +
      `8. Thibitisha kutuma kwenye tovuti kwenye dirisha linalojitokeza la mkoba wako\n\n` +
      `👇🏼 Au tumia vitufe hapa chini ili kwenda kiotomatiki kwenye mkoba wako na kufungua ukurasa unaohitajika`,
    send_metamask_mobile: "🦊 Tuma - MetaMask 📲",
    transaction_search_timer: `⚠️ Inasubiri ujumbe wako, maagizo hapo juu\n\n<b>🔎 Baada ya kutuma, tutaanza kutafuta muamala ...</b>\n⏰ <b>Muda uliowekwa kwa kutuma na kutafuta muamala wako:</b> 20:00 dakika...\n\n`,
    cancel_search: "❌ Ghairi utafutaji",
    failed_delete_timer_message: "Imeshindwa kufuta ujumbe wa timer: {error}",
    investment_details_base:
      `💰 <b>Thibitisha Kutuma kwenye Mfuko</b>\n\n` +
      `📊 <b>Maelezo ya Muamala:</b>\n` +
      `▸ Kiasi: <b>{amount} USDT</b>\n` +
      `▸ Muda: <b>{period} siku</b>\n` +
      `▸ Hali: <b>Imegairiwa</b>\n\n`,
    transaction_search_cancelled:
      "❌ <b>Utafutaji wa muamala umeghairiwa na mtumiaji</b>",
    failed_update_message: "Imeshindwa kusasisha ujumbe, inatuma mpya: {error}",
    transaction_search_cancelled_log:
      "✅ Utafutaji wa muamala umeghairiwa kwa mtumiaji {userId}",
    no_active_transaction_search:
      "❌ Hakuna utafutaji wa muamala unaoendelea uliopatikana",
    error_cancelling_search: "❌ Hitilafu ya kughairi utafutaji: {error}",
    error_cancelling_search_user:
      "❌ Hitilafu imetokea wakati wa kughairi utafutaji",
    processing_found_transaction:
      "🔄 Inachakata muamala uliopatikana kwa mtumiaji {userId}",
    investment_in_process_not_found:
      "Uwekezaji wenye hali ya in_process haujapatikana",
    failed_update_investment_status: "Imeshindwa kusasisha hali ya uwekezaji",
    failed_delete_previous_message:
      "Imeshindwa kufuta ujumbe uliopita: {error}",
    transaction_confirmed_message:
      `💰 <b>Thibitisha Kutuma kwenye Mfuko</b>\n\n` +
      `📊 <b>Maelezo ya Muamala:</b>\n` +
      `▸ Kiasi: <b>{amount} USDT</b>\n` +
      `▸ Muda: <b>{period} siku</b>\n` +
      `▸ Faida inayotarajiwa: <b>{expectedProfit} USDT</b>\n` +
      `▸ Jumla ya kiasi cha kurudi: <b>{totalReturn} USDT</b>\n` +
      `▸ Tarehe ya kurudi: <b>{returnDate}</b>\n\n` +
      `✅ <b>Muamala umehakikiwa!</b>\n` +
      `📊 <b>Hash ya Muamala:</b> <code>{hash}</code>\n` +
      `💰 <b>Kiasi halisi:</b> {actualAmount} USDT\n` +
      `⏰ <b>Imehakikiwa:</b> {confirmationTime}`,
    activating_user_levels:
      "✅ Inamilisha viwango vya mtumiaji kulingana na kiasi cha uwekezaji",
    user_prefix: "Mtumiaji_",
    notification_sent_to_referrer: "✅ Arifa imetumwa kwa mtaja {telegramId}",
    referrer_not_found_or_missing_data:
      "⚠️ Mtaja hajapatikana au data muhimu haipo",
    user_has_no_referrer: "⚠️ Mtumiaji hana mtaja",
    error_sending_referral_notification:
      "Hitilafu ya kutuma arifa ya kumtaja: {error}",
    error_sending_missed_rewards:
      "Hitilafu ya kutuma arifa za malipo yaliyokosekana: {error}",
    error_sending_missed_referrals:
      "Hitilafu ya kutuma arifa ya wateja waliotajwa waliokosekana: {error}",
    level_activation_notifications_sent:
      "🎯 Arifa za uanzishaji wa kiwango zimetumwa kwa viwango: {levels}",
    error_sending_level_activation:
      "Hitilafu ya kutuma arifa ya uanzishaji wa kiwango: {error}",
    transaction_processed_successfully:
      "✅ Muamala umechakatwa kwa mtumiaji {userId}",
    error_processing_transaction:
      "❌ Hitilafu ya kuchakata muamala kwa mtumiaji {userId}: {error}",
    transaction_processing_error_message:
      `❌ <b>Hitilafu ya kuchakata muamala</b>\n\n` +
      `TX Hash: {hash}\n` +
      `Hitilafu: {error}\n\n` +
      `Tafadhali wasiliana na msaada.`,
    activated_levels: "Viwango Vilivyoamilishwa",
    levels_activation_benefit:
      "Sasa unapata mapato kutoka kwa viwango hivi vya timu yako!",
    referral_made_transaction: "Mtaja wako amefanya muamala!",
    your_referral: "Mtaja wako",
    congrats_referral_reward: "Hongera! Umepata tuzo ya kumtaja!",
    transaction_check_started: "Kuanza kuangalia muamala...",
    checking_for: "Ukaguzi utafanyika kwa",
    minutes: "dakika",

    // =========================
    // Affiliate Program
    // =========================
    affiliate_text: `👥 Mtandao wako wa ushirika, {username}\n\nViwango 17 vya timu yako na kupata mapato kutoka kwa kila kiwango kulingana na faida ya wateja waliotajwa\n\n<b>Kiwango 1</b> - 20%\n<b>Kiwango 2</b> - 10%\n<b>Kiwango 3 - 7</b> - 5%\n<b>Kiwango 8 - 10</b> - 3%\n<b>Kiwango 11 - 17</b> - 1%\n\nIli kuamilisha kila kiwango, sehemu yako kwenye mfuko lazima ifanane na <b>Kiwango № * 100$</b>\nIli kuamilisha viwango vyote, sehemu yako ya kibinafsi kwenye mfuko = <b>1700$</b>\n\n📊 Takwimu za jumla za kiwango:\n{pools.levels}\n\n💰 Jumla: 0 ref. | 0.000 USDT`,
    your_referral_sent: "Mtaja wako ametuma!",
    missed_referral_reward: (missedAmount, level) =>
      `Umekosa tuzo ya kumtaja ${missedAmount}$ kutoka kiwango ${level}`,
    activate_level_to_earn:
      "Amilisha kiwango ili kupata mapato kutoka kwa muundo mzima!",
    check_subscription: "✅ Nimejiandikisha",
    website_ref:
      '🎉 Hongera kwa usajili uliofanikiwa!\n\n🔗 Katika hatua hii, unahitaji kuongeza kiungo chako cha ushirika kutoka kwa akaunti yako ya kibinafsi ya Bitnest\n\n1. Nenda kwenye tovuti rasmi ya Bitnest\n\n2. Bofya "<b>Unganisha</b>" kwenye kona ya juu kulia<i> - (ikiwa unaona ikoni ya mkoba, endelea na hatua inayofuata)</i>\n\n3. Bofya "<b>Walete Marafiki</b>"\n\n4. Bofya "<b>Nakili kiungo changu</b>"\n\n5. Kitume kwenye uga hapa chini 👇🏼',

    // =========================
    // Raffles and Events
    // =========================
    raffle: "🎁 BAHATI NASIBI 🎁",
    daily_raffle: "🎉 Bahati Nasibi ya Kila Siku!",
    current_prize: "🏆 Tuzo",
    participants: "👥 Tayari wanashiriki ",
    end_time: "⏰ Matokeo",
    raffle_text: `✅ <b>Masharti ya kushiriki:</b>\n• Sehemu ndogo zaidi inayotumika kwenye mfuko: 10 USDT\n• Jaribio moja kwa mtu\n\n`,
    raffle_requirement:
      "Sehemu inayotumika kwenye mfuko inahitajika ili kushiriki kwenye bahati nasibi",
    raffle_wallet_not_set: "⚠️ Weka mkoba wako kwanza",
    raffle_already_registered:
      "✅ Umejiandikisha kwa mafanikio kwenye raundi ya sasa!",
    successfully_registered:
      "Umejiandikisha kwa mafanikio kwenye bahati nasibi!",
    registration_failed: "Usajili umeshindwa",
    participate_button: "🎟 Shiriki",
    no_active_raffle: "Hakuna bahati nasibi inayoendelea kwa sasa.",
    already_registered_in_raffle:
      "✅ Tayari umejiandikisha kwenye bahati nasibi ya sasa!",
    new_raffle_started:
      "💰 Tuzo: {prize} USDT\n" + "⏰ Muda uliobaki: {hours} masaa\n\n",
    register_in_raffle: "🤖 Usajili wa Bahati Nasibi",
    raffle_error: "❌ Hitilafu: {error}",
    raffle_min_investment_required:
      "Sehemu inayotumika kwenye mfuko kutoka 10$ inahitajika ili kushiriki kwenye bahati nasibi\n\n" +
      "Tuma USDT kwenye mfuko ili kupata uwezo wa kushiriki.",
    raffle_registration_success:
      "Umejiandikisha kwa mafanikio!\n\nSasa unashiriki kwenye bahati nasibi!",
    eligible_to_participate: "💪 Unastahili kujiandikisha kwenye bahati nasibi",
    raffle_registration_error: "❌ Hitilafu ya usajili: {error}",
    not_registered_yet:
      "❌ Hujajiandikisha bado. Bofya kitufe cha mkoba wako ili kujiandikisha.",
    register_button: "📝 Jisajili",
    registration_check_error: "❌ Hitilafu ya kuangalia usajili",
    registering_wallet: "🔄 Inasajili mkoba wako...",
    registration_success:
      "✅ Umejiandikisha kwa mafanikio kwenye raundi ya sasa!",
    registration_error: "❌ Hitilafu ya usajili",
    try_later_or_contact_admin: "Jaribu baadaye au wasiliana na msimamizi.",
    registration_process_error: "❌ Hitilafu ya mchakato wa usajili",
    mentor_not_found: "❌ <b>Mshauri hajapatikana</b>",
    mentor_not_found_description:
      "Huna mshauri aliyepewa. Tafadhali wasiliana na msaada.",

    // =========================
    // Other
    // =========================
    new_referral_notification: (username) => `👏🏼 Una mtaja mpya @${username}`,
    friend: "rafiki",
    welcome_error: "👋 Karibu! Hitilafu imetokea wakati wa kupakia menyu.",
    link_subscription_pending:
      "⌛ <b>Malipo ya usajili yanasubiri</b>\n\n" +
      "Usajili wako unasubiri uthibitisho wa malipo. " +
      "Ikiwa umelipisha tayari, bofya kitufe hapa chini ili kuangalia hali.",
    check_payment: "🔄 Angalia Malipo",
    create_new_payment: "💳 Unda Malipo Mapya",
    link_subscription_required:
      "❌ <b>Upataji wa mipangilio ya kiungo kwa usajili</b>\n\n" +
      "✅ Ili kusanidi kiungo chako cha kumtaja na kuamilisha boti yako, unahitaji kununua usajili kwa 10$/mwezi.\n\n",
    buy_subscription: "💳 Nunua Usajili (10$/mwezi)",
    link_settings_error: "❌ Hitilafu ya kupakia mipangilio ya kiungo",
    setup_wallet_first: "❌ Kwanza, weka mkoba wako kwenye mipangilio",
    custom_amount_message:
      "💰 <b>Weka kiasi chako cha kutuma kwenye mfuko </b>\n\n" +
      "Kiasi cha chini: <b>1 USDT</b>\n" +
      "Kiasi cha juu zaidi: <b>100000000 USDT</b>\n\n" +
      "📝 <i>Tuma nambari - kiasi katika USDT kwenye uga hapa chini</i>",

    // =========================
    // Menu and Navigation
    // =========================
    menu_title: `🎉 <b>Karibu, {username}</b>\n\n🚀 <b>BitnestRus Bot - Msaidizi wako wa kuaminika na zana ya timu</b>\n\n✨ <b>Uwezo wa Boti:</b>\n• 🎁 Bahati nasibi za pesa\n• 💰 Takwimu za kifedha za mkoba wako\n• 🌊 Maagizo ya kufanya kazi na mfuko wa uwazi\n• 👥 Mpango wa ushirika wa viwango vingi\n• 📊 Uchambuzi na arifa\n\n👇 Chagua sehemu kwenye menyu:\n`,
    back: "◀️ Nyuma",
    next: "➡️ Ifuatayo",
    nextreg: " ✍🏼 Nimejiandikisha",
    my_wallet: "💰 Mkoba Wangu",
    liquidity_pool: "🌊 Mfuko wa Uwazi",
    my_portfolio: "💼 Portfolio Yangu",
    presentation: "🎥 Wasilisho",
    video_instructions: "📚 Maagizo ya Video",
    official_website: "🔗 Tovuti Rasmi",
    oficial_site: "✅ Tovuti Rasmi",
    affiliate: "👥 Mpango wa Ushirika",
    settings: "⚙️ Mipangilio",
    admin: "🔧 Paneli ya Msimamizi",
    settings_title:
      "⚙️ Mipangilio\n\nHapa unaweza kusanidi viungo vyako\n\nChagua kitendo:",
    start_education: "🎓 Anza Kujifunza",
    download_metamask: "🦊 Pakua - MetaMask",
    register_metamask: "🦊 Usajili - MetaMask",
    register_metamask_mobile: "🦊 Usajili - MetaMask",
    invest_now_message:
      `💰 <b>Tuma USDT kwenye Mfuko wa Uwazi</b>\n\n` +
      `<b>Faida kwa muda:</b>\n` +
      `• <b>siku 1</b> - 0.4%\n` +
      `• <b>siku 7</b> - 4%\n` +
      `• <b>siku 14</b> - 9.5%\n` +
      `• <b>siku 28</b> - 24%\n\n` +
      `<i>Fedha zote <b>(Kiasi cha USDT + bonasi)</b> hurudishwa kiotomatiki baada ya muda maalum kwenye mkoba wako</i>\n\n` +
      `📌 <b>Salio lako:</b>\n` +
      `• BNB: {bnb_balance}\n` +
      `• USDT: {usdt_balance}\n\n` +
      `👇🏼 <b>Chagua kiasi cha kutuma kwenye mfuko:</b>`,
    custom_amount: "🗂 Kiasi Maalum",
    error_getting_data: "❌ Hitilafu ya kupata data, jaribu tena.",
    choose_period_message:
      `🔄 Ulichagua kiasi <b>{amount} USDT</b>. Chagua muda wa kutuma kwenye mfuko:\n\n` +
      `<b>Faida kwa muda:</b>\n` +
      `• <b>siku 1</b> - 0.4%\n` +
      `• <b>siku 7</b> - 4%\n` +
      `• <b>siku 14</b> - 9.5%\n` +
      `• <b>siku 28</b> - 24%\n\n` +
      `<i>Fedha zote <b>(Kiasi cha USDT + bonasi)</b> hurudishwa kiotomatiki baada ya muda maalum kwenye mkoba wako</i>\n\n` +
      `👇 <b>Chagua muda wa kutuma kwenye mfuko:</b>`,
    main_menu: "🏠 Kwenye Menyu Kuu",
    timer_message_id_not_found: "❌ timer_message_id haijapatikana",
    transaction_search_timer_countdown: (timeString) =>
      `⚠️ Inasubiri ujumbe wako, maagizo hapo juu\n\n<b>🔎 Baada ya kutuma, tutaanza kutafuta muamala ...</b>\n\n⏰ <b>Muda uliowekwa kwa kutuma na kutafuta muamala wako:</b> ${timeString}  dakika...\n\n`,
    timer_error: "❌ Hitilafu ya timer: {error}",
    timer_stopped_message_not_found:
      "⏹️ Timer imesimamishwa: ujumbe haujapatikana au haupatikani",
    timer_minor_error_continue: "⚠️ Hitilafu ndogo ya timer, inaendelea...",
    transaction_timeout_message:
      "⏰ <b>Muda wa kutafuta muamala umekwisha</b>\n\n" +
      "❌ Haikuweza kupata uthibitisho wa muamala ndani ya muda uliowekwa.\n\n" +
      "Sababu zinazowezekana:\n" +
      "• Muamala haujathibitishwa bado na mtandao\n" +
      "• TX Hash batili\n" +
      "• Matatizo ya mtandao wa BSC\n\n" +
      "Tafadhali angalia hali ya muamala kwenye BscScan na ujaribu tena.",
    transaction_timeout_log:
      "⏰ Muda wa muamala umekwisha kwa mtumiaji {userId}",
    transaction_timeout_error:
      "❌ Hitilafu ya kuchakata muda wa muamala: {error}",
    transaction_not_found_try_again:
      "❌ Muamala haujapatikana. Jaribu kuanza upya.",
    awaiting_transaction_check:
      "🔍 <b>Inasubiri ukaguzi wa muamala...</b>\n\n" +
      "Boti itaangalia blockchain ndani ya dakika 2-5.\n" +
      "Utapokea arifa kuhusu matokeo.",
    transaction_not_found_message:
      `❌ <b>Muamala haujapatikana</b>\n\n` +
      `Sababu zinazowezekana:\n` +
      `• Muamala haujathibitishwa bado na mtandao\n` +
      `• Haikutumwa kwa anwani ya mfuko\n` +
      `📞 Ikiwa umetuma USDT, wasiliana na msaada\n` +
      `🔍 TX Hash: toa hashi ya muamala`,
    transaction_not_found_notification_sent:
      "✅ Arifa ya muamala usiopatikana imetumwa kwa mtumiaji {userId}",
    error_sending_notification: "Hitilafu ya kutuma arifa: {error}",
    request_tx_hash_message:
      "📝 <b>Tafadhali weka hashi ya muamala (TX Hash):</b>\n\n" +
      "Baada ya kutuma USDT, nakili TX Hash kutoka kwenye mkoba wako na uitume hapa.",
    error_requesting_tx_hash: "Hitilafu ya kuomba TX Hash: {error}",
    presentation_message:
      `📊 <b>Wasilisho</b>\n\n` +
      `🎥 Wasilisho la kina la video ambalo litakusaidia kuelewa faida za jukwaa na zana hii\n\n`,
    presentation_error: "Hitilafu ya wasilisho: {error}",
    presentation_load_error: "❌ Hitilafu ya kupakia wasilisho",
    user_not_determined: "❐ Haikuweza kubainisha mtumiaji",
    not_configured: "Haijawekwa",
    from_your_inviter: `\n👤 Kutoka kwa mwaliko wako: {name}`,
    system_video_instruction: `\n📋 Maagizo ya video ya mfumo`,
    video_instructions_header: "🎥 <b>Maagizo ya Video</b>",
    video_instructions_description:
      "📚 Kozi ya kina ya video ambayo utajifunza undani wote wa kufanya kazi na mfumo na utajifunza kuingiliana na mfuko",
    video_link_available: `🔗 <b>Kiungo cha video:</b>\n\n<code>{link}</code>`,
    video_link_not_available: `❌ <b>Kiungo hakipatikani</b>\n\n`,
    video_instruction_error: "Hitilafu ya maagizo ya video: {error}",
    video_instruction_load_error: "❌ Hitilafu ya kupakia maagizo ya video",
    system_link: "🌐 Kiungo cha Mfumo",
    from_your_mentor: "👤 Kutoka kwa Mshauri Wako",
    your_link: "🌐 Kiungo Chako",
    visit_official_website:
      "Tembelea tovuti rasmi ya jukwaa na ujifunze undani wote na sheria za kufanya kazi na huduma",
    link: "Kiungo",
    open_metamask: "🦊 Fungua MetaMask",
    open_in_browser: "💻 Fungua kwenye Kivinjari cha Kompyuta",
    website_error: "❌ Hitilafu ya kupakia taarifa za tovuti",
    your_investment_portfolio:
      "Portfolio yako ya sehemu inayotumika kwenye mfuko",
    transaction: "Muamala",
    term: "Muda",
    profitability: "Faida",
    time_left: "Muda uliobaki",
    d: "s",
    h: "saa",
    expected_profit: "Faida inayotarajiwa",
    type: "Aina",
    incoming_transaction: "Muamala unaoingia",
    refund: "Kurudishwa",
    status: "Hali",
    active: "Inatumika",
    archived: "Ujumbe uliohifadhiwa",
    returned: "Imerudishwa",
    total_statistics: "Takwimu za jumla",
    total_active_amount: "Jumla ya kiasi kinachotumika",
    page: "Ukurasa",
    of: "ya",
    portfolio_error: "⚠️ Hitilafu ya kupakia portfolio",
    congrats_on_profit: "Hongera kwa kupokea faida!",
    bot_not_available: "Boti haipatikani kwa kutuma arifa",
    investment_notification_sent:
      "Arifa ya kurudi kwa uwekezaji imetumwa kwa mtumiaji",
    investment_notification_error:
      "Hitilafu ya kutuma arifa ya kurudi kwa uwekezaji:",
    check_old_transactions: "🔍 Angalia Miamala ya Zamani",
    checking_old_transactions: "Inaangalia miamala ya zamani",
    this_may_take_seconds: "Hii inaweza kuchukua sekunde chache...",
    wallet_not_found: "❌ Mkoba haujapatikana. Unganisha kwenye wasifu wako.",
    check_completed: "Ukaguzi umekamilika",
    added_to_portfolio: "Imeongezwa kwenye portfolio",
    no_transactions_found: "Hakuna muamala uliopatikana",
    target_wallet: "Mkoba Lengwa",
    found_transactions: "Miamala iliyopatikana",
    already_added: "tayari imeongezwa",
    added: "imeongezwa",
    summary: "Muhtasari",
    new_added: "Mpya imeongezwa",
    already_exist: "Tayari ipo",
    total_checked: "Jumla iliyoangaliwa",
    check_transactions_error: "Hitilafu ya kuangalia miamala",
    transactions: "miamala",
    your_active_pool: "<b>Sehemu yako inayotumika kwenye mfuko</b>",
    your_active_pool_share: (amount) =>
      `💰 <b>Sehemu yako inayotumika kwenye mfuko:</b> ${amount}$`,
    your_personal_share: "Sehemu yako ya jumla kwenye mfuko",
    level_activation_title: "Uanzishaji wa Kiwango cha Mpango wa Ushirika",
    affiliate_network_header: (username) =>
      `👥 <b>Mtandao wako wa ushirika, ${username}</b>`,
    affiliate_network_description:
      "Viwango 17 vya timu yako na kupata mapato kutoka kwa kila kiwango kulingana na faida ya wateja waliotajwa",
    level_percentages:
      `<b>• Kiwango 1</b> - 20%\n` +
      `<b>• Kiwango 2</b> - 10%\n` +
      `<b>• Kiwango 3-7</b> - 5%\n` +
      `<b>• Kiwango 8-10</b> - 3%\n` +
      `<b>• Kiwango 11-17</b> - 1%`,
    level_activation_requirements:
      "Ili kuamilisha kila kiwango, sehemu yako kwenye mfuko lazima ifanane na <b>Kiwango № * 100$</b>",
    all_levels_activation_requirement:
      "Ili kuamilisha viwango vyote, sehemu yako ya kibinafsi kwenye mfuko = <b>1700$</b>",
    activated_levels: (count) =>
      `🎯 <b>Viwango vilivyoamilishwa:</b> ${count}/17`,
    level_statistics: "📊 <b>Takwimu za kiwango:</b>",
    level_with_referrals: (status, level, count, amount) =>
      `${status} Lvl. ${level}: ${count} watu. | ${amount} USDT`,
    level_no_referrals: (status, level) =>
      `${status} Lvl. ${level}: Hakuna wateja waliotajwa`,
    no_level_data: "<i>Bado hakuna data ya kiwango</i>",
    total_summary: (referrals, investments) =>
      `\n💰 <b>Jumla:</b> ${referrals} ref. | ${investments} USDT`,
    my_partners: "📋 Washirika Wangu",
    my_team: "🧏‍♂️ Timu Yangu",
    ref_link: "🔗 Kiungo cha Ref",
    enable_levels: "🔓 Wezesha Viwango",
    search: "🔍 Tafuta",
    statistics: "📈 Takwimu",
    affiliate_error: "Hitilafu ya ushirika: {error}",
    affiliate_load_error: "⚠️ Hitilafu ya kupakia mpango wa ushirika",
    subscription_text:
      "Ili kununua usajili, wasiliana na cryptobot:\n\nBaada ya kulipa usajili, utapata ufikiaji wa mpango wa kumtaja na vipengele vingine vya kipekee.",
    go_to_cryptobot: "📲 Nenda kwenye Cryptobot",
    check_subscription_status: "🔄 Angalia Usajili",
    subscription_active:
      "✅ Usajili wako unatumika! Sasa unaweza kuwaleta wateja.",
    subscription_inactive:
      "❌ Usajili haujatumika bado. Tafadhali kamilisha malipo au wasiliana na msaada.",
    subscription_check_error: "❌ Hitilafu ya kuangalia hali ya usajili",
    data_not_found: "Data haijapatikana. Sasisha portfolio",
    last_page: "Huu ni ukurasa wa mwisho",
    first_page: "Huu ni ukurasa wa kwanza",
    page_load_error: "Hitilafu ya kupakia ukurasa",
    edit_message_error: "Haikuweza kubadilisha ujumbe, inatuma mpya:",
    referral_access_subscription:
      "❌ <b>Ufikiaji wa mpango wa kumtaja kwa usajili</b>\n\n✅ Ili kusanidi kiungo chako cha kumtaja na kuamilisha boti yako, unahitaji kununua usajili kwa 10$/mwezi.",
    referral_invite_text:
      "👋🏻 Hujambo! Ikiwa unataka kupata mapato ya pasivu kutoka kwa ubadilishaji wa TOP-1, jiunge kwa kutumia kiungo changu 👆",
    your_referral_link: "Kiungo Chako cha Kumtaja",
    referral_invite_description:
      "💡 Waleta marafiki na upate mapato kutoka kwa sehemu zao zinazotumika kwenye mfuko!",
    share_link: "📢 Shiriki Kiungo",
    referral_link_error: "❌ Hitilafu ya kupakia kiungo cha kumtaja",
    link_copied: "📋 Kiungo cha kumtaja kimenakiliwa:",
    share_with_friends: "Sasa unaweza kushiriki na marafiki!",
    link_settings_title: "⚙️ Mipangilio Yako ya Kiungo",
    link_settings_description: "Viungo hivi vitaonekana kwa wateja waliotajwa:",
    choose_link_to_change: "💡 Chagua kiungo kubadilisha:",
    change_video: "🎥 Badilisha Video",
    cancel_input: "❌ Ghairi Ingizo",
    user_not_found: "❌ Mtumiaji hajapatikana",
    link_access_subscription: "❌ Ufikiaji wa mipangilio ya kiungo kwa usajili",
    subscription_required:
      "✅ Ili kusanidi kiungo chako cha kumtaja na kuamilisha boti yako, unahitaji kununua usajili kwa 10$/mwezi.",
    buy_subscription_button: "💳 Nunua Usajili (10$/mwezi)",
    payment_pending: "⌛ Malipo ya usajili yanasubiri",
    payment_pending_description:
      "Usajili wako unasubiri uthibitisho wa malipo. Ikiwa umelipisha tayari, bofya kitufe hapa chini ili kuangalia hali.",
    link_not_set: "❌",
    link_set: "✅",
    reset_links_success:
      "✅ Viungo vyote vimerudishwa kwenye mipangilio ya mfumo",
    reset_links_error: "❌ Hitilafu ya kurejesha viungo",
    subscription_payment_title: "💳 Malipo ya usajili kwa mipangilio ya kiungo",
    subscription_price: "Gharama: <b>10 USDT</b>",
    subscription_duration: "Muda wa uhalali: <b>mwezi 1</b>",
    pay_via_cryptobot: "🔗 Lipa kupitia Cryptobot",
    cancel: "❌ Ghairi",
    subscription_payment_error:
      "⚠️ Hitilafu imetokea wakati wa kuunda usajili. Tafadhali jaribu tena baadaye.",
    subscription_description: "Usajili wa mipangilio ya kiungo (mwezi 1)",
    no_data_to_display: "❌ Hakuna data ya kuonyesha",
    nothing_found_for_query: "Kwa swala",
    no_referrals_on_levels: "Bado huna wateja waliotajwa kwenye viwango",
    invested_in_pool: "Imetumwa kwenye mfuko",
    found_referrals: "Wateja waliotajwa wal",

    subscription_activated: "✅ Usajili umeamilishwa kwa mafanikio!",
    subscription_activated_description:
      "🎉 Sasa una ufikiaji wa mipangilio yote ya kiungo na kazi za mfumo wa washirika.",
    payment_processing: "⌛ Malipo yanachakatwa. Jaribu kuangalia baadaye.",
    invoice_expired: "❌ Anwani ya malipo imekwisha.",
    payment_not_found: "❌ Malipo hayajapatikana au yameghairiwa.",
    payment_check_error: "⚠️ Hitilafu ya kuangalia malipo.",
    payment_check_error_description:
      "Tafadhali jaribu tena baadaye au wasiliana na msaada.",
    try_again: "🔄 Jaribu Tena",
    new_payment: "💳 Malipo Mapya",
    enter_presentation_link: "📊 Weka kiungo cha wasilisho:",
    enter_video_link: "🎥 Weka kiungo cha maagizo ya video:",
    enter_official_link: "🌐 Weka kiungo cha tovuti rasmi:",
    referral_stats: "📊 Takwimu za Kiwango",
    level: "Kiwango",
    referrals_count: "👥 Wateja waliotajwa:",
    total_invested: (amount) => `💰 Imepelekwa kwenye mfuko: ${amount} USDT`,
    search_referrals_prompt: "🔍 Weka jina la mtumiaji kutafuta:",
    no_referrals: "👥 Bado huna wateja waliotajwa",
    level_not_found: "❌ Kiwango hakijapatikana",
    your_referrals: "👥 Wateja Wako Waliotajwa",
    date: (date) => `📅 ${date}`,
    invested: (amount) => `💰 ${amount} USDT`,
    page_of: (current, total) => `📄 Ukurasa ${current} wa ${total}`,
    no_referrals_on_level: "Bado hakuna wateja waliotajwa kwenye kiwango hiki",
    back_to_affiliate: "◀️ Rudi kwenye Mpango wa Ushirika",
    your_personal_partners: "Washirika Wako wa Kibinafsi",
    id: "Kitambulisho",
    total_personal_partners: "📊 Jumla ya Washirika wa Kibinafsi",
    no_personal_partners_yet: "Bado huna washirika wa kibinafsi",
    invite_friends_tip:
      "💡 Waleta marafiki kwa kutumia kiungo chako cha kumtaja ili kuwa washirika wako wa kibinafsi!",
    personal_partners_error: "❌ Hitilafu ya kupakia washirika wa kibinafsi",
    your_pool_share: "Sehemu yako kwenye mfuko",
    new_activated_levels: "Viwango Vipya Vilivyoamilishwa",
    activation_status: "Hali ya Uanzishaji wa Kiwango",
    how_to_activate: "Jinsi ya kuamilisha",
    levels_activate_automatically:
      "Viwango huamilishwa kiotomatiki ukifikia kiasi kinachohitajika cha uwekezaji (100$ kwa kila kiwango)",
    to_activate_level: "Ili kuamilisha kiwango",
    needs_more: "inahitaji zaidi",
    refresh_status: "🔄 Sasisha Hali",
    levels_check_error: "❌ Hitilafu ya kuangalia viwango",
    link_settings: "⚙️ Mipangilio ya Kiungo",
    contact_mentor: "🙆‍♂️ Wasiliana na Mshauri",
    community_chat: "💬 Gumzo la Jamii",
    support_service: "⚠️ Huduma ya Msaada",
    language_settings: "🌐 Lugha / Lugha",
    language_changed_ru: "✅ Lugha imebadilishwa kuwa Kirusi",
    language_changed_en: "✅ Lugha imebadilishwa kuwa Kiingereza",
    language_changed_fr: "✅ Lugha imebadilishwa kuwa Kifaransa",
    language_changed_id: "✅ Lugha imebadilishwa kuwa Kiindonesia",
    language_changed_es: "✅ Lugha imebadilishwa kuwa Kihispania",
    language_change_error: "❌ Hitilafu ya kubadilisha lugha",
    not_subscribed:
      '❌ Hujajiandikisha kwenye gumzo letu. Tafadhali jiandikishe na ubonyeze "Angalia Usajili" tena.',
	please_subscribe_to_chat: "Ili kuendelea, unahitaji kujiunga na kituo chetu.",
    subscribe_to_chat: "📢 Jiandikishe Kwenye Gumzo",
    check_subscription_btn: "🔄 Angalia Usajili",
    wallet: "Mkoba",
    invalid_url_format: "❌ Muundo batili wa kiungo",
    subscription_required_for_links:
      "❌ Usajili unaotumika unahitajika kwa mipangilio ya kiungo",
    subscription_required_description:
      "💳 Nunua usajili kwa 10$/mwezi ili kusanidi viungo vyako",
    domain_not_allowed: "❌ Kiungo hiki hakipeleki kwenye kozi ya timu",
    domain_not_allowed_description:
      "✅ Weka kiungo cha muundo sahihi au wasiliana na huduma ya msaada",
    your_domain: "Kikoa chako: {domain}",
    link_saved_success: "✅ Kiungo kimehifadhiwa kwa mafanikio!",
    link_save_error: "❌ Hitilafu ya kuhifadhi kiungo",
    invalid_referral_link:
      "❌ Muundo batili wa kiungo. Tafadhali weka kiungo sahihi cha HTTP/HTTPS.",
    referral_link_save_error: "❌ Hitilafu ya kuhifadhi kiungo. Jaribu tena.",
    invalid_investment_amount: "❌ <b>Kiasi batili!</b>",
    investment_amount_limits:
      "Kiasi cha chini: <b>1 USDT</b>\nKiasi cha juu zaidi: <b>100000000 USDT</b>",
    enter_correct_amount: "📝 <i>Weka kiasi sahihi kama nambari</i>",
    investment_chosen_amount: "🔄 Ulichagua kiasi <b>{amount} USDT</b>.",
    choose_investment_period: "Chagua muda wa kutuma kwenye mfuko:",
    investment_yield: "<b>Faida kwa muda:</b>",
    investment_return_info:
      "<i>Fedha zote <b>(Kiasi cha USDT + bonasi)</b> hurudishwa kiotomatiki baada ya muda maalum kwenye mkoba wako</i>",
    select_period: "👇 <b>Chagua muda wa kutuma kwenye mfuko:</b>",
    search_results: '🔍 Matokeo ya utafutaji kwa "{query}":',
    levels: "📊 Viwango: {levels}",
    sent_to_pool: "💰 Imepelekwa kwenye mfuko: {amount} USDT",
    admin_prize_set: "✅ Tuzo imewekwa: {amount} USDT",
    admin_time_set:
      "✅ Muda umewekwa: anza saa {startHour}:00, muda {durationHours} masaa",
    admin_funds_returned: "✅ Fedha zimerudishwa kwa raundi #{roundId}",
    invalid_round_id: "❌ Kitambulisho batili cha Raundi",
    admin_error: "❌ Hitilafu ya kutekeleza amri",
    invalid_wallet_format: "❌ Muundo batili wa anwani ya mkoba.",
    wallet_format_details:
      "✅ Muundo sahihi: 0x + herufi 40 (tarakimu na herufi A-F)",
    wallet_wrong_example: "❌ Mfano mbaya: 0x123, 0xghijklmnop...",
    wallet_network_warning:
      "⚠️ Hakikisha anwani inamilikiwa na mtandao wa BSC (Binance Smart Chain)",
    wallet_already_used:
      "❌ Mkoba huu tayari umetumika na mtumiaji mwingine. Tafadhali tumia mkoba tofauti.",
    invalid_tx_hash: "❌ <b>Muundo batili wa TX Hash!</b>",
    tx_hash_format: "TX Hash lazima ianze na 0x na iwe na herufi 64.",
    checking_transaction: "🔍 Inaangalia muamala...",
    transaction_accepted: "✅ <b>Muamala umehakikiwa kwa ukaguzi!</b>",
    transaction_check_time:
      "Boti itaangalia hali ya muamala ndani ya dakika 2-5.",
    transaction_notification: "Utapokea arifa wakati muamala unapothibitishwa.",
    transaction_save_error:
      "❌ Hitilafu ya kuhifadhi muamala. Tafadhali wasiliana na msaada.",
    use_menu_buttons: "Tumia vitufe vya menyu kwa urambazaji",
    referrals_title:
      `👥 <b>Wateja Wako Waliotajwa</b> | <b>Kiwango {level}</b>`,
    date_label: "📅",
    invested_label: "💰",
    invested_currency: "USDT",
    page_label: "📄 Ukurasa {page} wa {total}",
    back_btn: "◀️ Nyuma",
    select_language: "🌐 <b>Chagua lugha:</b>",
    current_language: "Lugha ya sasa: {language}",
    russian: "🇷🇺 Kirusi",
    english: "🇺🇸 Kiingereza",
    french: "🇫🇷 Kifaransa",
    indonesia: "🇮🇩 Kiindonesia",
    espaniol: "🇪🇸 Kihispania",
    italy: "🇮🇹 Kiitaliano",
    german: "🇩🇪 Kijerumani",
    back_to_settings: "◀️ Rudi kwenye Mipangilio",
    total_invested_level: "Sehemu ya kibinafsi kwenye mfuko",
    error: "❌ Hitilafu imetokea, tafadhali jaribu tena.",
    invalid_address: "❌ Anwani batili.",
    access_denied: "⛔ Ufikiaji umekataliwa",
    loading: "⏳ Inapakia...",
    updated: "Imesasishwa",
    enabled: "✅ Imeamilishwa",
    disabled: "❌ Imezimwa",
    turn_on: "🔔 Washe",
    turn_off: "🔕 Zima",

    // Дополнительные переводы для новых функций
    add_custom_transaction: "➕ Ongeza Muamala",
    enter_tx_hash:
      "🔗 <b>Kuongeza Muamala Wako</b>\n\nTafadhali weka <b>TX Hash</b> ya muamala yako:\n\n• Muamala lazima itumwe kwa mkoba wako\n• Lazima ifanyike kwenye mtandao wa BSC (Binance Smart Chain)\n• Lazima iwe muamala wa USDT\n\n📝 <b>Mfano:</b>\n<code>0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef</code>",
    enter_amount:
      "💰 <b>Weka kiasi cha muamala katika USDT:</b>\n\nMfano: <code>100.50</code>",
    select_period_custom: "⏰ <b>Chagua muda wa uwekezaji:</b>",
    verifying_transaction:
      "🔍 <b>Inaangalia muamala kwenye blockchain...</b>\n\nTX Hash: <code>{txHash}</code>\nKiasi: {amount} USDT\nMuda: {period} siku\n\nTafadhali subiri...",
    transaction_requirements: `📋 <b>Mahitaji ya Muamala:</b>\n• TX Hash lazima iwe sahihi\n• Muamala lazima itumwe kutoka kwa mkoba wako: <code>{wallet}</code>\n• Muamala lazima itumwe kwa mkoba wa mfumo: <code>0xFCc442275A2620E40F17598F9987F320fB57526e</code>\n• Kiasi lazima kifanane na kilichowekwa\n• Muamala haipaswi kuwa tayari imeongezwa kwenye mfumo\n• Muamala lazima iwe USDT kwenye mtandao wa BSC`,
    transaction_added_success:
      "✅ <b>Muamala umeongezwa kwa mafanikio!</b>\n\n📊 <b>Maelezo ya Uwekezaji:</b>\n• Kiasi: {amount} USDT\n• Muda: {period} siku\n• TX Hash: <code>{txHash}</code>\n• Faida: {profit}%\n\n💼 Uwekezaji umeongezwa kwenye portfolio yako.",

    // Новые переводы для проверки транзакций
    transaction_sent_wrong_wallet:
      "❌ Muamala umetumwa kutoka kwa mkoba tofauti. Mkoba wako: {userWallet}, mtumaji katika muamala: {txFrom}",
    transaction_sent_wrong_system_wallet:
      "❌ Muamala haikutumwa kwa mkoba wa mfumo. Mpokeaji anapaswa kuwa: {systemWallet}",
    transaction_already_exists: "❌ Muamala huu tayari umeongezwa kwenye mfumo",
    transaction_amount_mismatch:
      "❌ Kiasi hakifanani. Kwenye blockchain: {blockchainAmount} USDT, umeweka: {enteredAmount} USDT",

    // Дни для периодов
    period_1_day: "siku 1",
    period_7_days: "siku 7",
    period_14_days: "siku 14",
    period_28_days: "siku 28",

    // Проценты доходности
    yield_1_day: "0.4%",
    yield_7_days: "4%",
    yield_14_days: "9.5%",
    yield_28_days: "24%",

    // Статусы транзакций
    processing: "Inachakatwa",
    completed: "Imekamilika",
    failed: "Imeshindwa",
    pending: "Inasubiri",

    // Типы транзакций
    deposit: "Amana",
    withdrawal: "Utoaji",
    investment: "Uwekezaji",
    referral_reward: "Tuzo ya Kumtaja",
    profit: "Faida",

    // Уведомления
    notification_new_referral: "🎉 Una mtaja mpya!",
    notification_level_activated: "🎯 Kiwango kimeamilishwa",
    notification_profit_received: "💰 Umepokea faida",
    notification_investment_return: "🔄 Uwekezaji wako umerudi",

    // Кнопки действий
    confirm: "Thibitisha",
    cancel: "❌ Ghairi",
    retry: "Jaribu Tena",
    view_details: "Angalia Maelezo",
    view_on_bscscan: "Angalia kwenye BscScan",

    // Сообщения об ошибках блокчейна
    blockchain_connection_error: "❌ Hitilafu ya muunganisho wa blockchain",
    transaction_not_mined: "❌ Muamala haujachimbwa bado",
    insufficient_funds: "❌ Fedha hazitoshi",
    gas_price_too_high: "❌ Bei ya gesi ni kubwa sana",
    network_busy: "❌ Mtandao una shughuli nyingi",

    // Успешные операции
    operation_successful: "✅ Operesheni imefanikiwa",
    investment_created: "✅ Uwekezaji umeundwa",
    levels_activated: "✅ Viwango vimeamilishwa",
    balance_updated: "✅ Salio limesasishwa",

    // Информационные сообщения
    estimated_time: "⏰ Muda unaokadiriwa",
    current_block: "📦 Kizuizi cha sasa",
    gas_fee: "⛽ Ada ya gesi",
    network_fee: "🌐 Ada ya mtandao",

    // Общие термины
    success: "Mafanikio",
    warning: "Onyo",
    info: "Taarifa",
    error: "Hitilafu",
    attention: "Umakini",

    // Валюты
    currency_usdt: "USDT",
    currency_bnb: "BNB",
    currency_busd: "BUSD",

    // Сети
    network_bsc: "BSC",
    network_ethereum: "Ethereum",
    network_polygon: "Polygon",

    // Время
    seconds: "sekunde",
    minutes: "dakika",
    hours: "masaa",
    days: "siku",
    weeks: "wiki",
    months: "miezi",

    // Статусы кошельков
    wallet_connected: "Mkoba umeunganishwa",
    wallet_disconnected: "Mkoba umeachwa",
    wallet_low_balance: "Salio la chini",

    // Уровни реферальной системы
    level_1: "Kiwango 1",
    level_2: "Kiwango 2",
    level_3: "Kiwango 3", 
    level_4: "Kiwango 4",
    level_5: "Kiwango 5",
    level_6: "Kiwango 6",
    level_7: "Kiwango 7",
    level_8: "Kiwango 8",
    level_9: "Kiwango 9",
    level_10: "Kiwango 10",
    level_11: "Kiwango 11",
    level_12: "Kiwango 12",
    level_13: "Kiwango 13",
    level_14: "Kiwango 14",
    level_15: "Kiwango 15",
    level_16: "Kiwango 16",
    level_17: "Kiwango 17",
  },
};

export function getTranslation(lang = 'ru') {
  return (key, params = {}) => {
    let translation = locales[lang]?.[key] || key;
    
    // Replace parameters in string
    Object.keys(params).forEach(param => {
      translation = translation.replace(new RegExp(`{${param}}`, 'g'), params[param]);
    });
    
    return translation;
  };
}